import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const OutputContainer = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #f0f0f0;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <h2>Preview</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
