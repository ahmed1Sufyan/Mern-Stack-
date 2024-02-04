import React from "react";
import { Container } from "./Container";
import { Inputfield } from "./Inputfield";
import { Trending } from "./Trending";
import { Feed } from "./Feed";
import { Follow } from "./Follow";

export const RightSection = ({className}) => {
  return (
    <Container className={`${className} py-2  `}>
          <Inputfield />
          <Follow/>
          <Feed />
          <Trending />
          <Follow/>
    </Container>
  );
};
