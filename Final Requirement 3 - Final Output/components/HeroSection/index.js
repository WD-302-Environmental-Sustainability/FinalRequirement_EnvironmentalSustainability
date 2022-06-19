import React from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroTextContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroTextContainer>
        <HeroContent>
          <HeroH1>Environmental Sustainability 🌎</HeroH1>
          <HeroP>
            It's time for us to step up, and make a change to the environment.
            Come create a world for the future generation that meets the needs
            of the present without compromising the ability of future
            generations to meet their own needs.
          </HeroP>
        </HeroContent>
      </HeroTextContainer>
    </HeroContainer>
  );
};

export default HeroSection;
