import React from 'react'
import * as S from './styles'

const Main = () => (
  <S.Container>
    <S.Content>
      <S.RainbowText>Old School Revival Toolkit</S.RainbowText>
    </S.Content>

    <S.Content>
      <S.Image src="/img/stairway_logo.svg" />
    </S.Content>

    <S.Content>
      <S.Text small>
        &quot;Aqueles que se aventuram devem sempre cantar os feitos de outros
        aventureiros, então marque bem suas ações.&quot;
      </S.Text>
      <S.Text>
        Que suas histórias se tornem inesquecíveis por meios de ideias
        não-convencionais.
      </S.Text>
      <S.Text small>Faça download do zine, é gratuito ⤵</S.Text>
      <>
        <S.RainbowButton
          href="https://drive.google.com/file/d/1Id-cRlGqDLeDdLYlWnXL1jzw_g055yT8"
          target="_blank">
          PDF
        </S.RainbowButton>
        <S.RainbowButton
          href="https://drive.google.com/drive/folders/1BLdEVxxwZ5RGwXNQyFbvdZKrNUew_K2E"
          target="_blank">
          Material para impressão
        </S.RainbowButton>
      </>
      <S.Link
        href="https://www.youtube.com/watch?v=aR17i7u72A0"
        target="_blank">
        Como montar o material de impressão
      </S.Link>
    </S.Content>
  </S.Container>
)

export default Main
