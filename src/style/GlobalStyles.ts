'use client'

import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;

    font-size: 20px;
  }

  body {
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100dvh;

    background: ${theme.colors.background};

    color: ${theme.colors.text};
    font-size: .8rem;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    color: ${theme.colors.green};
    font-size: .9rem;
    text-decoration: none;
  }

  a, 
  button {
    /* font-family: var(--font-primary); */
    font-weight: bold;
  }

  h1 {
    font-size: 2.5rem;

    @media screen and (min-width: 700px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 2rem;

    @media screen and (min-width: 700px) {
      font-size: 2.4rem;
    }
  }

  h3 {
    font-size: 1.2rem;

    @media screen and (min-width: 700px) {
      font-size: 2rem;
    }
  }
`

export default GlobalStyles
