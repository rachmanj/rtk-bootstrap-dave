import React from "react";
import { Container } from "react-bootstrap";

import BucsList from "./features/bucs/BucsList";
import AddBucForm from "./features/bucs/AddBucForm";

const App = () => {
  return (
    <Container>
      <h1>Hello World</h1>
      <AddBucForm />
      <BucsList />
    </Container>
  );
};

export default App;
