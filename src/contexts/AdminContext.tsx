"use client";
import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const { Header, Content, Footer, Sider } = Layout;

interface IAdminContext {
  setGoBack: Dispatch<SetStateAction<boolean>>;
  setGoHome: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setTitle: Dispatch<SetStateAction<string>>;
}
const initialAdminContext: IAdminContext = {
  setGoHome: () => false,
  setGoBack: () => false,
  setLoading: () => false,
  setTitle: () => "",
};
const AdminContext = createContext<IAdminContext>(initialAdminContext);
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Phân quyền", "1", <FileOutlined rev={undefined} />),
  getItem("Người dùng", "2", <PieChartOutlined rev={undefined} />),
  getItem("Danh mục", "4", <FileOutlined rev={undefined} />),
  getItem("Bài viết", "3", <DesktopOutlined rev={undefined} />),
  // getItem("User", "sub1", <UserOutlined rev={undefined} />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
  // getItem("Team", "sub2", <TeamOutlined rev={undefined} />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
];
export const AdminContextProvider = (props: PropsWithChildren) => {
  const [goHome, setGoHome] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const searchParams = useSearchParams();
  const value = {
    setGoBack,
    setGoHome,
    setTitle,
    setLoading,
  };
  useEffect(() => {
    searchParams;
    setLoading(false);
  }, [searchParams]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AdminContext.Provider value={value}>
      <Layout hasSider>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="!fixed top-0 bottom-0 left-0 h-screen min-h-screen overflow-auto">
          <div className="flex-center h-10 py-2">
            <Image
              width={300}
              height={300}
              src={"/tien-logo-long.png"}
              alt="logo"
              className="h-full w-auto"
              loading="lazy"
            />
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout
          className={clsx(
            {
              "pl-[200px]": !collapsed,
            },
            "transition-all",
            "min-h-screen"
          )}>
          <Header
            className="flex h-10 items-center justify-start p-0 px-2"
            style={{ background: colorBgContainer }}>
            <Button
              type="text"
              className="flex h-8 w-8 items-center justify-center"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlined rev={undefined} />
                ) : (
                  <MenuFoldOutlined rev={undefined} />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
            />
          </Header>
          <Content className="mx-2">
            <Breadcrumb className="py-2">
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="inset-0"
              style={{
                background: colorBgContainer,
              }}>
              {props.children}
            </div>
          </Content>
          <Footer className="text-center">
            Ant Design ©{moment().format("YYYY")} Created by Đỗ Ngọc Minh Tiến
          </Footer>
        </Layout>
      </Layout>
    </AdminContext.Provider>
  );
};

export function useAdminContext({
  canGoBack,
  canGoHome,
  pageTitle,
}: {
  canGoBack: boolean;
  canGoHome: boolean;
  pageTitle: string;
}) {
  const { setGoBack, setGoHome, setTitle, setLoading } =
    useContext(AdminContext); // first load is light

  useEffect(() => {
    setGoBack(canGoBack);
  }, [canGoBack, setGoBack]);
  useEffect(() => {
    setGoHome(canGoHome);
  }, [canGoHome, setGoHome]);

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);
  return { setLoading };
}
