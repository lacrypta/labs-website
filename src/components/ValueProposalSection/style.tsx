import { styled } from 'styled-components'

import theme from '@/style/theme'

export const ValueProposal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 80px 0;

  > div {
    display: flex;
    justify-content: center;

    text-align: center;

    &:not(:first-child) {
      gap: 24px;
    }
  }
`

export const Header = styled.div`
  max-width: 375px;
`
