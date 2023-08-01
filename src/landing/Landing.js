import { styled } from "styled-components";
import { Calendar } from "../calendar/Calendar";

const TileContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Tile = styled.div`
  border-radius: 30px;
  padding: 25px;
  width: 25%;
`;

export const Landing = () => {
  return (
    <TileContainer>
      <Tile>
        <Calendar />
      </Tile>
    </TileContainer>
  );
};
