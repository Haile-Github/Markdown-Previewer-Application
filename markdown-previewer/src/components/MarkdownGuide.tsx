import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const MarkdownGuide: React.FC = () => {
  return (
    <GuideContainer>
      <h2>Markdown Guide</h2>
      <ul>
        <li><code># Heading 1</code></li>
        <li><code>## Heading 2</code></li>
        <li><code>*italic*</code></li>
        <li><code>**bold**</code></li>
        {/* Add more Markdown syntax examples as needed */}
      </ul>
    </GuideContainer>
  );
};

export default MarkdownGuide;
