import debounce from "lodash.debounce";
import { Ref, useCallback, useEffect } from "react";
import { MenuItem } from "./Menu";

function useMenuHotkey(menu: Array<MenuItem>, ref: Ref<HTMLElement>) {
  const menuHotkeyHandler = useCallback(
    debounce(
      (event: KeyboardEvent) => {
        const { altKey, key } = event;

        if (
          typeof ref !== "object" ||
          !ref?.current?.contains(document.activeElement)
        ) {
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
    [menu]
  );

  useEffect(() => {
    document.addEventListener("keydown", menuHotkeyHandler);

    return () => {
      document.removeEventListener("keydown", menuHotkeyHandler);
    };
  }, [menuHotkeyHandler]);
}

export { useMenuHotkey as default };
