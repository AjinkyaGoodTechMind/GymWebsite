import React, { useState } from "react";
import "./Workout.css";
// import Modal from '../Modal/Modal'
import { Navigate, useNavigate } from "react-router-dom";
import ModalChakra from "../ModalChakra/ModalChakra";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
// import data from "./product.js"

const data = [
  {
    image:
      "https://www.fitnessequipmentempire.com/wp-content/uploads/2023/04/web1-300x300.jpg",
    price: "1232",
    name: "Star Trac Impact Seated Leg",
  },
  {
    image:
      "https://www.fitnessequipmentempire.com/wp-content/uploads/2022/03/web1-19-300x300.jpg",
    price: "1690",
    name: "Trac Impact Seated",
  },
  {
    image:
      "https://progymsupply.com/wp-content/themes/shoptimizer-child-theme/assets/images/shop-by-category/treadmill.webp",
    price: "3500",
    name: "Thread Mill",
  },
  {
    image:
      "https://progymsupply.com/wp-content/themes/shoptimizer-child-theme/assets/images/shop-by-category/group-cycle.webp",
    price: "2400",
    name: "Group Cycle",
  },
  {
    image:
      "https://progymsupply.com/wp-content/themes/shoptimizer-child-theme/assets/images/shop-by-category/racks.webp",
    price: "2100",
    name: "Full Rack",
  },
  {
    image:
      "https://progymsupply.com/wp-content/uploads/matrix-ic2-spin-bike-stock-441x517.webp",
    price: "4000",
    name: "Matrix Indore Cycle",
  },
  {
    image:
      "https://progymsupply.com/wp-content/uploads/cybex-VR3-seated-leg-curl-2-441x517.webp",
    price: "3040",
    name: "Hammer Strength Plate",
  },
  {
    image:
      "https://progymsupply.com/wp-content/themes/shoptimizer-child-theme/assets/images/shop-by-category/selectorized.webp",
    price: "8000",
    name: "Plate Loaded Machine",
  },
  {
    image:
      "https://progymsupply.com/wp-content/themes/shoptimizer-child-theme/assets/images/shop-by-category/elliptical.webp",
    price: "2300",
    name: "Ellipticals",
  },
];
// const plans = [{}];
console.log(data);

function Workout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bool, setBool] = useState(false);
  const [obj, setObj] = useState();
  const navigate = useNavigate();

  const handleAdd = (el, i) => {
    setBool(true);
    setObj(el);
    onOpen();
  };
  console.log(obj);

  return (
    <div className="workout-container">
      <div className="workout-heading">
        <nav>Chose your plans...</nav>
        {/* <div className='cart-button'><button>{0}</button></div> */}
      </div>

      <div className="workout-grid">
        {data?.map((el, i) => {
          return (
            <div key={i}>
              <img src={el.image} alt="" />
              <div className="product-box">
                <h3>{el.name}</h3>
                <p>$ {el.price}</p>
                <button onClick={() => handleAdd(el, i)}>Buy</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Details</ModalHeader>
          <ModalCloseButton />

          <ModalChakra setBool={setBool} bool={bool} data={obj} />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Workout;
