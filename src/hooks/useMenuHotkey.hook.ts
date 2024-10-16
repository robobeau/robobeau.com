import debounce from "lodash.debounce";
import { useEffect, useMemo } from "react";

import { MenuItem } from "@/components/Program/Menu";

function useMenuHotkey(menu: Array<MenuItem>, isFocused: boolean) {
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
              window.open(menuItem.url, menuItem.target);
            }
          }
        },
        100,
        { leading: true, trailing: false }
      ),
    [isFocused, menu]
  );

  useEffect(() => {
    document.addEventListener("keydown", menuHotkeyHandler);

    return () => {
      document.removeEventListener("keydown", menuHotkeyHandler);
    };
  }, [menuHotkeyHandler]);
}

export { useMenuHotkey as default };