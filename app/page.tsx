import Link from "next/link";

export default function Home() {
  const cards = [
    {
      title: "App + MDX Route",
      description: "TODO",
      href: "/app-mdx-route",
    },
    {
      title: "App Router MDX Import",
      description: "TODO",
      href: "/app-mdx-import",
    },
    {
      title: "Pages Router MDX Route",
      description: "TODO",
      href: "/pages-mdx-route",
    },
    {
      title: "Pages Router MDX Import",
      description: "TODO",
      href: "/pages-mdx-import",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {" "}
      </div>
      <div className="relative flex place-items-center ">
        <h1 className="text-4xl">Experimenting with Next.js + MDX 🧑‍🔬</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {cards.map(({ title, description, href }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
