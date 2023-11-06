import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  min-width: 325px;
  max-width: 325px;

  padding: 16px 24px;

  border: 1px solid ${theme.colors.gray};
  border-radius: 24px;

  p {
    &:first-child {
      color: ${theme.colors.lilac};
    }
  }
`
