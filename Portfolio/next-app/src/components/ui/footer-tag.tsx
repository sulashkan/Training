// import { Tag } from "lucide-react";
// import Link from "next/link";

// interface postTags {
//   tags: [];

// }

// export default function FooterTags({ post }: { post: object[] }) {
//   return (
//     <div className="mt-16 pt-12 border-t border-neutral-200">
//       <div className="flex items-center gap-3 text-sm text-neutral-600">
//         <Tag size={16} />
//         <span className="font-medium">Tagged in:</span>
//         <div className="flex flex-wrap gap-2">
//           {post.tags.map((tag) => (
//             <Link
//               href="#"
//               className="px-3 py-1 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-full transition-all duration-300 ease-out"
//             >
//               {tag}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
