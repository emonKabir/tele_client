import { useState } from 'react';
import { notification } from 'antd';
//import axios from 'axios';

const init = {
  number: null,
  otp: null,
};
export const useForm = (validate: any) => {
  const [values, setValues] = useState(init);
  const [flag, setFlag] = useState(false);
  const [isOTPSubmitted, setIsOTPSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  //  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification['success']({
      message: 'Success',
      description: 'Your message has been sent!',
    });
  };

  const handleSubmitNumber = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors(validate(values));
    // // Your url for API
    // const url = '';
    // if (Object.values(values).every((x) => x !== '')) {
    //   // axios
    //   //   .post(url, {
    //   //     ...values,
    //   //   })
    //   //   .then(() => {
    //   //     //setShouldSubmit(true);
    //   //     setFlag(!flag)
    //   //   });

    //   ///// after successful request /////
    //   setFlag(true);
    // }

    ///// after successful request /////
    setFlag(true);
    setValues(init);
  };

  const handleSubmitOTP = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    //const url = '';
    // if (Object.values(values).every((x) => x !== '')) {
    //   // axios
    //   //   .post(url, {
    //   //     ...values,
    //   //   })
    //   //   .then(() => {
    //   //     //setShouldSubmit(true);
    //   //     setFlag(!flag)
    //   //   });
    //   //setFlag(!flag);

    //   ///// after success request/////
    //   setIsOTPSubmitted(true);
    // }
    ///// after success request/////
    openNotificationWithIcon();
    setValues(init);
    setIsOTPSubmitted(true);
  };

  const handleAddAnotherNumber = () => {
    console.log('on click ');
    setFlag(false);
    setIsOTPSubmitted(false);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: '' }));
  };

  return {
    handleChange,
    handleSubmitNumber,
    handleSubmitOTP,
    values,
    errors,
    flag,
    isOTPSubmitted,
    handleAddAnotherNumber,
  };
};
