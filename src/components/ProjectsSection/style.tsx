import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 80px 0;

  @media screen and (min-width: 750px) {
    gap: 96px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    &:first-child {
      > div:first-child {
        top: 0;
      }
    }

    @media screen and (min-width: 750px) {
      flex-direction: row;

      > div:first-child {
        position: relative;
        top: -200px;
      }
    }
  }
`

export const Header = styled.div`
  max-width: 375px;
`
