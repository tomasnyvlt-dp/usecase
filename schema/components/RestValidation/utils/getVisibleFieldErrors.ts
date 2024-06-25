import getFirstVisibleFieldElement from '@/utils/getFirstVisibleFieldElement';
import { ValidationErrors } from '@/utils/getFullErrorKeys';
import { SingleErrorType } from '@/schema/components/RestValidation/types';

const getVisibleFieldErrors = (
  errors: SingleErrorType[] = []
): ValidationErrors => {
  const visibleFieldErrorsArr = errors
    .map(({ field, message }) => {
      if (!getFirstVisibleFieldElement(field)) return null;

      return {
        field,
        message,
      };
    })
    .filter(Boolean) as SingleErrorType[];

  const visibleFieldErrors: ValidationErrors = visibleFieldErrorsArr.reduce(
    (acc, { field, message }) => {
      acc![field] = message;

      return acc;
    },
    {} as ValidationErrors
  );

  return visibleFieldErrors;
};

export default getVisibleFieldErrors;
