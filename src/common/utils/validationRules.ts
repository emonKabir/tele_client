import { validateProps } from '../../common/types';

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.number) {
    errors.number = 'Number is required';
  }
  if (!values.otp) {
    errors.otp = 'OTP is required';
  }
  return errors;
}
