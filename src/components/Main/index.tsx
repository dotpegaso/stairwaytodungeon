import React, { FC } from 'react'
import * as S from './styles'

interface IProps {
  small: boolean
}

const Main: FC = () => (
  <S.Container>
    <S.Content>
      <S.RainbowText>Old School Revival Toolkit</S.RainbowText>
    </S.Content>

    <S.Content>
      <S.Image src="/img/stairway_logo.svg" />
    </S.Content>

    <S.Content>
      <S.SmallText>
        &quot;Aqueles que se aventuram devem sempre cantar os feitos de outros
        aventureiros, então marque bem suas ações.&quot;
      </S.SmallText>
      <S.Text>
        Que suas histórias se tornem inesquecíveis por meios de ideias
        não-convencionais.
      </S.Text>
      <S.SmallText>Faça download do zine, é gratuito ⤵</S.SmallText>
      <>
        <S.RainbowButton
          id="pdf-download"
          href="https://drive.google.com/file/d/1Id-cRlGqDLeDdLYlWnXL1jzw_g055yT8/view?usp=sharing"
          target="_blank">
          PDF
        </S.RainbowButton>
        <S.RainbowButton
          id="pack-download"
          href="https://drive.google.com/drive/folders/1BLdEVxxwZ5RGwXNQyFbvdZKrNUew_K2E?usp=sharing"
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
