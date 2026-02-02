"use client";

import { useEffect, useState } from "react";
import MenuBlock from "./menuBlock";

/* ================= TYPES ================= */

type MenuKey = "work" | "blog" | "about" | null;

/* ================= CONSTANTS ================= */

const NAV_HEIGHT = 64;
const ANIMATION_DURATION = 300; // ms (should match CSS)

/* ================= MAIN COMPONENT ================= */

export default function NavbarWithAnimatedMenu() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // const SWITCH_OFFSET = -40; // px (small upward movement)

  const handleMenuClick = (menu: Exclude<MenuKey, null>) => {
    // Same menu → close
    if (activeMenu === menu) {
      setIsOpen(false);
      setShowContent(false);

      setTimeout(() => {
        setActiveMenu(null);
      }, ANIMATION_DURATION);

      return;
    }

    // Menu open → switch
    if (isOpen) {
      setIsSwitching(true);
      setShowContent(false); // 👈 hide content immediately

      // Change active menu midway (still hidden)
      setTimeout(() => {
        setActiveMenu(menu);
      }, ANIMATION_DURATION / 2);

      // End animation & show content
      setTimeout(() => {
        setIsSwitching(false);
        setShowContent(true);
      }, ANIMATION_DURATION);

      return;
    }

    // Menu closed → open
    setActiveMenu(menu);
    setIsOpen(true);
    setShowContent(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setActiveMenu(null), ANIMATION_DURATION);
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bottomBorderAnimation =
    "absolute left-0 -bottom-1 h-[2px] w-full bg-black origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100";

  return (
    <>
      {/* NAVBAR */}
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled || isHovered ? "bg-white shadow-sm" : "bg-transparent"}`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? "h-14 px-6" : "h-16 px-8"}`}
        >
          <span className="font-bold text-lg">MyPortfolio</span>

          <ul className="flex gap-8 font-medium">
            <li
              onClick={() => handleMenuClick("work")}
              className="relative cursor-pointer group"
            >
              Work
              <span className={bottomBorderAnimation} />
            </li>
            <li
              onClick={() => handleMenuClick("blog")}
              className="relative cursor-pointer group"
            >
              Blog
              <span className={bottomBorderAnimation} />
            </li>

            <li
              onClick={() => handleMenuClick("about")}
              className="relative cursor-pointer group"
            >
              About
              <span className={bottomBorderAnimation} />
            </li>
          </ul>
        </div>
      </nav>

      {/* BACKDROP */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 z-40"
          style={{ top: NAV_HEIGHT }}
        />
      )}

      {/* SLIDE-DOWN PANEL */}
      <div
        className="fixed left-0 w-full bg-white z-45 transition-transform duration-800 ease-in-out"
        style={{
          top: 0,
          height: "320px",
          transform: !isOpen
            ? "translateY(-100%)"
            : isSwitching
              ? "translateY(-100px)"
              : "translateY(0)",
        }}
      >
        <div className="max-w-7xl mx-auto p-6">
          {showContent && (
            <>
              {activeMenu === "work" && <WorkMenu />}
              {activeMenu === "blog" && <BlogMenu />}
              {activeMenu === "about" && <AboutMenu />}
            </>
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}

/* ================= MENU CONTENT ================= */

function WorkMenu() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <MenuBlock
        title="Projects"
        items={["All Projects", "Featured", "Open Source"]}
      />
      <MenuBlock title="Technologies" items={["Next.js", "React", "Sanity"]} />
      <MenuBlock
        title="Case Studies"
        items={["Architecture", "Performance", "SEO"]}
      />
    </div>
  );
}

function BlogMenu() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <MenuBlock
        title="Latest"
        items={["Recent Posts", "Popular", "Editor's Pick"]}
      />
      <MenuBlock title="Topics" items={["Next.js", "React", "Backend"]} />
      <MenuBlock title="Formats" items={["Tutorials", "Guides", "Opinions"]} />
    </div>
  );
}

function AboutMenu() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <MenuBlock title="Me" items={["Introduction", "Journey", "Values"]} />
      <MenuBlock title="Skills" items={["Frontend", "Backend", "DevOps"]} />
      <MenuBlock
        title="More"
        items={["Experience", "Education", "Achievements"]}
      />
    </div>
  );
}

/* ================= REUSABLE BLOCK ================= */
