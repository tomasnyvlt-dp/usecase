import { FormFetcherType } from "@/fetcher";
import { FormStoreContext, FormStoreContextType } from "@tomasnyvlt/tomasnyvlt-dp";
import { useContext } from "react";

export const useFormStoreContext = <
  T extends FormFetcherType = any
>(): FormStoreContextType<T> => {
  const formStore = useContext<FormStoreContextType<T>>(FormStoreContext);

  if (formStore === undefined) {
    throw new Error("FormStore is used outside of FormStoreContext.Provider");
  }

  return formStore;
};
