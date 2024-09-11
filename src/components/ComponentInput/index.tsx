import { useState } from 'react';
import { ComponentInputI } from '../../utils/components';
import {
  CharCount,
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
  onChange,
  maxLength,
  ...props
}) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [charCount, setCharCount] = useState(0);

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
        <Input
          type={inputType}
          onChange={e => {
            onChange?.(e);
            if (maxLength) setCharCount(e.currentTarget.value.length);
          }}
          {...props}
        />
        {type === 'password' && (
          <ShowPasswordButton onClick={toggleShowPassword}>
            {passwordShow ? <EyeInvisibleFilled /> : <EyeFilled />}
          </ShowPasswordButton>
        )}
      </InputContainer>
      {maxLength && (
        <CharCount>
          {charCount}/{maxLength}
        </CharCount>
      )}
    </Container>
  );
};

export default ComponentInput;
