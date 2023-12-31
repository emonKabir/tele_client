import { withTranslation } from 'react-i18next';
import { Container, StyledInput } from './styles';
import { Label } from '../TextArea/styles';
import { InputProps } from '../types';

const Input = ({ type, name, placeholder, value, onChange, t }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput
      value={value}
      type={type}
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
