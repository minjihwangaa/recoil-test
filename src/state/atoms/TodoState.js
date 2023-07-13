import { atom } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [],
});

export const countState = atom({
  key: "countState",
  default: 0,
});

export const currentUserState = atom({
  key: "currentUser",
  default: [],
});

export const userIdState = atom({
  key: "userState",
  default: 1,
});
