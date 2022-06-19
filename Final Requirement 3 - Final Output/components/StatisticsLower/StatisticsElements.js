import styled from "styled-components";

export const StatisticsBG = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #03a326;
  align-items: center;
  padding-bottom: 100px;

  height: 100%;
`;

export const StatisticsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10em;
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Arimo:wght@700&display=swap");

  & h1 {
    font-family: "Arimo", sans-serif;
  }

  @media screen and (max-width: 1500px) {
    flex-direction: column;
  }
`;

export const StatisticsTextContainer = styled.div`
  display: block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;

  @media screen and (max-width: 1500px) {
    margin: 0 auto

  }

`;

export const StatisticsH1 = styled.h1`
  margin: 50px;
  margin-bottom: 60px;
  font-size: 60px;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 1500px) {
    margin: 0 auto;
  }
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const StatisticsCircle1 = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  background-color: #fff;
  border-radius: 50%;
  justify-content: center;
  flex-direction: column;
`;

export const StatisticsH1Circle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 48px;
`;

export const StatisticsP1Circle = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const StatisticsCircle2 = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  background-color: #fff;
  border-radius: 50%;
  justify-content: center;
  flex-direction: column;
`;

export const StatisticsH2Circle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 48px;
`;

export const StatisticsP2Circle = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const StatisticsCircle3 = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  background-color: #fff;
  border-radius: 50%;
  justify-content: center;
  flex-direction: column;
`;

export const StatisticsH3Circle = styled.h1`
  display: flex;
  font-size: 48px;
  justify-content: center;
  text-align: center;
`;

export const StatisticsP3Circle = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const LowerTextWrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
