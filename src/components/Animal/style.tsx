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
