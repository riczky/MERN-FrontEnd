import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Login = () => {

  const history = useHistory();

  return (
    <div className='main-page'>
    <div className='left'>
        <img src={LoginBg} className="bg-image" alt="imageBg"/>
    </div>
    <div className='right'>
      <p className='title'>Login Page</p>
      <Input label="Email" placeholder="Email" />
      <Gap height={18} />
      <Input label="Password" placeholder="Password" />
      <Gap height={20}/>
      <Button title="Login" onClick={() => history.push('/') } />
      <Link title="Belum punya akun? Silahkan Daftar" onClick={() => history.push('/register') } />
    </div>
  </div>
  )
}

export default Login;