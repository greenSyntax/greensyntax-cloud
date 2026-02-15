type Repo = {
    name: string;
    description: string;
    url: string;
    image?: string;
};

export default function GithubRepos() {
    const repos: Repo[] = [
        {
            name: "Nimbuss Monitor",
            description:
                "InApp HTTP Traffic Monitor for iOS, built with Swift and Combine. For seamless traffic capture and analysis.",
            url: "https://github.com/greenSyntax/nimbus-monitor",
            image: "/github.png",
        },
        {
            name: "Network Client",
            description:
                "Neat and modular network client for iOS, built with Swift and Combine. For seamless API interactions and data handling.",
            url: "https://github.com/greenSyntax/nimbus-monitor",
            image: "/github.png",
        },
    ];

    return (
        <section className="w-full pb-12 px-6">
            <h2 className="text-[18px] font-semibold mb-4">
                Open Source Projects
            </h2>

            <div className="flex flex-col">
                {repos.map((repo, index) => (
                    <div
                        key={index}
                        className="last:border-b-0"
                    >
                        <RepoRow repo={repo} />
                    </div>
                ))}
            </div>
        </section>
    );
}

function RepoRow({ repo }: { repo: Repo }) {
    return (
        <a
            href={repo.url}
            target="_blank"
            className="
        flex items-start justify-between gap-6
        py-4
        hover:bg-gray-50
        transition
      "
        >
            {/* Left: Text */}
            <div className="flex-1">
                <h3 className="text-[16px] font-medium text-black leading-snug">
                    {repo.name}
                </h3>

                <p className="mt-1 text-[14px] text-gray-500 leading-relaxed">
                    {repo.description}
                </p>
            </div>
            {repo.image && (
                <img
                    src={repo.image}
                    alt={repo.name}
                    className="
            w-8 h-8
            rounded-md
            object-contain
            shrink-0
          "
                />
            )}
        </a>
    );
}