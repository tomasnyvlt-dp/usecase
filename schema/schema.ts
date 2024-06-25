import { SchemaType } from "@tomasnyvlt/tomasnyvlt-dp";
import { CAR_INSURANCE_FORM_BODY_LS_KEY } from '@/schema/constants';
import bonusCalculationSection from '@/schema/schemas/step1/bonusCalculationSection';
import { insuranceDate } from '@/schema/schemas/step1/insuranceDate';
import insuredInfoSection from '@/schema/schemas/step1/insuredInfoSection';
import occupantInfoSection from '@/schema/schemas/step1/occupantInfoSection';
import { vehicleBrandModelType } from '@/schema/schemas/step1/vehicleBrandModelType';
import { vehicleEngine } from '@/schema/schemas/step1/vehicleEngine';
import { vehicleInfoOverview } from '@/schema/schemas/step1/vehicleInfoOverview';
import { vehicleIntroText } from '@/schema/schemas/step1/vehicleIntroText';
import { vehicleSpzFetch } from '@/schema/schemas/step1/vehicleSpzFetch';

const schema: SchemaType = {
  fields: [
    {
      component: 'wizard',
      name: 'customWizard',
      localStorageKey: CAR_INSURANCE_FORM_BODY_LS_KEY,
      formType: 'autosjednavac',
      stepper: {
        hiddenOnSteps: [4],
        hiddenSteps: [4],
        preventFunctionsOnStep: [4],
        restartFormOnLastStepPrev: true,
      },
      requiredInfo: {
        hiddenOnSteps: [0, 1, 2, 3, 4],
      },
      navigationButtons: {
        activeOnSteps: [0, 1, 2, 3],
        next: {
          labelArr: [...Array(3).fill(null), 'Sjednat'],
        },
      },
      dataLayer: {
        visitorLoginState: 'zákazník',
        pageType: 'sjednávač',
        pageDepartment: 'Pojištění pro lidi',
        pageMainCategory: 'Autopojištění',
      },
      fields: [
        {
          component: 'step',
          name: 'step-1',
          title: 'Vozidlo a váš bonus',
          dataLayer: {
            virtualPageUrl: '/auto/sjednavac/zakladni-informace',
            virtualPageTitle: 'Vozidlo a váš bonus',
          },
          maxWidth: '40.4375rem',
          fields: [
            vehicleIntroText,
            vehicleSpzFetch,
            vehicleInfoOverview,
            vehicleBrandModelType,
            vehicleEngine,
            bonusCalculationSection,
            occupantInfoSection,
            insuredInfoSection,
            insuranceDate,
          ],
        }
      ],
    },
  ],
};

export default schema;
