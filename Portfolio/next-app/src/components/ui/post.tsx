// import { Calendar, User, Tag } from "lucide-react";
// import FooterTags from "./footer-tag";

// export default function BlogPost() {
//   // Sample blog data
//   const post = {
//     title: "The Art of Minimalist Design in Modern Architecture",
//     excerpt:
//       "Exploring how less becomes more in contemporary architectural practices, where every element serves a purpose and beauty emerges from restraint.",
//     content: `The minimalist movement in architecture represents more than an aesthetic choice—it embodies a philosophy of intentional living. When Mies van der Rohe proclaimed "less is more," he wasn't advocating for emptiness, but for the careful curation of essential elements.

// In contemporary practice, minimalist design challenges architects to distill spaces to their fundamental essence. Each line, surface, and void becomes a deliberate statement. The interplay of light and shadow transforms throughout the day, creating dynamic compositions from static forms.

// Natural materials take center stage in minimalist spaces. Concrete, wood, and glass aren't merely construction materials—they become the protagonists of the architectural narrative. Their textures, grain patterns, and subtle color variations provide visual interest without ornamentation.

// The spatial experience in minimalist architecture relies on proportion and sequence. Rooms flow into one another with careful consideration of sightlines and transitions. Negative space becomes as important as the built environment, creating moments of pause and contemplation.

// This approach demands precision in execution. Without decorative elements to mask imperfections, every detail must be meticulously resolved. Joints align, surfaces meet cleanly, and materials express their inherent qualities without artifice.

// The result is architecture that transcends trends—spaces that feel timeless precisely because they avoid stylistic excess. In our cluttered world, minimalist design offers sanctuary: environments where clarity and calm emerge from thoughtful restraint.`,
//     author: "Elena Rodriguez",
//     tags: ["Architecture", "Design", "Minimalism", "Modern"],
//     publishedAt: "January 15, 2026",
//   };

//   return (
//     <div className="min-h-screen bg-neutral-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
//           <div className="space-y-8 animate-fade-in">
//             <div className="flex flex-wrap gap-3">
//               {post.tags.map((tag, i) => (
//                 <span
//                   key={tag}
//                   className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs tracking-wider uppercase font-medium"
//                   style={{ animationDelay: `${i * 100}ms` }}
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
//               {post.title}
//             </h1>

//             <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl">
//               {post.excerpt}
//             </p>

//             <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-neutral-400">
//               <div className="flex items-center gap-2">
//                 <User size={16} />
//                 <span className="font-medium text-white">{post.author}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar size={16} />
//                 <span>{post.publishedAt}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <article className="max-w-3xl mx-auto px-6 py-20">
//         <div className="prose prose-lg max-w-none">
//           {post.content.split("\n\n").map((paragraph, i) => (
//             <p
//               key={i}
//               className="mb-8 text-neutral-700 leading-relaxed text-lg font-light animate-slide-up"
//               style={{
//                 animationDelay: `${i * 150}ms`,
//                 fontFamily: "'Crimson Pro', 'Georgia', serif",
//               }}
//             >
//               {paragraph}
//             </p>
//           ))}
//         </div>

//         {/* Tags Footer */}
//         <div className="mt-16 pt-12 border-t border-neutral-200">
//           <div className="flex items-center gap-3 text-sm text-neutral-600">
//             <Tag size={16} />
//             <span className="font-medium">Tagged in:</span>
//             <div className="flex flex-wrap gap-2">
//               {post.tags.map((tag) => (
//                 <FooterTags key={tag} tag={tag} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </article>

//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600&family=Inter:wght@300;400;500;600&display=swap");

//         * {
//           font-family:
//             "Inter",
//             -apple-system,
//             BlinkMacSystemFont,
//             sans-serif;
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 1s ease-out forwards;
//         }

//         .animate-slide-up {
//           opacity: 0;
//           animation: slide-up 0.8s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }
