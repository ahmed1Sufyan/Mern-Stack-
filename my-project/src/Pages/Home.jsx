import React from "react";
import { Container } from "../components/Container";
import { MiddleSection } from "../components/MiddleSection";
import { RightSection } from "../components/RightSection";
import { Wrapper } from "../components/Wrapper";
import { LeftSection } from "../components/LeftMenu";

export const Home = () => {
  return (
    <>
    <LeftSection />
      <Wrapper>
        <MiddleSection />
      </Wrapper>
      <Wrapper className="w-[35%]">
        <RightSection />
      </Wrapper>

    </>
  );
};
