import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('# Hello World');
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const onToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <>
      <Header onToggleGuide={onToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </Container>
    </>
  );
};

export default App;
