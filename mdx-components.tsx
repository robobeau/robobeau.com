import w95fa from "@/fonts/w95fa";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ children, href = "" }) => (
      <Link className="text-teal-700 underline" href={href}>
        {children}
      </Link>
    ),
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    code: ({ children }) => (
      <code className={`${w95fa.className}`}>{children}</code>
    ),
    h1: ({ children }) => <h1 className="mb-4 text-4xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-3 text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-2.5 text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-2 text-xl">{children}</h4>,
    h5: ({ children }) => <h5 className="mb-1.5 text-lg">{children}</h5>,
    h6: ({ children }) => <h6 className="mb-1 text-base">{children}</h6>,
    hr: () => <hr className="my-4" />,
    ol: ({ children }) => (
      <ol className="list-decimal list-inside my-2">{children}</ol>
    ),
    p: ({ children }) => <p className="my-2">{children}</p>,
    pre: ({ children }) => (
      <pre className="bg-slate-100 leading-3 p-2">{children}</pre>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside my-2">{children}</ul>
    ),
  };
}

export { useMDXComponents };
