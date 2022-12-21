import React, { ReactNode } from "react";
import { Footer } from "./Layout/footer";
import { Header } from "./Layout/Header/header";
import { SSRProvider } from "react-bootstrap";
interface Props {
  children?: ReactNode;
}

export const Layout = React.memo(function Layout({
  children,
  ...props
}: Props) {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
});
