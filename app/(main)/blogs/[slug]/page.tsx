interface BlogsParamsProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: BlogsParamsProps) {
  return <div>slug {params.slug}</div>;
}
