"use client";

import CustomLink from "@components/CustomLink";
import { Post } from "./postModel";
import { Avatar, Empty, Input, List, Pagination, Skeleton } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import useProgressBar from "@hooks/useProgressBar";
import Icon from "@mdi/react";
import {
  mdiAbugidaThai,
  mdiContentSave,
  mdiMagnify,
  mdiPencil,
  mdiTrashCan,
} from "@mdi/js";
import moment from "moment";
import Image from "next/image";
import { BLUR_URL } from "@variables";

interface PostListClientProps {
  items?: Post[];
  count: number;
  pageLength: number;
  page: number;
  search: string;
}

export default function PostListClient({
  items,
  count,
  pageLength,
  page,
  search,
}: PostListClientProps) {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

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
  return (
    <>
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
                          path={mdiPencil}
                          size={0.7}
                        />
                      </CustomLink>,
                      <Icon
                        path={mdiTrashCan}
                        size={0.7}
                        key={"edit-icon"}
                      />,
                    ]
                  : undefined
              }>
              <Skeleton
                loading={loading}
                active
                round>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      className="relative"
                      size={"large"}
                      src={
                        <Image
                          src={item.thumbnail_link || "/undraw_upload_image.svg"}
                          blurDataURL={BLUR_URL}
                          placeholder="blur"
                          quality={60}
                          fill
                          alt="thumbnail_link"
                        />
                      }
                    />
                  }
                  title={
                    <CustomLink
                      key={item._id}
                      href={`admin/post/${item._id}`}>
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
    </>
  );
}
