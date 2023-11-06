import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 200px;

  background-color: ${theme.colors.white};

  color: ${theme.colors.black};

  > div {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    @media screen and (min-width: 700px) {
      flex-direction: row;
    }

    div {
      display: flex;
      align-items: center;
      gap: 12px;
      /* justify-content: center; */
      &:first-child {
      }

      p {
        font-size: 0.6rem;
      }

      ul {
        display: flex;
        gap: 4px;

        li {
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 35px;
            height: 35px;

            background-color: ${theme.colors.black};
            border-radius: 50px;
          }
        }
      }
    }
  }
`
