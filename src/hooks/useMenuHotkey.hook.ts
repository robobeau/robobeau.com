import debounce from "lodash.debounce";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

import { MenuItem } from "@/components/Program/Menu";

function useMenuHotkey(menu: Array<MenuItem>, isFocused: boolean) {
  const router = useRouter();
  const menuHotkeyHandler = useMemo(
    () =>
      debounce(
        (event: KeyboardEvent) => {
          const { altKey, key } = event;

          if (!isFocused) {
            return false;
          }

          if (altKey) {
            const menuItem = menu.find(
              ({ key: menuItemKey }) =>
                menuItemKey.toLowerCase() === key.toLowerCase()
            );

            if (menuItem) {
              const { target, url } = menuItem;

              if (target) {
                window.open(url, target);
              } else {
                router.push(url);
              }
            }
          }
        },
        100,
        { leading: true, trailing: false }
      ),
    [isFocused, menu, router]
  );

  useEffect(() => {
    document.addEventListener("keydown", menuHotkeyHandler);

    return () => {
      document.removeEventListener("keydown", menuHotkeyHandler);
    };
  }, [menuHotkeyHandler]);
}

export { useMenuHotkey as default };
