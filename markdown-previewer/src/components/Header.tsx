import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #4fa3d1;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Toggle Guide</Button>
    </HeaderContainer>
  );
};

export default Header;
