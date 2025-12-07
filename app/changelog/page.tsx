import fs from "fs";
import path from "path";

import dynamic from "next/dynamic";

function getChangelogs() {
  const changelogsDir = path.join(process.cwd(), "changelogs");
  return fs
    .readdirSync(changelogsDir)
    .filter((file) => path.extname(file) === ".mdx");
}

export default function Changelog() {
  const changelogs = getChangelogs();

  return (
    <div className="m-auto max-w-5xl p-8">
      <h1 className="text-3xl">Changelog</h1>
      <p>New updates and improvements.</p>
      <hr className="my-12 border border-gray-900" />
      {changelogs.map((changelog) => {
        const Mdx = dynamic(() => import(`@/changelogs/${changelog}`));
        return (
          <div
            key={changelog}
            className="m-16 border-b-2 border-b-gray-800 p-8 last:border-b-0"
          >
            <Mdx key={changelog} />
          </div>
        );
      })}
    </div>
  );
}
