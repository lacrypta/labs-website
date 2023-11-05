import { styled } from 'styled-components'

import theme from '@/style/theme'

export const People = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 24px;
  padding-right: 32px;

  background-color: ${theme.colors.gray};
  border-radius: 99px;

  white-space: nowrap;

  img {
    width: 32px;
    height: 32px;

    border-radius: 50%;
  }
`
