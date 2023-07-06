import * as yup from 'yup';

export const traderPreferenceValidationSchema = yup.object().shape({
  preference: yup.string().required(),
  user_id: yup.string().nullable(),
});
