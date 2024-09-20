import React, { useState } from 'react';

import { CharCount, Container, Text } from './styles';
import { ComponentTextAreaI } from '../../utils/components';

const ComponentTextArea: React.FC<ComponentTextAreaI> = ({
  maxLength,
  onChange,
  ...props
}) => {
  const [charCount, setCharCount] = useState(0);

  return (
    <Container>
      <Text
        maxLength={maxLength}
        {...props}
        onChange={e => {
          onChange?.(e);
          setCharCount(e.currentTarget.value.length);
        }}
      />
      {maxLength && (
        <CharCount>
          {charCount}/{maxLength}
        </CharCount>
      )}
    </Container>
  );
};

export default ComponentTextArea;
