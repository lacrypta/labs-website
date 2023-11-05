import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Value = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 325px;
  max-width: 325px;

  padding: 16px;

  border: 1px solid ${theme.colors.gray};
  border-radius: 24px;

  img {
    width: 50px;
    height: 50px;

    border-radius: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    text-align: left;

    p {
      font-size: 16px;
    }
  }
`
