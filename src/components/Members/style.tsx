import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Members = styled.div`
  position: relative;
`

export const Info = styled.div`
  position: absolute;
  right: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  text-shadow:
    0px 18px 40px rgba(236, 90, 181, 0.65),
    0px 4px 8px rgba(0, 0, 0, 0.15);

  &:after,
  &:before {
    content: '';

    position: absolute;
    top: 0;

    width: 25%;
    height: 100%;
  }

  &:before {
    left: 0;
    background: linear-gradient(
      to right,
      ${theme.colors.black},
      rgba(16, 16, 16, 0)
    );
  }

  &:after {
    right: 0;
    background: linear-gradient(
      to left,
      ${theme.colors.black},
      rgba(16, 16, 16, 0)
    );
  }
`

export const List = styled.div`
  opacity: 0.35;

  display: flex;
  flex-direction: column;
  gap: 16px;

  > div {
    position: relative;

    display: flex;
    gap: 16px;

    &:first-child {
      transform: translateX(-500%);
    }

    &:last-child {
      transform: translateX(-200%);
    }
  }
`
