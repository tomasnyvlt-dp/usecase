import {
  AutoSjednavacFetchRequestType,
  AutoSjednavacFetchResponseType,
} from '@/schema/types/AutoSjednavacFetchType';
import { FormType } from '@tomasnyvlt/tomasnyvlt-dp';


// Make sure that the keys of FetcherRequestOptionType and FetcherResponseOptionType are the same
// and that keys are correctly picked from template literal `FormType` from @src/types/index.ts
type FetcherRequestOptionType = {
  autosjednavac: AutoSjednavacFetchRequestType;
};

type FetcherResponseOptionType = {
  autosjednavac: AutoSjednavacFetchResponseType;
};

export type FormFetcherType = keyof Pick<
  { [K in FormType]: any },
  'autosjednavac'
>;
export const formFetcherType: ReadonlyArray<FormFetcherType> = [
  'autosjednavac'
];

export type FetcherRequestType<T extends FormFetcherType> =
  FetcherRequestOptionType[T];
export type FetcherResponseType<T extends FormFetcherType> =
  FetcherResponseOptionType[T];
