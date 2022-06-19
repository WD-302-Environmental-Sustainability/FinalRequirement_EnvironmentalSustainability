import styled from "styled-components";

export const TripleTextContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
`

export const MainTextWrapper = styled.div`
    width:100%;
    height: 100%;
    padding: 50px;
    margin: 0 auto;
    display: flex;
    text-align: center;
    justify-content: center;

`

export const MainText = styled.h1`
    font-size: 70px;
    color: #000;
    display: inline-block;

    @media screen and (max-width: 450px) {
    font-size: 40px;
  }
`

export const MainText2 = styled.h1`
    font-size: 70px;
    color: #03A326;
    display: inline-block;

    @media screen and (max-width: 450px) {
    font-size: 40px;
  }
`

export const TripleTextWrapper = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: flex-start;
    max-width: 1700px;
    gap: 5em;

    @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const TripleTextP1 = styled.p`
    display: inline;
    font-size: 25px;
    text-align: center;

`
export const TripleTextColored = styled.p`
    display: inline;
    font-size: 25px;
    color: #03A326;
`

export const TripleTextP2 = styled.p`
    display: inline;
    font-size: 25px;
    text-align: center;
`

export const TripleTextP3 = styled.p`
    display: inline;
    font-size: 25px;
    text-align: center;
`