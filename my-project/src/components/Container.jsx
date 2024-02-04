import React from "react";

export const Container = (props) => {
  const { children, className, ...extra } = props;
  console.log(className);
  return <div className={`${className} ${extra}`}>{children}</div>;
};