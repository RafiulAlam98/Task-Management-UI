export const setToLocalStorage = (key, verify) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, verify);
};
export const setEmailIdToLocalStorage = (key, verify) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, verify);
};
export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(key);
};
