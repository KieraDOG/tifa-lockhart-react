import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Item = styled.a`
  padding: 16px;
  text-decoration: none;
  color: #49515d;
  font-size: 15px;
  opacity: 0.6;
  display: block;
  transition: opacity 0.3s ease-in-out;

  &:last-of-type {
    padding-right: 0;
  }

  &::after {
    content: "";  
    width: 0;
    border-bottom: 3px solid #377e9a;
    margin: auto;
    margin-top: 4px;
    display: block;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    opacity: 1;

    &::after {
      width: 24px;
    }
  }

  ${({ active }) => active && css`
    opacity: 1;

    &&::after {
      width: 24px;
    }
  `}
`;

const ITEMS = [
  { title: 'Home', page: 'HomePage' }, 
  { title: 'Resume', page: 'ResumePage' }, 
  { title: 'Services', page: 'ServicesPage' }, 
  { title: 'Blog', page: 'BlogPage' }, 
  { title: 'Contact', page: 'ContactPage' }, 
];

// 亲戚相传 （兄弟相传） -> 状态提升
// 父传子 -> Properties

const Navigation = ({
  activePage,
  setActivePage,
}) => {
  return (
    <Wrapper>
      {ITEMS.map(({ title, page }) => (
        <Item
          key={page}
          active={activePage === page}
          href="/"
          onClick={(event) => {
            event.preventDefault();
            setActivePage(page);
          }}
        >
          {title}
        </Item>
      ))}
    </Wrapper>
  );
}

export default Navigation;
