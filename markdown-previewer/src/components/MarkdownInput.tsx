import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 50%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 300px;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} placeholder="Enter your Markdown here..." />
    </InputContainer>
  );
};

export default MarkdownInput;
