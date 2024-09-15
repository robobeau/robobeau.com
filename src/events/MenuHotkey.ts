"use client";

import { MENU_HOTKEY_EVENT } from "@/constants";

class MenuHotkey extends CustomEvent<{ key: string }> {
  constructor(key: string) {
    super(MENU_HOTKEY_EVENT, { detail: { key } });
  }
}

export { MenuHotkey as default };
