import React from "react";

function CreateVerticalFloors({ floors, isSelected, onClick } : any) {
  const floorStyle = isSelected ? styles.onClickFloor : styles.defaultFloor;

  return (
    <div style={styles.container} onClick={onClick}>
      <p style={{ ...styles.fontStyle, ...floorStyle }}>{floors}</p>
    </div>
  );
}

export default CreateVerticalFloors;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  fontStyle: {
    color: "black",
  },
  defaultFloor: {
    backgroundColor: "white",
    padding: "10px",
    margin: 0,

  },
  onClickFloor: {
    backgroundColor: "#2A72EF",
    color: "white",
    padding: "10px",
    margin: 0,

  },
};
