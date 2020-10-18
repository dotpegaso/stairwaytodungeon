import { keyframes, css } from 'styled-components'

export const gradientShift = keyframes`
  0% {
    background-position: 58% 50%;
  }
  25% {
    background-position: 100% 0%;
  }
  75% {
    background-position: 10% 50%;
  }
  100% {
    background-position: 58% 50%;
  }
`
export const rainbowEffect = css`
  background: linear-gradient(264.51deg, var(--rainbow));
  background-position: 58% 50%;
  background-size: 500%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${gradientShift} 20s ease infinite;
  -webkit-text-fill-color: transparent;
`

export const liftUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
