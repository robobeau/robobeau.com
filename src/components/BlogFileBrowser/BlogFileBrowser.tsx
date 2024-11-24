"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

import MSMAI010 from "@/images/MSMAI010.png";
import OLE2001 from "@/images/OLE2001.png";
import WINSE004 from "@/images/WINSE004.png";
import { Blog } from "@/types/blog";

interface BlogFileBrowserProps {
  blogs: Array<Blog>;
}

const BlogFileBrowser: FC<BlogFileBrowserProps> = (props) => {
  const { blogs } = props;

  const pathname = usePathname();
  const listItemClasses = "h-6 text-sm";

  return (
    <nav>
      <ul>
        <li className={listItemClasses}>
          <div className="flex gap-1 items-center">
            <Image
              alt="folder"
              height={16}
              priority
              src={WINSE004}
              unoptimized
              width={16}
            />

            <span>r:\</span>
          </div>

          <ul className="ml-2">
            <li className={listItemClasses}>
              <div className="flex gap-1 items-center">
                <div className="self-stretch">
                  <div className="border-b border-slate-700 border-l h-1/2 justify-self-end self-start w-2"></div>
                </div>

                <Image
                  alt="folder"
                  height={16}
                  priority
                  src={MSMAI010}
                  unoptimized
                  width={16}
                />

                <span>blogs</span>
              </div>

              <ul className="ml-5">
                {blogs.map((blog, index, array) => {
                  const { path, title } = blog;

                  const isCurrentPath = pathname === path;
                  const currentPathClass = isCurrentPath
                    ? "bg-blue-800 border border-dotted border-white text-white"
                    : "p-0.5";
                  const isLast = index === array.length - 1;

                  return (
                    <li className={`${listItemClasses} flex`} key={index}>
                      <div className="self-stretch">
                        <div className="border-b border-slate-700 border-l h-1/2 justify-self-end self-start w-2"></div>

                        {!isLast && (
                          <div className="border-l border-slate-700 h-1/2 justify-self-end self-end w-2"></div>
                        )}
                      </div>

                      <Link
                        className={`${currentPathClass} box-border flex gap-1 items-center overflow-hidden pr-1 whitespace-nowrap`}
                        href={path}
                      >
                        <Image
                          alt="folder"
                          className="shrink-0"
                          height={16}
                          priority
                          src={OLE2001}
                          unoptimized
                          width={16}
                        />

                        <span className="overflow-hidden text-ellipsis">
                          {title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export { BlogFileBrowser as default };
