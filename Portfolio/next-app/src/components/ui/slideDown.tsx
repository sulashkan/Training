import { useState } from "react";

export default function SlideDownPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Open Menu
      </button>

      {/* Overlay (optional but recommended) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 left-0 w-full h-[300px] bg-white z-50
        transform transition-transform duration-500 ease-in-out
        ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">Navigation</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-sm text-gray-600"
          >
            Close
          </button>
        </div>

        <div className="p-6 space-y-4">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            Projects
          </a>
          <a href="#" className="block">
            Blog
          </a>
          <a href="#" className="block">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
