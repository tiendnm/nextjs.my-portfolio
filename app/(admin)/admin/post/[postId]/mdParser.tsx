"use client";
import Heading from "@components/Heading";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MergeComponents } from "@mdx-js/react/lib";
const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    width={"300"}
    height={"300"}
    style={{
      marginBottom: "0.5rem",
      height: "auto", // Equivalent to h-auto
      width: "100%", // Equivalent to w-full
      objectFit: "contain", // Equivalent to object-contain
    }}
    {...props}
  />
);

const Pre = ({ children }: { children: React.ReactNode }) => (
  <pre
    style={{
      marginBottom: "0.5rem",
      borderRadius: "0.25rem",
      backgroundColor: "#E5E7EB",
      padding: "1rem",
    }}>
    <code style={{ fontSize: "0.875rem", lineHeight: " 1.25rem" }}>{children}</code>
  </pre>
);
const Code = ({ children }: { children: React.ReactNode }) => (
  <code
    style={{
      borderRadius: "0.25rem",
      backgroundColor: "rgb(243 244 246)",
      paddingLeft: "0.25rem",
      paddingRight: "0.25rem",
      paddingTop: "0.125rem",
      paddingBottom: "0.125rem",
      color: "rgb(31 41 55)",
      marginBottom: "0.5rem",
    }}>
    {children}
  </code>
);
const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      marginBottom: "0.5rem",
    }}>
    {children}
  </p>
);
const components = {
  img: ResponsiveImage,
  h1: Heading.H1,
  h2: Heading.H2,
  p: Paragraph,
  code: Pre,
  inlineCode: Code,
};

export default function MarkDownParser({
  source,
}: {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}) {
  return (
    <MDXRemote
      {...source}
      components={components as any}
    />
  );
}
