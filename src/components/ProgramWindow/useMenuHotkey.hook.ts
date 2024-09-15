"use client";

import { MENU_HOTKEY_EVENT } from "@/constants";
import MenuHotkeyEvent from "@/events/MenuHotkey";
import { useCallback, useEffect } from "react";
import { MenuItem } from "./Menu";

function useMenuHotkey(menu: Array<MenuItem>) {
  const menuHotkeyHandler = useCallback(
    (event: MenuHotkeyEvent) => {
      const { key } = event.detail;
      const menuItem = menu.find(
        ({ key: menuItemKey }) =>
          menuItemKey.toLowerCase() === key.toLowerCase()
      );

      if (menuItem) {
        window.open(menuItem.url, menuItem.target);
      }
    },
    [menu]
  );

  useEffect(() => {
    document.addEventListener(
      MENU_HOTKEY_EVENT,
      menuHotkeyHandler as EventListener
    );

    return () => {
      document.removeEventListener(
        MENU_HOTKEY_EVENT,
        menuHotkeyHandler as EventListener
      );
    };
  }, [menuHotkeyHandler]);
}

export { useMenuHotkey as default };
