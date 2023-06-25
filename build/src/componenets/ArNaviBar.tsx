import React from 'react';

const ArNaviBar = () => {
  const conStyle = {
    width: '390px',
    height: '843px',
    backgroundColor: 'blue',
    display: 'flex',
    FlexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const barStyle = {
    width: '90%',
    height: '10%',
    backgroundColor: '#fff',
    borderRadius: '20px',
  };

  return (
    <div style={conStyle}>
      <div style={barStyle}>
        <img src='../img/Group.png'></img>
        <img src='../img/Group6.jpg'></img>
      </div>
    </div>
  );
};

export default ArNaviBar;
