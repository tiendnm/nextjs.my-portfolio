"use client";

import CustomLink from "@components/CustomLink";
import useProgressBar from "@hooks/useProgressBar";
import { mdiMagnify, mdiPencilOutline, mdiPlus, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { BLUR_URL } from "@variables";
import { Button, Card, Empty, Input, List, Skeleton } from "antd";
import moment from "moment";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Post } from "../_model/post.model";
import { useSession } from "@services/auth";
import { useAdminContext } from "@contexts/AdminContext";

interface PostListProps {
  items?: Post[];
  count: number;
  pageLength: number;
  page: number;
  search: string;
}

export default function PostList({
  items,
  count,
  pageLength,
  page,
  search,
}: PostListProps) {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  useAdminContext({
    canGoBack: true,
    canGoHome: true,
    pageTitle: "DANH SÁCH BÀI VIẾT",
  });
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState(search);
  const router = useRouter();
  const progressBar = useProgressBar();

  const handleChange = useCallback(
    (page: number) => {
      setLoading(true);
      progressBar.start();
      const query = createQueryString("page", `${page}`);
      router.push(`/admin/post?${query}`);
    },
    [createQueryString, progressBar, router]
  );

  const handleSearch = useCallback(
    (value: string) => {
      if (value !== search) {
        progressBar.start();
        router.push(`/admin/post?search=${value}`);
      }
    },
    [progressBar, router, search]
  );

  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items]);
  useEffect(() => {
    setSearchText(search);
  }, [items, search]);
  const { status } = useSession({
    required: true,
  });
  if (status === "loading") {
    return <div className="text-green-500">Authorizing....</div>;
  }
  return (
    <>
      <Card className="flex w-full flex-col items-stretch justify-center">
        <Input.Search
          placeholder="Tìm kiếm bài viết"
          value={searchText}
          enterButton={
            <Icon
              path={mdiMagnify}
              size={1}
            />
          }
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          size="large"
          suffix={""}
          onSearch={handleSearch}
        />
        {!items || items.length === 0 ? (
          <Empty description="Không tìm thấy dữ liệu" />
        ) : (
          <List
            itemLayout="vertical"
            size="large"
            className="w-full"
            pagination={{
              onChange: handleChange,
              pageSize: pageLength,
              current: page,
              total: count,
              align: "center",
            }}
            dataSource={items}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={
                  !loading
                    ? [
                        <CustomLink
                          key={"edit-icon"}
                          href={`admin/post/update/${item._id}`}>
                          <Icon
                            path={mdiPencilOutline}
                            size={0.7}
                          />
                        </CustomLink>,
                        <CustomLink
                          key={"delete-icon"}
                          href={`admin/post/delete/${item._id}`}>
                          <Icon
                            path={mdiTrashCanOutline}
                            size={0.7}
                          />
                        </CustomLink>,
                      ]
                    : undefined
                }>
                <Skeleton
                  loading={loading}
                  active
                  round>
                  <List.Item.Meta
                    avatar={
                      <div className="relative h-14 w-14  rounded-md">
                        <Image
                          src={item.thumbnail_link || "/undraw_upload_image.svg"}
                          blurDataURL={BLUR_URL}
                          placeholder="blur"
                          quality={60}
                          fill
                          alt="thumbnail_link"
                          sizes="100px"
                        />
                      </div>
                    }
                    title={
                      <CustomLink
                        key={item._id}
                        href={`admin/post/preview/${item._id}`}>
                        <h6 className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                          {item.title}
                        </h6>
                      </CustomLink>
                    }
                    description={
                      <p>
                        {item.author} [{moment(item.publish_date).format("DD/MM/YYYY")}]
                      </p>
                    }></List.Item.Meta>
                  {item.sub_title}
                </Skeleton>
              </List.Item>
            )}
          />
        )}
      </Card>
      <div className="fixed bottom-5 right-5 flex gap-2">
        <Button
          type="primary"
          shape="circle"
          onClick={() => {
            progressBar.start();
            router.push("/admin/post/create");
          }}
          icon={
            <Icon
              path={mdiPlus}
              size={1}
            />
          }
          size={"large"}
        />
      </div>
    </>
  );
}
