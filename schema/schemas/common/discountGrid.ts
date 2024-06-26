import { FORM_STORE_REFRESH_TRIGGER_KEY } from '@/constants/fields';
import { GridType } from "@tomasnyvlt-dp/lib";
import { getFetcherReqBody } from '@/utils/getFetcherReqBody';
import getRandomId from '@/utils/getRandomId';
import { cascoDiscountVisibleCondition } from '@/schema/schemas/common/cascoDiscountVisibleCondition';
import { FIELD_NAMES } from '@/schema/schemas/constants/fieldNames';
import getDeepObjectValue from '@/utils/getDeepObjectValue';

export const discountGrid: GridType = {
  component: 'grid',
  name: getRandomId(),
  css: {
    mt: '5rem',
  },
  condition: {
    when: FORM_STORE_REFRESH_TRIGGER_KEY,
    is: () => {
      const { isAgent, isInternalUser } =
        getFetcherReqBody('autosjednavac')?.temp ?? {};

      return isAgent || isInternalUser;
    },
  },
  fields: [
    {
      component: 'range-field',
      label: 'Obchodní sleva na povinné ručení',
      name: FIELD_NAMES.DISCOUNT.MTPL_NAME,
      condition: {
        when: 'mtpl.selected',
        is: true,
      },
      resolveProps: (_props, _fieldApi, formOptions) => {
        const { values } = formOptions.getState();

        return {
          max: getDeepObjectValue({
            obj: values,
            keys: FIELD_NAMES.DISCOUNT.MTPL_MAX.split('.'),
          }),
        };
      },
    },
    {
      component: 'range-field',
      label: 'Obchodní sleva na havarijní pojištění',
      name: FIELD_NAMES.DISCOUNT.CASCO_NAME,
      condition: cascoDiscountVisibleCondition,
      resolveProps: (_props, _fieldApi, formOptions) => {
        const { values } = formOptions.getState();

        return {
          max: getDeepObjectValue({
            obj: values,
            keys: FIELD_NAMES.DISCOUNT.CASCO_MAX.split('.'),
          }),
        };
      },
    },
  ],
};
