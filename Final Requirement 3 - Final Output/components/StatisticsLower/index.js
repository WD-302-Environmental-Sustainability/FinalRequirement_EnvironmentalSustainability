import React from "react";
import {
  StatisticsBG,
  StatisticsTextContainer,
  StatisticsMainContainer,
  StatisticsH1,
  StatisticsWrapper,
  StatisticsCircle1,
  StatisticsH1Circle,
  StatisticsP1Circle,
  StatisticsCircle2,
  StatisticsH2Circle,
  StatisticsP2Circle,
  StatisticsCircle3,
  StatisticsH3Circle,
  StatisticsP3Circle,
  LowerTextWrapper
} from "./StatisticsElements";

import {
    MainText,
    MainText2
} from "./../InfoSection/InfoElements";

const LowerStatistics = () => {
  return (
    <>
      <StatisticsBG>
        <StatisticsTextContainer>
          <StatisticsH1>Statistics about the Environment</StatisticsH1>
        </StatisticsTextContainer>

        <StatisticsMainContainer>
          <StatisticsWrapper>
            <StatisticsCircle1>
              <StatisticsH1Circle>90,000</StatisticsH1Circle>
              <StatisticsP1Circle>forests that have</StatisticsP1Circle>
              <StatisticsP1Circle>been exploited</StatisticsP1Circle>
            </StatisticsCircle1>
          </StatisticsWrapper>

          <StatisticsCircle2>
            <StatisticsH2Circle>30%</StatisticsH2Circle>
            <StatisticsP2Circle>increased recovery rate</StatisticsP2Circle>
            <StatisticsP2Circle>rate towards the</StatisticsP2Circle>
            <StatisticsP2Circle>environment</StatisticsP2Circle>
          </StatisticsCircle2>

          <StatisticsCircle3>
            <StatisticsH3Circle>93,000,000</StatisticsH3Circle>
            <StatisticsP3Circle>cubic meter of clothing </StatisticsP3Circle>
            <StatisticsP3Circle>waste account</StatisticsP3Circle>
          </StatisticsCircle3>
        </StatisticsMainContainer>
      </StatisticsBG>


      <LowerTextWrapper>
        <MainText>
          Together we can make a change to the <MainText2>environment.</MainText2>
        </MainText>
      </LowerTextWrapper>
    </>
  );
};

export default LowerStatistics;
