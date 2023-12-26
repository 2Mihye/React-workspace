// Modal(모달) : 웹페이지에서 특정 작업을 수행하기 위해 표시되는 작은 창
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalComponent = () => {
  // Modal 의 상태를 관리해 줄 useState 훅을 사용
  const [showModal, setShowModal] = useState(false);

  // Modal을 열고 닫는 함수 정의
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      {/*
            모달을 열기 위한 버튼 생성
                variant : bootstrap에서 버튼 등 다양한 요소에 스타일 변형을 주기위해 지정해주는 속성
                          종류 : primary파랑 secondary회색 success초록 danger빨강 warning노랑 info밝은파랑 light하양 dark검정
            */}
      <Button variant="primary" onClick={handleShow}>
        Modal 열기
      </Button>
      {/* Modal 함수(컴포넌트) */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 제목</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>안녕하세요. ModalBody 입니다!</p>
          <p>O O O 님이 요청하신 사항을 확인해주시길 바랍니다.</p>
          <ul>
            <li>샤워</li>
            <li>No Smoking</li>
            <li>취사가능</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="success" onClick={handleClose}>
            저장
          </Button>
          <Button variant="light" onClick={handleClose}>
            홈페이지로
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalComponent;
