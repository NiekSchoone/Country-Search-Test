import React from "react";
import { Container } from "../../components/atoms/container/container";
import { Header } from "../../components/atoms/header/header";
import { Layout } from "../../components/layout";

export const NotFound: React.FC = () => {
  return (
    <Layout>
      <Container borders={false}>
        <Header text="Page not found" />
      </Container>
    </Layout>
  );
};
