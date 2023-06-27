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
        <img src={require('../img/Group.png').default} alt="Group 1" />
        <img src={require('../img/Group6.jpg').default} alt="Group 2" />
        <img src={require('../img/Group5.jpg').default} alt="Group 3" />
        <img src={require('../img/Group3.jpg').default} alt="Group 4" />
      </div>
    </div>
  );
};

export default ArNaviBar;
