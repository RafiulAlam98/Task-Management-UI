import { authEmail, authKey } from "../components/constant/authKey";
import {
  setEmailIdToLocalStorage,
  setToLocalStorage,
} from "../helpers/utils/saveData";

export const storeUserInfo = (verify) => {
  return setToLocalStorage(authKey, verify);
};
export const storeUserEmail = (verify) => {
  return setEmailIdToLocalStorage(authEmail, verify);
};

export const removeUserToken = (key) => {
  return localStorage.removeItem(key);
};
export const removeUserId = (key) => {
  return localStorage.removeItem(key);
};

