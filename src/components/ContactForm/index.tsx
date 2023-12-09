import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide, Zoom } from 'react-awesome-reveal';
import { ContactProps, ValidationTypeProps } from './types';
import { useForm } from '../../common/utils/useForm';
import validate from '../../common/utils/validationRules';
import { Button } from '../../common/Button';
import Input from '../../common/Input';
import { ContactContainer, FormGroup, Span, ButtonContainer } from './styles';

const Contact = ({ title, content, id, t }: ContactProps) => {
  const {
    values,
    errors,
    flag,
    isOTPSubmitted,
    handleChange,
    handleSubmitNumber,
    handleSubmitOTP,
    handleAddAnotherNumber,
  } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return (
      <Zoom direction="left">
        <Span>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify={'center'} align="middle">
        <Col lg={12} md={12} sm={24} xs={24}>
          {!flag ? (
            <Slide direction="right" triggerOnce>
              <FormGroup autoComplete="off" onSubmit={handleSubmitNumber}>
                <Col span={24}>
                  <Input
                    type="number"
                    name="number"
                    placeholder="Enter your 11 digits number here. e.g- 019xxxxxxxx"
                    value={values.number || ''}
                    onChange={handleChange}
                  />
                  <ValidationType type="number" />
                </Col>

                <ButtonContainer>
                  <Button name="submit" disabled={!values.number}>
                    {t('Submit')}
                  </Button>
                </ButtonContainer>
              </FormGroup>
            </Slide>
          ) : (
            <Slide direction="right" triggerOnce>
              <FormGroup autoComplete="off" onSubmit={handleSubmitOTP}>
                <Col span={24}>
                  <Input
                    type="number"
                    name="otp"
                    placeholder="Enter your OTP"
                    value={values.otp || ''}
                    onChange={handleChange}
                  />
                  <ValidationType type="otp" />
                </Col>

                <ButtonContainer>
                  <Button name="submit" disabled={!values.otp}>
                    {t('Submit')}
                  </Button>
                </ButtonContainer>
              </FormGroup>
              {isOTPSubmitted ? (
                <ButtonContainer>
                  <Button name="Add Another" onClick={handleAddAnotherNumber}>
                    {t('Add Another')}
                  </Button>
                </ButtonContainer>
              ) : (
                <></>
              )}
            </Slide>
          )}
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
