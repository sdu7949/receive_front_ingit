import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
//import { useHistory } from "react-router-dom";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "210px"
  }
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 75px;
`;

const PlusButton = styled.button`
  margin: 10px 5px 0 0;
  background-color: #2e9afe;
  color: white;
  padding: 3px;
  width: 50px;
  border: 0;
  border-radius: 5px;
`;

const MinusButton = styled.button`
  background-color: #ff0040;
  color: white;
  padding: 3px;
  width: 50px;
  border: 0;
  border-radius: 5px;
`;

const ExitButton = styled.button`
  display: flex;
  background-color: white;
  border: 1px solid black;
`;

class Modaltest extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "gray";
    this.subtitle.style.fontSize = "16px";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  SetPlus() {
    console.log(`good`);
    alert(`추가하기`);
  }

  SetMinus() {
    alert(`차감하기`);
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>수정</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>매출액 관리</h2>
          <hr />
          <form>
            <input
              style={{ margin: "4px 5px 0 0", padding: "3px" }}
              placeholder="1,000원"
            />
          </form>
          <PlusButton onClick={this.SetPlus}>추가</PlusButton>
          <MinusButton onClick={this.SetMinus}>차감</MinusButton>
          <Container>
            <ExitButton onClick={this.closeModal}>닫기</ExitButton>
          </Container>
        </Modal>
      </div>
    );
  }
}

export default Modaltest;
