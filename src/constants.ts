const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://robobeau.com";
const BLOGS_DIRECTORY = "src/app/blogs";
const HANDLE_CLASS = "handle";
const MENU_HOTKEY_EVENT = "MenuHotkey";
const MY_EMAIL = "rene@robobeau.com";
const MY_HANDLE = "robobeau";
const MY_NAME = "René Esteves";

export {
  BASE_URL,
  BLOGS_DIRECTORY,
  HANDLE_CLASS,
  MENU_HOTKEY_EVENT,
  MY_EMAIL,
  MY_HANDLE,
  MY_NAME,
};
