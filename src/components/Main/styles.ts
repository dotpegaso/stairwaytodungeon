import styled from 'styled-components/macro'
import { rainbowEffect } from '../../styles/animations'

export const Container = styled.main`
  color: var(--light);
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 490px) {
    flex-wrap: wrap;
    padding: 40px 0;
  }
`

export const Content = styled.div`
  padding: 0 45px;
  flex: 1;
  text-align: left;
  display: flex;
  height: 50vh;
  align-items: flex-end;
  max-width: 400px;

  &:last-of-type {
    flex: 2.5;
    flex-wrap: wrap;
    align-content: flex-end;
    max-width: 650px;

    @media (max-width: 490px) {
      flex: none;
      max-width: 100%;
      width: 100%;
    }
  }

  @media (max-width: 490px) {
    height: initial;
    flex: none;
  }
`

export const RainbowText = styled.h1`
  ${rainbowEffect}
  font-size: 8rem;
  max-width: 350px;
  font-weight: 600;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 490px) {
    font-size: 6rem;
  }
`

export const Text = styled.p`
  margin: 0;
  color: var(--light);
  font-size: 24px;
  line-height: 1.5;
  font-weight: 300;
  width: 90%;
  margin-bottom: 30px;

  ${(props) =>
    props.small &&
    `
    color: var(--light);
    font-size: 18px;
    opacity: 0.5;
  `}

  @media (max-width: 490px) {
    width: 100%;
    margin: 30px auto;
    text-align: center;
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  opacity: 0.1;

  @media (max-width: 490px) {
    width: 50%;
    margin: 30px auto;
  }
`

export const RainbowButton = styled.a`
  text-decoration: none;
  height: 60px;
  padding: 0 40px;
  border-radius: 4px;
  text-align: center;
  background: transparent;
  font-size: 1.8em;
  border: 2px solid #444;
  transition: 0.2s all ease;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 600;
  ${rainbowEffect}

  :first-of-type {
    margin-right: 20px;

    @media (max-width: 490px) {
      margin: 0;
      margin-bottom: 20px;
    }
  }

  :hover {
    border-color: var(--light);
  }

  @media (max-width: 490px) {
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
    font-size: 1.8em;
    padding: 0;
  }
`

export const Link = styled.a`
  font-size: 15px;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid;
  color: var(--light);
  opacity: 0.5;
  margin-top: 20px;

  @media (max-width: 490px) {
    padding-bottom: 50px;
  }
`