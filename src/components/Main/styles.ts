import styled, { css } from 'styled-components/macro'
import { rainbowEffect, liftUp } from '../../styles/animations'

const defaultText = css`
  margin: 0;
  color: var(--light);
  font-size: 24px;
  line-height: 1.5;
  font-weight: 300;
  width: 90%;
  margin-bottom: 30px;

  @media (max-width: 490px) {
    width: 100%;
    margin: 30px auto;
    text-align: center;
  }
`

const animation = css`
  opacity: 0;
  transition: .2s; all ease;
  animation: ${liftUp} .2s ease forwards;
`

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
  height: 45%;
  align-items: flex-end;
  max-width: 400px;
  ${animation}

  &:nth-child(1) {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  &:first-of-type {
    flex: 2.5;

    @media (max-width: 490px) {
      flex: none;
    }
  }

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
  ${defaultText}
`

export const SmallText = styled.p`
  ${defaultText}
  font-size: 18px;
  opacity: 0.5;
`

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  opacity: 0.2;

  @media (max-width: 490px) {
    width: 50%;
    margin: 30px auto;
  }
`

export const RainbowButton = styled.a`
  text-decoration: none;
  padding: 15px 40px;
  border-radius: 4px;
  text-align: center;
  background: transparent;
  font-size: 1.8em;
  border: 2px solid #444;
  transition: 0.2s all ease;
  cursor: pointer;
  position: relative;
  display: block;
  align-items: center;
  font-weight: 600;
  color: var(--light);
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
    padding: 15px 0;
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
    padding-bottom: 3px;
    margin: 0 auto 50px;
    text-align: center;
  }
`
