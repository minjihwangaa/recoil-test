import { selector, selectorFamily } from "recoil";
import { countState, todoState } from "../atoms/TodoState";
import { common } from "../../common/api";
import axios from "axios";

export const totalTodos = selector({
  //get the state
  key: "totalTodos",
  get: ({ get }) => {
    const todos = get(todoState);
    return todos.length;
  },
});

export const countNum = selector({
  key: "countNum",
  get: ({ get }) => {
    //get the state
    const getNum = get(countState);
    return getNum;
  },
  set: ({ set }, newValue) => {
    //update the state
    set(countState, newValue / 2);
  },
});

export const fetchUserDetails = selector({
  key: "userDetailsSelector",
  get: async () => {
    //get the asyncronous data
    try {
      const response = await axios.get(common.jsonDummy + "products");
      const { data } = response;
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export const fetchUserDetailsSF = selectorFamily({
  key: "userDetailsSelector",
  get: (userId) => async () => {
    // get the asyncronous data with parameter
    if (!userId) {
      return;
    }
    const response = await axios.get(common.jsonDummy + "products/" + userId);
    const { data } = response;
    console.log(userId, data);
    return response;
  },
});
