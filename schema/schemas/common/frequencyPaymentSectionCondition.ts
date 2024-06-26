import { ConditionDefinition } from '@data-driven-forms/react-form-renderer';

import { FORM_STORE_REFRESH_TRIGGER_KEY } from '@/constants/fields';
import { getFetcherReqBody } from '@/utils/getFetcherReqBody';
import { cascoDiscountVisibleCondition } from '@/schema/schemas/common/cascoDiscountVisibleCondition';
import { FIELD_NAMES } from '@/schema/schemas/constants/fieldNames';

export const frequencyPaymentSectionCondition: ConditionDefinition = {
  or: [
    {
      when: FIELD_NAMES.LENGTH_INSURANCE,
      is: false,
    },
    {
      and: [
        {
          when: FORM_STORE_REFRESH_TRIGGER_KEY,
          is: () => {
            const { isAgent, isInternalUser } =
              getFetcherReqBody('autosjednavac')?.temp ?? {};

            return isAgent || isInternalUser;
          },
        },
        {
          or: [
            {
              when: 'mtpl.selected',
              is: true,
            },
            cascoDiscountVisibleCondition,
          ],
        },
      ],
    },
  ],
};
