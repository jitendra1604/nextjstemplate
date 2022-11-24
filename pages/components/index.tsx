import React, { ReactNode } from "react";
import { Footer } from "./Layout/footer";
import { Header } from "./Layout/Header/header";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
