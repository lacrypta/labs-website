import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  /* padding: 80px 0; */

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    /* &:first-child {
      display: flex;
      align-items: center;

      > div:first-child {
        top: 0;
      }
    } */

    @media screen and (min-width: 750px) {
      flex-direction: row;
    }
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 475px;

  margin: 0 auto;

  text-align: center;
`
