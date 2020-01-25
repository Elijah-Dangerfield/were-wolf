import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const StartScreen = props => {
  return (
    <Container>
      <WelcomeMessageWrapper>
        <WelcomeMessage>Welcome To</WelcomeMessage>
        <WelcomeMessage style={{ fontSize: 44, fontWeight: "900" }}>
          Werewolf!
        </WelcomeMessage>
      </WelcomeMessageWrapper>
      <ButtonsWrapper>
        {getGameButton("New Game", "white", "red")}
        {getGameButton("Join Game", "black", "white")}
      </ButtonsWrapper>
    </Container>
  );
};

const getGameButton = (title, textColor, buttonColor) => (
  <GameButton style={{ backgroundColor: buttonColor }}>
    <GameButtonText style={{ color: textColor }}>{title}</GameButtonText>
  </GameButton>
);
export default StartScreen;

const ButtonsWrapper = styled.View`
  position: absolute;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 20%;
  margin-bottom: 100px;
`;
const WelcomeMessageWrapper = styled.View`
  margin-top: 150px;
`;
const WelcomeMessage = styled.Text`
  font-weight: 700;
  font-size: 38px;
  color: black;
  text-align: center;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  background: white;
  position: relative;
`;

const GameButton = styled.TouchableOpacity`
  height: 45%;
  width: 80%;
  margin: 0 auto;
  background: grey;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

const GameButtonText = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;
