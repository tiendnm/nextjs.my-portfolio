"use client";

import CustomLink from "@components/CustomLink";
import { Post } from "./postModel";
import { List, Pagination, Skeleton } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import useProgressBar from "@hooks/useProgressBar";
import Icon from "@mdi/react";
import { mdiAbugidaThai, mdiContentSave, mdiPencil, mdiTrashCan } from "@mdi/js";

interface PostListClientProps {
  items: Post[];
  count: number;
  pageLength: number;
  page: number;
}

export default function PostListClient({
  items,
  count,
  pageLength,
  page,
}: PostListClientProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const progressBar = useProgressBar();
  const handleChange = useCallback(
    (page: number) => {
      setLoading(true);
      progressBar.start();
      router.push(`/admin/post?page=${page}`);
    },
    [progressBar, router]
  );
  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items]);
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        className="w-full"
        pagination={{
          onChange: handleChange,
          pageSize: pageLength,
          current: page,
          total: count,
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
              title={false}
              round>
              <List.Item.Meta
                title={
                  <CustomLink
                    key={item._id}
                    href={`admin/post/${item._id}`}>
                    <h6 className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.title}
                    </h6>
                  </CustomLink>
                }
                description={item.sub_title}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
}
