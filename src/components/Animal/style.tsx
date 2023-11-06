import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Animal = styled.div`
  min-width: 240px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    p {
      color: ${theme.colors.gray};
    }
  }
`

interface ImageProps {
  $background: string
}

export const Image = styled.div<ImageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;

  background-color: ${props => props.$background};
  border-radius: 24px;
`
