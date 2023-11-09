import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Project = styled.div`
  max-width: 375px;

  div {
    &:first-child {
      overflow: hidden;

      border-radius: 24px;

      img {
        width: 100%;
      }
    }

    &:last-child {
      display: flex;
      flex-direction: column;
      gap: 8px;

      padding: 24px 12px;
    }
  }
`
