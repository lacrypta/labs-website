import { styled } from 'styled-components'

export const ValueProposal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 80px 0;

  > div {
    display: flex;
    justify-content: center;

    text-align: center;

    &:not(:first-child) {
      gap: 8px;

      @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }
    }
  }
`

export const Header = styled.div`
  max-width: 350px;
`
