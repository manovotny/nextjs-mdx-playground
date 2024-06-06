import Head from "next/head";
import MDXComponent from "@/components/mdx.mdx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Pages MDX Import</title>
      </Head>
      <MDXComponent />
    </>
  );
}
