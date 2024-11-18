import kingdom from "@/fonts/kingdom";
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
    h1: ({ children }) => (
      <h1 className={`leading-[0.75] mb-6 text-6xl drop-shadow-md ${kingdom.className}`}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className={`leading-[0.75] my-6 text-5xl drop-shadow-md ${kingdom.className}`}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className={`leading-[0.75] my-6 text-4xl drop-shadow-md ${kingdom.className}`}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className={`leading-[0.75] my-6 text-3xl drop-shadow-md ${kingdom.className}`}>
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className={`leading-[0.75] my-6 text-2xl drop-shadow-md ${kingdom.className}`}>
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className={`leading-[0.75] my-6 text-xl drop-shadow-md ${kingdom.className}`}>
        {children}
      </h6>
    ),
    hr: () => <hr className="my-4" />,
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-2">{children}</ol>
    ),
    p: ({ children }) => <p className="my-2">{children}</p>,
    pre: ({ children }) => (
      <pre className="bg-gray-100 leading-3 p-2">{children}</pre>
    ),
    ul: ({ children }) => (
      <ul className="list-square list-inside mb-2 pl-2">{children}</ul>
    ),
  };
}

export { useMDXComponents };
