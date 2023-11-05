import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  background-color: ${theme.colors.black};

  > div {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: none;
    gap: 8px;
  }
`
