import { client } from "@/client";

interface paramsInterface {
  blogId: string;
}

export default async function BlogUi(params: paramsInterface) {
  const { blogId } = await params;
  const blogData = await client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      slug,
      excerpt,
      content,
      coverImage,
      author,
      tags,
      publishedAt,
      preview
    }`,
    { blogId },
  );

  console.log(blogData);

  return (
    <div>
      <div>This is BlogUi Page</div>
    </div>
  );
}
