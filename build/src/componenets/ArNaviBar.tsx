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
  const btnStyle = {
    marginTop: '30px',
    marginLeft: '15px',
    marginRight: '15px',
    display: 'flex',
    FlexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center,'
  }

  return (
    <div style={conStyle}>
      <div style={barStyle}>
        <div style={btnStyle}>
          <div>
            <img src={require('../img/Group.png').default} alt="Group 1" />
          </div>
          <div>
            <img src={require('../img/Group6.jpg').default} alt="Group 2" />
          </div>
          <div>
            <img src={require('../img/Group5.jpg').default} alt="Group 3" />
          </div>
          <div>
            <img src={require('../img/Group3.jpg').default} alt="Group 4" />
          </div>
          <div>지도 전환</div>
        </div>
      </div>
    </div>
  );
};

export default ArNaviBar;
