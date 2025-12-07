import { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded-md border border-neutral-200 bg-white px-[4px] py-[5px] font-mono text-sm break-words whitespace-pre-wrap shadow-xs dark:border-neutral-700 dark:bg-neutral-800"
      {...props}
    >
      {children}
    </code>
  ),
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="mb-6 text-2xl font-bold text-balance" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-6 last:mb-0" {...props} />
  ),
};

export function useMDXComponents(
  otherComponents: MDXComponents,
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}
