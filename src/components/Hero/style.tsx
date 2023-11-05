import { styled } from 'styled-components'

import theme from '@/style/theme'

export const Hero = styled.div`
  position: relative;
  overflow: hidden;

  height: 100%;
  min-height: 100vh;

  padding-top: 200px;

  text-align: center;

  background-image: url('/img/lines.png');
  background-size: cover;

  > div {
    &:first-child {
      position: relative;
      z-index: 1;
    }
  }

  h1 {
    background: linear-gradient(
      91deg,
      ${theme.colors.lilac} 18.74%,
      ${theme.colors.white} 99.96%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Assets = styled.div`
  position: absolute;
  bottom: -100px;
  left: 0;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 700px) {
    bottom: 0;
  }

  &:before {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 300px;

    background: linear-gradient(
      to bottom,
      rgba(16, 16, 16, 0),
      rgba(16, 16, 16, 1)
    );
  }

  img {
    position: relative;
    z-index: 1;

    width: 1240px;
  }

  .circle-world {
    position: absolute;
    top: 0;
    z-index: 0;

    display: flex;
    justify-content: center;
    width: 1240px;
    height: 1240px;

    margin-top: -5px;

    background-color: ${theme.colors.fuchsia};
    box-shadow: 0 -18px 250px rgba(236, 90, 181, 0.35);
    border-radius: 50%;

    .dot {
      position: relative;
      z-index: 1;

      width: 30px;
      height: 30px;

      margin-top: -3px;

      background-color: ${theme.colors.fuchsia};
      box-shadow: 0 0 10px 10px ${theme.colors.fuchsia};
      border-radius: 50%;
      filter: blur(6px);
    }
  }
`
