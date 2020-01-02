import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Items = styled.button`
  font-size: 16px;
  font-weight: 600;
  list-style: none;
  border: 1px solid black;
  padding: 3px 10px;
  background-color: white;
  border-radius: 5px;
  margin: 0 10px;
`;

const Notice = () => {
  const [purchasing] = useState(1);
  const [exchange] = useState(3);
  const [report] = useState(0);
  const [cancel] = useState(5);

  const history = useHistory();

  function purchasingClick() {
    history.push(`/purchasing`);
  }

  function exchangeClick() {
    history.push(`/exchange`);
  }

  function reportClick() {
    history.push(`/user`);
  }

  function cancelClick() {
    history.push(`/cancel`);
  }

  return (
    <Container>
      <Items onClick={purchasingClick}>구매 ({purchasing})</Items>
      <Items onClick={exchangeClick}>환전 ({exchange})</Items>
      <Items onClick={reportClick}>신고 ({report})</Items>
      <Items onClick={cancelClick}>해지 ({cancel})</Items>
    </Container>
  );
};

export default Notice;
