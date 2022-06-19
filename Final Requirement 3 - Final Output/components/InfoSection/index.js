import React from "react";
import {
  TripleTextContainer,
  MainTextWrapper,
  MainText,
  MainText2,
  TripleTextWrapper,
  TripleTextP1,
  TripleTextP2,
  TripleTextP3,
  TripleTextColored,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <TripleTextContainer>
    <MainTextWrapper>
    <MainText>Take action on <MainText2>Environmental Sustainability </MainText2> today!</MainText>
    </MainTextWrapper>
      <TripleTextWrapper>
        <TripleTextP1>A third of the food intended for human consumption <TripleTextColored>around 1.3 billion tons is wasted or lost.</TripleTextColored> This is enough to feed 3 billion people. Food waste and loss accounts for 4.4 gigatons of greenhouse gas emissions annually</TripleTextP1>
        <TripleTextP2>A recent WWF report found that <TripleTextColored>the population sizes of mammals, fish, birds, reptiles and amphibians have experienced a decline of an average of 68%</TripleTextColored> between 1970 and 2016</TripleTextP2>
        <TripleTextP3>In 1950, the world produced more than 2 million tons of plastic per year. By 2015, this annual production swelled to <TripleTextColored>419 million tons and exacerbating plastic waste in the environment.</TripleTextColored> </TripleTextP3>
      </TripleTextWrapper>
    </TripleTextContainer>
  );
};

export default InfoSection;
