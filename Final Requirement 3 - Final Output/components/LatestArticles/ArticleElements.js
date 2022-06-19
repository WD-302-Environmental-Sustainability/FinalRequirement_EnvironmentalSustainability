import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
`;

export const LatestArticleContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  margin: 30px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LatestArticleH1 = styled.h1`
  text-align: center;
  font-size: 60px;
`;

export const CardArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  gap: 8em;

  @media screen and (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardArticle1 = styled.div`
  height: 700px;
  width: 400px;
`;

export const ImageHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Image1 = styled.img`
  height: 450px;
  width: 400px;
`;

export const Article1Body = styled.div`
  width: 400px;
  margin-top: 10px;

  @media screen and (max-width: 850px) {
    margin-left: 20px;
    width: 350px;
  }
`;

export const Body1ContentP = styled.a`
  font-size: 25px;
  font-weight: normal;
`;

export const CardArticle2 = styled.div`
  height: 700px;
  width: 400px;
`;

export const Image2Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Image2 = styled.img`
  height: 450px;
  width: 400px;
`;

export const Article2Body = styled.div`
  width: 400px;
  margin-top: 10px;

  @media screen and (max-width: 850px) {
    margin-left: 20px;
    width: 350px;
  }
`;

export const Body2ContentP = styled.a`
  font-size: 25px;
  font-weight: normal;
`;

export const CardArticle3 = styled.div`
  height: 700px;
  width: 400px;
`;

export const Image3Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Image3 = styled.img`
  height: 450px;
  width: 400px;
`;

export const Article3Body = styled.div`
  width: 400px;
  margin-top: 10px;

  @media screen and (max-width: 850px) {
    margin-left: 20px;
    width: 350px;
  }
`;

export const Body3ContentP = styled.a`
  font-size: 25px;
  font-weight: normal;
  text-decoration: none !important;
  a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
`;
