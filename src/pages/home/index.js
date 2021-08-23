import React from "react";
import * as S from "./styles";

import logo from "../../resources/img/stairway_logo.svg";

import instagram1 from "../../resources/img/00.png";
import instagram2 from "../../resources/img/01.png";
import instagram3 from "../../resources/img/02.png";
import instagram4 from "../../resources/img/03.png";

const hrefs = {
  pdf: "https://drive.google.com/file/d/1gIxcNkaA9oFgrOYghP2AKSPpBIiP2kI1/view?usp=sharing",
  package:
    "https://drive.google.com/drive/folders/1Hptrbi429dAmxj22yxGpiJaL8sLZxqcZ?usp=sharing",
  collection:
    "https://drive.google.com/drive/folders/1tg3sTMbm065Dkgw9dku084oelrwkZipQ?usp=sharing",
  twitter: "https://twitter.com/dotpegaso",
  instagram: "https://instagram.com/stairwaytodungeon",
  silvermountain:
    "https://drive.google.com/file/d/1jaFy2Gdl9KrPQYm0y7ZMYHdoGt_uuKDZ/view?usp=sharing",
};

const instagramPreviews = [instagram1, instagram2, instagram3, instagram4];

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
        <S.Text small>Faça download do zine #1, é gratuito ⤵</S.Text>
        <>
          <S.RainbowButton id="pdf-download" href={hrefs.pdf} target="_blank">
            PDF Zine #1
          </S.RainbowButton>
          <S.RainbowButton
            id="pack-download"
            href={hrefs.package}
            target="_blank"
          >
            PDF #1 + Capa + Panfleto
          </S.RainbowButton>
        </>
        <S.RainbowButton
          id="dio-download"
          href={hrefs.silvermountain}
          target="_blank"
        >
          O Anão na Montanha Prateada
        </S.RainbowButton>
        <S.Link href={hrefs.collection} target="_blank">
          Acessar a pasta com todas as edições
        </S.Link>
      </S.Content>
    </S.Wrapper>
    <S.Wrapper>
      <S.InstagramContainer>
        {instagramPreviews.map((image) => (
          <a href={hrefs.instagram} target="_blank" rel="noreferrer">
            <S.InstagramPreview src={image} />
          </a>
        ))}
      </S.InstagramContainer>
      <S.Footer>
        <S.Text small>
          Uma publicação independente por
          <a
            href={hrefs.twitter}
            target="_blank"
            rel="noreferrer"
            id="writer-instagram"
          >
            {` @dotpegaso`}
          </a>
          , para servir como ferramenta criativa aos jogadores de rpg
        </S.Text>
        <S.RainbowButton
          id="zine-instagram"
          href={hrefs.instagram}
          target="_blank"
        >
          👉🏾 @stairwaytodungeon
        </S.RainbowButton>
      </S.Footer>
    </S.Wrapper>
  </S.Container>
);

export default Home;
