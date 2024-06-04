export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const replaceUnderscoreWithSlash = (text) => {
  return text.replace(/_/g, "/");
};
