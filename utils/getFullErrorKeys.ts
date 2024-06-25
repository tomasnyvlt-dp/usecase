import getFlattenObject from '@/utils/getFlattenObject';
import { AnyObject } from '@data-driven-forms/react-form-renderer';
import { FAKE_FIELD_NAME_PREFIX } from '@tomasnyvlt/tomasnyvlt-dp';

export type ValidationErrors = AnyObject | undefined;

interface Props {
  errorsObject: ValidationErrors;
  parentKey?: string;
}

/**
 * Returns an array of full error keys (field names) from the error object.
 */
const getFullErrorKeys = ({
  errorsObject = {},
  parentKey = '',
}: Props): string[] => {
  const flattenErrors = getFlattenObject(errorsObject, parentKey);

  const errorKeysArr: string[] = Object.keys(flattenErrors)
    .map((key) => key)
    .filter((key) => {
      return !!key && !key.startsWith(FAKE_FIELD_NAME_PREFIX);
    })
    .filter(Boolean);

  return errorKeysArr;
};

export default getFullErrorKeys;
