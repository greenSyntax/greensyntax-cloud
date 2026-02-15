"use client";

export default function BottomTabs() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-6
          px-6 py-3
          rounded-full
          bg-white/90 backdrop-blur
          shadow-lg
          border border-gray-200
        "
      >
        <TabIcon
          src="/github.png"
          alt="GitHub"
          onClick={() => openLink("https://github.com/greenSyntax")}
        />

        <TabIcon
          src="/x.png"
          alt="X"
          onClick={() => openLink("https://x.com/boloabhishek")}
        />

        <TabIcon
          src="/linkedin.png"
          alt="LinkedIn"
          onClick={() =>
            openLink("https://linkedin.com/in/abhishekravi-ind")
          }
        />

        <TabIcon
          src="/moon.png"
          alt="Theme"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function openLink(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

/* ---------- icon ---------- */

function TabIcon({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={alt}
      className="
        w-6 h-6
        opacity-80 hover:opacity-100
        transition
        focus:outline-none
      "
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
      />
    </button>
  );
}