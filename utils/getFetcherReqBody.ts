import { FetcherRequestType, FormFetcherType } from "@/fetcher";
import { formStoreInstance } from "@tomasnyvlt-dp/lib";

export const getFetcherReqBody = <T extends FormFetcherType>(formType: T): FetcherRequestType<T> | undefined => {
  const formInstance = formStoreInstance.get(formType);

  if (!formInstance) {
    throw new Error(`Form instance for form type "${formType}" not found.`);
  }

  return formInstance.getState().fetcherReqBody;
};
