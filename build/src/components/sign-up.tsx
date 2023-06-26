import React, { useState } from 'react';

const RegisterForm = () => {
  const [birthYear, setBirthYear] = useState<number>(2000);
  const [bloodType, setBloodType] = useState<string>('A형');

  const handleBirthYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthYear(parseInt(e.target.value));
  };

  const handleBloodTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBloodType(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: 'rgb(51, 141, 242)' }}>ID:</span>
        <input type="text" required style={{ marginLeft: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black' }} />
      </label>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: 'rgb(51, 141, 242)' }}>PWD:</span>
        <input type="password" required style={{ marginLeft: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black' }} />
      </label>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: 'rgb(51, 141, 242)' }}>PWD Check:</span>
        <input type="password" required style={{ marginLeft: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black' }} />
      </label>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: 'rgb(51, 141, 242)', whiteSpace: 'nowrap', flex: '0 0 auto' }}>출생년도:</span>
        <div style={{ flex: '1 1 auto', marginLeft: '10px', overflowX: 'auto' }}>
          <select value={birthYear} onChange={handleBirthYearChange} required style={{ width: '100%', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black', whiteSpace: 'nowrap' }}>
            {Array.from({ length: 64 }, (_, index) => (
              <option key={index} value={1960 + index}>{1960 + index}년</option>
            ))}
          </select>
        </div>
        <span style={{ marginLeft: '10px', fontSize: '5px', color: 'blue', whiteSpace: 'pre-wrap', wordBreak: 'break-word', textAlign: 'center' }}>*설정하신 나이에 따라 지도에 표현되는 색이 다를 수 있습니다.</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: 'rgb(51, 141, 242)' }}>혈액형:</span>
        <select value={bloodType} onChange={handleBloodTypeChange} required style={{ marginLeft: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black' }}>
          <option value="A형">A형</option>
          <option value="B형">B형</option>
          <option value="AB형">AB형</option>
          <option value="O형">O형</option>
        </select>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: 'rgb(51, 141, 242)' }}>연락처:</span>
        <input type="text" required style={{ marginLeft: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black' }} />
      </label>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: 'rgb(51, 141, 242)' }}>비상연락처:</span>
        <input type="text" required style={{ marginLeft: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black' }} />
      </label>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: 'rgb(51, 141, 242)' }}>질병:</span>
        <input type="text" style={{ marginLeft: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black' }} />
      </label>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: 'rgb(51, 141, 242)' }}>지병:</span>
        <input type="text" style={{ marginLeft: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black' }} />
      </label>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <input
          type="submit"
          value="SUBMIT"
          style={{
            backgroundColor: 'rgb(229, 241, 253)',
            color: 'rgb(51, 141, 242)',
            fontSize: '20px',
            borderRadius: '5px',
            width: '50%',
            height: '50px',
            border: '2px solid rgb(51, 141, 242)',
            outline: 'none',
          }}
        />
      </div>
    </form>
  );
};

const RegisterPage = () => {
  return (
    <div className="register-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
