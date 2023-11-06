import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  /* border: 1px solid ${theme.colors.gray}; */
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

  color: ${theme.colors.white};
  text-align: left;

  cursor: pointer;

  h3 {
    font-size: 1rem;
  }

  &:focus {
    border-radius: 24px;
  }

  &:active {
  }

  &.open {
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

  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 0;
  width: 100%;

  color: ${theme.colors.text};
  font-size: 0.8rem;
  line-height: 1.1;
  text-align: left;

  &.open {
    height: 100%;

    padding: 16px;
    padding-top: 0;
  }

  p,
  li {
    font-size: 0.8rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;

    padding-left: 20px;

    li {
      position: relative;

      &:before {
        content: '';

        position: absolute;
        top: 7px;
        left: -12px;

        width: 5px;
        height: 5px;

        background-color: ${theme.colors.fuchsia};
        border-radius: 50%;
      }
    }
  }
`
