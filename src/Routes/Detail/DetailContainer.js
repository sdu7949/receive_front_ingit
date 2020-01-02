import React from "react";
import styled from "styled-components";
import Modal from "Components/Modal";
import Notice from "Components/Notice";

const Container = styled.table`
  margin: 70px;
  padding: 15px;
  background-color: white;
  text-align: center;
  width: 93%;
`;

const Header = styled.th`
  font-size: 20px;
  padding: 10px;
  width: 460px;
  border-bottom: 1px solid #444444;
  font-weight: bold;
  background-color: #d0d0d0;
`;

const Row = styled.tr`
  margin: 20px;
`;

const Column = styled.td`
  font-size: 15px;
  padding: 20px;
  margin: 10px;
  border-bottom: 1px solid #444444;
`;

const Detail = ({ location }) => {
  if (location.state.investment) {
    //회원목록 detail
    return (
      <>
        <Notice />
        <Container>
          <thead>
            <Row>
              <Header>닉네임</Header>
              <Header>{location.state.nickname}</Header>
              <Header>비고</Header>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Column>식별번호</Column>
              <Column>{location.state.id}</Column>
              <Column> </Column>
            </Row>
            <Row>
              <Column>지갑주소</Column>
              <Column>{location.state.walletAddress}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>투자금액</Column>
              <Column>{location.state.investment}</Column>
              <Column>
                <Modal />
              </Column>
            </Row>
            <Row>
              <Column>보유 KeepIn</Column>
              <Column>{location.state.keepIn}</Column>
              <Column>
                <Modal />
              </Column>
            </Row>
            <Row>
              <Column>만기일</Column>
              <Column>{location.state.dueDate}</Column>
              <Column></Column>
            </Row>
          </tbody>
        </Container>
      </>
    );
  } else if (location.state.purchasingCost) {
    //구매신청 목록 detail
    return (
      <>
        <Notice />
        <Container>
          <thead>
            <Row>
              <Header>닉네임</Header>
              <Header>{location.state.nickname}</Header>
              <Header>비고</Header>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Column>식별번호</Column>
              <Column>{location.state.id}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>지갑주소</Column>
              <Column>{location.state.walletAddress}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>구매 신청 금액</Column>
              <Column>{location.state.purchasingCost}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>전송 예정 코인</Column>
              <Column>{location.state.transmitCoin}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>승인하기</Column>
              <Column>{location.state.approval}</Column>
              <Column></Column>
            </Row>
          </tbody>
        </Container>
      </>
    );
  } else if (location.state.exchangeCoin) {
    //환전신청목록 detail
    return (
      <>
        <Notice />
        <Container>
          <thead>
            <Row>
              <Header>닉네임</Header>
              <Header>{location.state.nickname}</Header>
              <Header>비고</Header>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Column>식별번호</Column>
              <Column>{location.state.id}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>환전 신청 코인</Column>
              <Column>{location.state.exchangeCoin}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>송금 여부</Column>
              <Column>{location.state.sendMoney}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>은행</Column>
              <Column>{location.state.bank}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>계좌번호</Column>
              <Column>{location.state.accountNumber}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>출금 예정 금액</Column>
              <Column>{location.state.withdrawMoney}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>환전 승인</Column>
              <Column>{location.state.exchangeApproval}</Column>
              <Column></Column>
            </Row>
          </tbody>
        </Container>
      </>
    );
  } else {
    //해지신청 목록 detail
    return (
      <>
        <Notice />
        <Container>
          <thead>
            <Row>
              <Header>닉네임</Header>
              <Header>{location.state.nickname}</Header>
              <Header>비고</Header>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Column>식별번호</Column>
              <Column>{location.state.id}</Column>
              <Column></Column>
            </Row>
            {/* <Row>
              <Column>환전 신청 코인</Column>
              <Column>{location.state.exchangeCoin}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>송금 여부</Column>
              <Column>{location.state.sendMoney}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>은행</Column>
              <Column>{location.state.bank}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>계좌번호</Column>
              <Column>{location.state.accountNumber}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>출금 예정 금액</Column>
              <Column>{location.state.withdrawMoney}</Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>환전 승인</Column>
              <Column>{location.state.exchangeApproval}</Column>
              <Column></Column>
            </Row> */}
          </tbody>
        </Container>
      </>
    );
  }
};

export default Detail;
