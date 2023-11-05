import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  border: 1px solid var(--gray);
  border-radius: 24px;
`

export const Trigger = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;

  padding: 24px 16px;

  background-color: transparent;
  border: none;
  box-shadow: none;

  color: var(--white);
  text-align: left;

  cursor: pointer;

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 16px;
  }

  &:focus {
    // background-color: red;
    border-radius: 24px;
  }

  &:active {
    // background-color: blue;
  }

  &.true {
    /* border-bottom: 1px solid var(--gray); */

    svg {
      transform: rotate(45deg);
    }

    &:focus {
      /* border-radius: 24px 24px 0 0; */
      /* box-shadow: none; */
      /* border: none; */
      /* border-radius: none; */
    }
  }
`
export const Body = styled.div`
  overflow: hidden;

  height: 0;
  width: 100%;

  color: ${theme.colors.text};
  font-size: 0.8rem;
  line-height: 1.1;
  text-align: left;

  &.true {
    height: 100%;

    padding: 16px;
    padding-top: 0;
  }

  p {
    font-size: 0.8rem;
  }
`
