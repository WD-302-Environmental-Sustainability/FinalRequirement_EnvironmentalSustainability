import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroTextContainer = styled.div`
  margin-right: auto;
  margin-left: 100px;
  width: 600px;
  box-shadow: 0 15px 25px rgba(245, 40, 145, 0);
  height: 310px;
  border-radius: 35px;
  backdrop-filter: blur(14px);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  text-align: center;

  @media screen and (max-width: 750px) {
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }

  @media screen and (max-width: 300px) {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }

  @media screen and (max-width: 414px) {
    height: 370px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }
  
`;


export const HeroContent = styled.div`
  z-index: 3;
  margin-top: 15px;
  max-width: 1200px;

  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

export const HeroH1 = styled.h1`
  color: #000;
  margin-top: 10px;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const HeroP = styled.p`
  margin-top: 25px;
  color: #;
  font-size: 24px;
  text-align: left;
  max-width: 600px;
  font-family: 'Raleway', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
