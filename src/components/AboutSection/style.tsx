import { styled } from 'styled-components'

import theme from '@/style/theme'

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;

  padding: 80px 0;
`

export const Header = styled.div`
  max-width: 500px;
`

export const List = styled.div`
  overflow-x: scroll;

  display: flex;
  gap: 12px;

  padding: 16px;

  @media screen and (min-width: 700px) {
    padding: 16px 280px;
  }

  img {
    border-radius: 16px;
  }
`

export const Number = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${theme.colors.fuchsia};

  span {
    font-weight: bold;

    &:first-child {
      font-size: 96px;
      line-height: 76px;
    }

    &:last-child {
      font-size: 64px;
      line-height: 44px;
    }
  }
`
