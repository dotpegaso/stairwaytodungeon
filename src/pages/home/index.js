import React from "react";
import * as S from "./styles";

import logo from "../../resources/img/stairway_logo.svg";

const Home = () => (
  <S.Container>
    <S.Wrapper>
      <S.Content>
        <S.RainbowText>Old School Revival Toolkit</S.RainbowText>
      </S.Content>

      <S.Content>
        <S.Image src={logo} />
      </S.Content>

      <S.Content>
        <S.Text>
          Que suas histórias se tornem inesquecíveis através de ideias
          não-convencionais.
        </S.Text>
        <S.Text small>Faça download do zine, é gratuito ⤵</S.Text>
        <>
          <S.RainbowButton
            id="pdf-download"
            href="https://drive.google.com/file/d/1Id-cRlGqDLeDdLYlWnXL1jzw_g055yT8/view?usp=sharing"
            target="_blank"
          >
            PDF
          </S.RainbowButton>
          <S.RainbowButton
            id="pack-download"
            href="https://drive.google.com/drive/folders/1BLdEVxxwZ5RGwXNQyFbvdZKrNUew_K2E?usp=sharing"
            target="_blank"
          >
            Material para impressão
          </S.RainbowButton>
        </>
        <S.Link
          href="https://www.youtube.com/watch?v=aR17i7u72A0"
          target="_blank"
        >
          Como montar o material de impressão
        </S.Link>
      </S.Content>
    </S.Wrapper>
    <S.Wrapper>
      <S.StyledFeed
        userName="stairwaytodungeon"
        classNameLoading="Loading"
        limit="4"
      />
      <S.Footer>
        <S.Text small>
          Uma publicação independente por{" "}
          <a
            href="https://twitter.com/dotpegaso"
            target="_blank"
            rel="noreferrer"
          >
            @dotpegaso
          </a>
          , que serve como ferramenta criativa para jogadores de rpg
        </S.Text>
        <S.RainbowButton
          id="instagram"
          href="https://instagram.com/stairwaytodungeon"
          target="_blank"
        >
          👉🏾 @stairwaytodungeon
        </S.RainbowButton>
      </S.Footer>
    </S.Wrapper>
  </S.Container>
);

export default Home;
