import vt323 from "@/fonts/vt323";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import useMenuHotkey from "./useMenuHotkey.hook";

interface MenuItem {
  label: string;
  key: string;
  target?: HTMLAttributeAnchorTarget;
  url: string;
}

const Menu: React.FC<{ menu: Array<MenuItem> }> = (props) => {
  const { menu } = props;

  useMenuHotkey(menu);

  return (
    <div className="border-b border-black flex h-8 items-center items-center relative">
      {menu.map((menuItem, index) => {
        const { url, label, target } = menuItem;
        const [firstLetter, ...rest] = label.split("");

        return (
          <Link
            className={`
              outline-none px-2 text-xl
              focus:bg-blue-800 focus:text-white
              hover:bg-blue-800 hover:text-white
              ${vt323.className}
            `}
            href={url}
            key={index}
            target={target}
          >
            <span className="underline">{firstLetter}</span>
            {rest.join("")}
          </Link>
        );
      })}
    </div>
  );
};

export { Menu as default, type MenuItem };
