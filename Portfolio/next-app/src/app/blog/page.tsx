import { client } from "@/client";
import PostCard from "@/components/ui/card";
import Card from "@/components/ui/card";
import postResponse from "@/type/postResponse";

export default async function BlogUi() {
  const response = await client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      excerpt,
      featuredImage,
      author,
      tags,
      publishedAt,
    }`,
  );

  console.log(response);

  return (
    <div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {response.length
          ? response.map((post: postResponse) => (
              <PostCard key={post._id} post={post} />
            ))
          : ""}
      </div>
    </div>
  );
}
