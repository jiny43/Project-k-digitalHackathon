import React, { useState } from "react";
import CreateVerticalFloors from "./CreateVerticalFloors";

function FloorsVerticalMenu() {
  const [selectedFloor, setSelectedFloor] = useState(0);

  function handleFloorUp() {
    setSelectedFloor(prevFloor => (prevFloor > 0 ? prevFloor - 1 : prevFloor));
  }

  function handleFloorDown() {
    setSelectedFloor(prevFloor => (prevFloor < floors.length - 1 ? prevFloor + 1 : prevFloor));
  }

  const handleFloorClick = (index: number) => {
    setSelectedFloor(index);
  };

  const floors = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const floorsList = floors.map((floor, index) => (
    <CreateVerticalFloors
      key={index}
      floors={floor}
      isSelected={index === selectedFloor}
      onClick={() => handleFloorClick(index)}
    />
  ));

  return (
    <div style={styles.container}>
      {/* UP버튼 */}
      <button style={styles.upFloorBtn} onClick={handleFloorUp}></button>
      {/* 각 층수 들어간 컴포넌트 */}
      <p style={styles.floorContainer}>{floorsList}</p>
      {/* DOWN 버튼 */}
      <button style={styles.downFloorBtn} onClick={handleFloorDown}></button>
    </div>
  );
}

export default FloorsVerticalMenu;

const styles = {

  container: {
    display: "inline-flex",
    flexDirection: "column" as const,
    margin: 0,
  },
  upFloorBtn: {
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "white",

    borderWidth: "1px",
    borderStyle: 'solid',
    borderRadius: "5px",

    borderBottomLeftRadius: "1px",
    borderBottomRightRadius: "1px",
  },
  downFloorBtn: {
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "white",

    borderWidth: "1px",
    borderStyle: 'solid',
    borderRadius: "5px",

    borderTopLeftRadius: "1px",
    borderTopRightRadius: "1px",

  },

  floorContainer: {
    display: "inline-block",
    backgroundColor: "white",
    padding: 0,
    margin: 0,

    borderWidth: "1px",
    borderStyle: 'solid',

  },
}