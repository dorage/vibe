import { use } from "react";
import { context } from "@/stores/counter/context";
import { useStore } from "zustand";
import { CounterState } from "@/stores/counter/type";

export const useCounterStore = <T>(selector: (state: CounterState) => T) => {
  const store = use(context);

  if (store == null) {
    throw new Error("Missing CounterStore");
  }

  return useStore(store, selector);
};
