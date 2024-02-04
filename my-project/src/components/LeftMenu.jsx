import React from "react";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { LSideMenu } from "./LSideMenu";
import { Button } from "./Button";

export const LeftSection = () => {
  return (
    <Container className=" p-8 border border-black-900">
      <Icon />
      <LSideMenu />
      <div>
        <Button className="mt-2 w-[90%] font-bold" />
      </div>
    </Container>
  );
};
