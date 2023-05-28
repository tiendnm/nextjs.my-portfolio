"use client";

import parse, { Element, Text, domToReact, DOMNode } from "html-react-parser";
import Image from "next/image";
import clsx from "clsx";
import { parseStyleString } from "@utils/datatype";
import { useCallback, useMemo } from "react";
import { BLUR_URL } from "@variables";

export default function PostContentParser({ content }: { content?: string }) {
  const useParse = true;

  const recursiveFindImage = useCallback((element: Element): Element | undefined => {
    const children = element?.children as Element[];
    if (children?.length > 0) {
      const findImage = children.find((x) => x.name === "img");
      if (findImage) {
        return findImage;
      } else {
        for (let index = 0; index < children.length; index++) {
          const childElement = children[index];
          const check = recursiveFindImage(childElement);
          if (check) {
            return check;
          }
        }
        return undefined;
      }
    } else {
      return undefined;
    }
  }, []);

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
      },
    }),
    []
  );

  return <div className="ck-content">{parse(`${content}`, options)}</div>;
}
