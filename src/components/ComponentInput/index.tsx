import { useState } from 'react';
import { ComponentInputI } from '../../utils/components';
import {
  Container,
  Input,
  InputContainer,
  Label,
  ShowPasswordButton,
} from './styles';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import colors from '../../styles/colors';

const ComponentInput: React.FC<ComponentInputI> = ({
  label,
  error,
  name,
  type,
  ...props
}) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  function toggleShowPassword() {
    if (inputType === 'password') setInputType('text');
    else setInputType('password');
    setPasswordShow(!passwordShow);
  }

  return (
    <Container>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <InputContainer
        style={{ borderColor: error ? colors.dark.danger : undefined }}
      >
        <Input type={inputType} {...props} />
        {type === 'password' && (
          <ShowPasswordButton onClick={toggleShowPassword}>
            {passwordShow ? <EyeInvisibleFilled /> : <EyeFilled />}
          </ShowPasswordButton>
        )}
      </InputContainer>
    </Container>
  );
};

export default ComponentInput;
