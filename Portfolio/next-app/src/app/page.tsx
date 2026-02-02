"use client";
import NavbarWithSlideMenu from "@/components/ui/navigation";
import NavbarWithMultiSlideMenu from "@/components/ui/navigation";
import NavbarWithAnimatedMenu from "@/components/ui/navigation";
import Navbar from "@/components/ui/navigation";
import SlideDownPanel from "@/components/ui/slideDown";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavbarWithAnimatedMenu />
    </div>
  );
}
