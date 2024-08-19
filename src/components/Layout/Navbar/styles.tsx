import { styled } from 'styled-components'

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  backdrop-filter: blur(10px);

  > div {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: none;
    gap: 8px;
  }
`
