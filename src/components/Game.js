import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Component for each and every game induvdial data will be passed
const Game = ({ name, released, image, id }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    min-height: 40vh;
    object-fit: cover;
    padding-bottom: 1rem;
  }
`;

export default Game;
