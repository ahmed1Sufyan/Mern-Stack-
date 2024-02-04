import React from "react";
import { Container } from "../components/Container";
import { Inputfield } from "../components/Inputfield";
import { Allpost } from "../components/Allpost";
import { Trending } from "../components/Trending";
import { RightSection } from "../components/RightSection";
import { Wrapper } from "../components/Wrapper";
import Input from "../components/Input";
import { Follow } from "../components/Follow";
import { Servicepolicy } from "../components/Servicepolicy";
import { LeftSection } from "../components/LeftMenu";

export const Explore = () => {
  return (
    <>
      <LeftSection />
      <Wrapper>
        <Inputfield />
        <Trending className="w-full " />
      </Wrapper>
      <Wrapper className="w-[35%]">
        <Follow />
        <Servicepolicy />
      </Wrapper>
    </>
  );
};

{
  /* <Container className="w-full flex" >
<div className="w-[70%] p-4">
<Inputfield/>
 <Allpost/>
</div>
//  <RightSection/>
// </Container> */
}
