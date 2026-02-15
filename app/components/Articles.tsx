type Article = {
  title: string;
  subtitle: string;
  image: string;
  url?: string;
};

export default function Articles() {
  const articles: Article[] = [
    {
      title: "SSL Pinning in iOS",
      subtitle:
        "How long-term memory changes the way autonomous AI agents reason and collaborate.",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V6ED8F_ZuQoVPv6jJJtJ6w.png",
      url: "https://medium.com/p/f508b5860ead",
    },
    {
      title: "Building a CocoaPod Package with XCFrameworks",
      subtitle:
        "Patterns, trade-offs, and real-world lessons from orchestrating AI agents.",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*plycS4GbH6JB_HqZiZbuNA.png",
      url: "https://medium.com/p/0e4aaf029abd",
    },
    {
      title: "Developer’s Guide on Charles Proxy",
      subtitle:
        "Patterns, trade-offs, and real-world lessons from orchestrating AI agents.",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YGCgaYvQYXzCA313Zaquxg.png",
      url: "https://medium.com/p/81f59bb71466",
    },
  ];

  return (
    <section className="w-full pb-10 px-6">
      <h2 className="text-[18px] font-semibold mb-6">
        Medium Articles
      </h2>

      <div className="flex flex-col gap-8">
        {articles.map((article, index) => (
          <ArticleRow key={index} article={article} />
        ))}
      </div>
    </section>
  );
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      className="
        flex items-start justify-between gap-2
        py-1
        hover:bg-gray-50
        transition
      "
    >
      {/* Left */}
      <div className="flex-1">
        <h3 className="text-[16px] font-medium text-black leading-snug">
          {article.title}
        </h3>
        <p className="mt-1 text-[14px] text-gray-500 leading-relaxed">
          {article.subtitle}
        </p>
      </div>

      {/* Right */}
      <img
        src={article.image}
        alt={article.title}
        className="w-28 h-20 rounded-md object-cover shrink-0"
      />
    </a>
  );
}