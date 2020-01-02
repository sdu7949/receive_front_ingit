import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 20;
  background-color: white;
`;

const List = styled.div`
  display: flex;
`;

const Item = styled.li`
  width: 170px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  list-style: none;
  font-size: 18px;
`;

// const Alter=styled.li`
//     width:170px;
//     height:50px;
//     text-align:center;
//     border-bottom: 3px solid
//     ${props => (props.current ? "#3498db" : "transparent")};
//     transition : border-bottom 0.5s ease-in-out;
//     list-style : none;
//     font-size : 18px;
//     justify-content : flex-end;
// `;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      {/* <Item current = {pathname === "/"}>
                <SLink to="/">로그인</SLink>
            </Item> */}
      <Item current={pathname === "/user"}>
        <SLink to="/user">회원 목록</SLink>
      </Item>
      <Item current={pathname === "/purchasing"}>
        <SLink to="/purchasing">구매 신청 목록</SLink>
      </Item>
      <Item current={pathname === "/exchange"}>
        <SLink to="/exchange">환전 신청 목록</SLink>
      </Item>
      <Item current={pathname === "/cancel"}>
        <SLink to="/cancel">해지 신청 목록</SLink>
      </Item>
    </List>
  </Header>
));
