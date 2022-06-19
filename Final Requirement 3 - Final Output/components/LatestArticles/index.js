import React from "react";
import {
  ArticleContainer,
  LatestArticleContainer,
  LatestArticleH1,
  CardArticleContainer,
  CardArticle1,
  ImageHeader,
  Image1,
  Article1Body,
  Body1ContentP,
  CardArticle2,
  Image2Header,
  Image2,
  Article2Body,
  Body2ContentP,
  CardArticle3,
  Image3Header,
  Image3,
  Article3Body,
  Body3ContentP
} from "./ArticleElements";

const LatestArticle = () => {
  return (
    <>
      <ArticleContainer>
        <LatestArticleContainer>
          <LatestArticleH1>Latest Articles</LatestArticleH1>
        </LatestArticleContainer>
      </ArticleContainer>


      <CardArticleContainer>
        <CardArticle1>
          <ImageHeader>
            <Image1 img src="https://i.imgur.com/DOWmZtO.png" alt=""></Image1>
          </ImageHeader>
          <Article1Body>
            <Body1ContentP a href='https://earth.org/the-biggest-environmental-problems-of-our-lifetime/' target="_blank">Biggest Environmental Problems This Year by Deena Robinson from the Earth organization </Body1ContentP>
          </Article1Body>
        </CardArticle1>

        <CardArticle2>
          <Image2Header>
            <Image2 img src="https://i.imgur.com/Rc5dTIy.png" alt=""></Image2>
            <Article2Body>
              <Body2ContentP a href='https://www.usatoday.com/story/money/2019/06/17/climate-change-30-ways-to-make-your-life-more-environmentally-friendly/39366589/' target="_blank">Day to Day Actions We can do to be Environmentally Sustainable by Steven Peters</Body2ContentP>
            </Article2Body>
          </Image2Header>
        </CardArticle2>

        <CardArticle3>
          <Image3Header>
            <Image3 img src="https://i.imgur.com/qIjblQw.png" alt=""></Image3>
            <Article3Body>
            <Body3ContentP a href='https://www.pewresearch.org/science/2021/05/26/gen-z-millennials-stand-out-for-climate-change-activism-social-media-engagement-with-issue/' target="_blank">Gen Z, Millennials Stand Out for Climate Change Activism by Alec Tyson</Body3ContentP>
            </Article3Body>
          </Image3Header>
        </CardArticle3>


      </CardArticleContainer>
    </>
  );
};

export default LatestArticle;
