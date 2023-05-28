"use client";

import { mdiContentDuplicate } from "@mdi/js";
import Icon from "@mdi/react";
import { parseStyleString } from "@utils/datatype";
import { BLUR_URL } from "@variables";
import useNotification from "antd/es/notification/useNotification";
import clsx from "clsx";
import parse, { DOMNode, Element, Text, domToReact } from "html-react-parser";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as theme from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function PostContentParser({ content }: { content?: string }) {
  const [notiApi, contextHolder] = useNotification();

  const copyCode = useCallback(
    (text: string) => {
      navigator.clipboard.writeText(text);
      notiApi.success({
        message: "Thông báo",
        description: (
          <>
            <div>Đã sao chép vào bảng tạm:</div>
            <pre className="h-6 overflow-hidden text-ellipsis bg-gray-700 text-white">
              {text}
            </pre>
          </>
        ),
        placement: "bottom",
      });
    },
    [notiApi]
  );

  const options = useMemo(
    () => ({
      replace: (domNode: DOMNode) => {
        const { attribs, children, name } = domNode as Element;
        if (name === "figure") {
          return (
            <figure
              className={attribs.class}
              style={parseStyleString(attribs.style)}>
              {domToReact(children, options)}
            </figure>
          );
        }
        if (name === "img") {
          return (
            <Image
              placeholder="blur"
              blurDataURL={BLUR_URL}
              alt="news image"
              src={attribs.src}
              width={400}
              height={400}
              style={parseStyleString(attribs.style)}
              className={clsx(["h-auto w-full", attribs.class])}
            />
          );
        }
        if (name === "pre") {
          return domToReact(children, options);
        }
        if (name === "code" && attribs.class?.startsWith("language")) {
          const textChildren = children as Text[];
          const text = textChildren?.[0].data;
          return (
            <div className="relative w-full">
              <span
                onClick={() => {
                  copyCode(text);
                }}
                className="absolute right-2 top-2 cursor-pointer bg-gray-800/90 p-1 text-white hover:text-gray-300 active:text-gray-500">
                <Icon
                  path={mdiContentDuplicate}
                  className="  "
                  size={0.8}
                />
              </span>
              <SyntaxHighlighter
                language={attribs.class.replace("language-", "")}
                style={theme.dracula}>
                {text}
              </SyntaxHighlighter>
            </div>
          );
        }
      },
    }),
    [copyCode]
  );

  return (
    <>
      {contextHolder}
      <div className="ck-content">{parse(`${content}`, options)}</div>
    </>
  );
}
