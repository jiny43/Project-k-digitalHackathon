import React, { useState } from 'react';

const LoginHeader: React.FC = () => {
  return (
    <div className="header" style={{ textAlign: 'center', color: 'rgb(51, 141, 242)' }}>
      <h1>Login</h1>
    </div>
  );
};

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '55vh' }}>
      <div style={{ flex: 1 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '40%' }}>
        <label style={{ display: 'flex', alignItems: 'center', height: '30%' }}>
          <input type="text" placeholder="ID" value={username} onChange={handleUsernameChange} style={{ border: 'none', height: '50px' }}/>
          <span role="img" aria-label="search" style={{ marginLeft: '5px' }}>
            🔍
          </span>
        </label>
        <br />
        <label style={{ display: 'flex', alignItems: 'center', height: '30%' }}>
          <input type="password"  placeholder="PW" value={password} onChange={handlePasswordChange} style={{ border: 'none', height: '50px' }} />
          <span role="img" aria-label="search" style={{ marginLeft: '5px' }}>
            👤
          </span>
        </label>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '8%' }}>
        <input type="submit" value="SIGN IN" style={{ backgroundColor: 'rgb(229, 241, 253)', color: 'rgb(51, 141, 242)', fontSize: '17px', fontWeight: 'bold', borderRadius: '5px', width: '50%', height: '50px', border: '2px solid rgb(51, 141, 242)' }} />
      </div>
    </form>
  );
};

const LoginFooter: React.FC = () => {
  return (
    <div className="footer" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', height: '25vh' }}>
      <button style={{ backgroundColor: 'rgb(229, 241, 253)', color: 'rgb(51, 141, 242)', fontSize: '17px', fontWeight: 'bold', borderRadius: '5px', width: '50%', height: '50px', border: '2px solid rgb(51, 141, 242)' }}>SIGN UP</button>
    </div>
  );
};

const LoginPage: React.FC = () => {
  return (
    <div className="login-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </div>
  );
};

export default LoginPage;