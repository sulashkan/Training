import postResponse from "@/type/postResponse";
import { ArrowRight, User } from "lucide-react";
import Image from "next/image";

export default function PostCard({ post }: { post: postResponse }) {
  return (
    <article
      key={post._id}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out animate-fade-up cursor-pointer"
      style={{ animationDelay: `${2 * 100}ms` }}
    >
      {/* Featured Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
        <Image
          src={`https://sanity.imageHotspot/$(post.featureImage?.asset?._ref)`}
          alt=""
          width={500}
          height={200}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Tags on Image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-slate-800 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <User size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              {post.author}
            </p>
            <p className="text-xs text-slate-500">Author</p>
          </div>
        </div>

        {/* Content */}
        <p className="text-slate-700 leading-relaxed font-light text-base line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="pt-4 flex items-center gap-2 text-indigo-600 font-medium text-sm group-hover:gap-4 transition-all duration-300">
          <span>Read Article</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
    </article>
  );
}
