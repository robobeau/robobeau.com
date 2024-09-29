"use client";

import ResizableBox from "@/components/Program/ResizeableBox";
import MaximizedContext from "@/contexts/MaximizedContext";
import SizeContext from "@/contexts/SizeContext";
import MSMAI010 from "@/images/MSMAI010.png";
import OLE2001 from "@/images/OLE2001.png";
import WINSE004 from "@/images/WINSE004.png";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children, FC, PropsWithChildren, useState } from "react";

interface FileBrowserProps extends PropsWithChildren {
  blogs: Array<Blog>;
}

const FileBrowser: FC<FileBrowserProps> = (props) => {
  const { blogs, children } = props;
  const isChildrenEmpty = Children.count(children) === 0;

  const pathname = usePathname();
  const sizeState = useState({
    height: 100,
    width: 480,
  });
  const [isMaximized, setIsMaximized] = useState(false);

  const borderClasses = isChildrenEmpty ? "border-b border-black" : "";
  const listItemClasses = "h-6 text-sm";

  return (
    <MaximizedContext.Provider value={[isMaximized, setIsMaximized]}>
      <SizeContext.Provider value={sizeState}>
        <ResizableBox
          className={`${borderClasses} grow min-h-20 overflow-hidden relative shrink-0 !w-full`}
          maxConstraints={[480, 320]}
          minConstraints={[480, 100]}
          resizeHandles={["s"]}
        >
          <ul className="h-full overflow-auto p-4">
            <li className={listItemClasses}>
              <div className="flex gap-1 items-center">
                <Image
                  alt="folder"
                  height={24}
                  priority
                  src={WINSE004}
                  width={24}
                />

                <span>r:\</span>
              </div>

              <ul className="ml-3">
                <li className={listItemClasses}>
                  <div className="flex gap-1 items-center">
                    <div className="self-stretch">
                      <div className="border-b-2 border-black border-l-2 h-1/2 justify-self-end self-start w-3"></div>
                    </div>

                    <Image
                      alt="folder"
                      height={24}
                      priority
                      src={MSMAI010}
                      width={24}
                    />

                    <span>blogs</span>
                  </div>

                  <ul className="ml-7">
                    {blogs.map((blog, index, array) => {
                      const { link, title } = blog;

                      const isCurrentPath = pathname === link;
                      const currentPathClass = isCurrentPath
                        ? "bg-blue-800 border-2 border-dotted border-white text-white"
                        : "p-0.5";
                      const isLast = index === array.length - 1;

                      return (
                        <li
                          className={`${listItemClasses} flex gap-1`}
                          key={index}
                        >
                          <div className="self-stretch">
                            <div className="border-b-2 border-black border-l-2 h-1/2 justify-self-end self-start w-3"></div>

                            {!isLast && (
                              <div className="border-l-2 border-black h-1/2 justify-self-end self-end w-3"></div>
                            )}
                          </div>

                          <Link
                            className={`${currentPathClass} box-border flex gap-1 items-center overflow-hidden pr-1 whitespace-nowrap`}
                            href={link}
                          >
                            <Image
                              alt="folder"
                              className="shrink-0"
                              height={24}
                              priority
                              src={OLE2001}
                              width={24}
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
        </ResizableBox>
      </SizeContext.Provider>
    </MaximizedContext.Provider>
  );
};

export { FileBrowser as default };
