const classNames = (...classes: Array<string | boolean | undefined>) =>
  classes
    .filter(Boolean)
    .map((cls) => cls)
    .flat()
    .join(" ");

export { classNames as default };
