import React from 'react';
import './register.scss';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Register = () => {
  
  const history = useHistory();
  
  return (
    <div className='main-page'>
      <div className='left'>
          <img src={RegisterBg} className="bg-image" alt="imageBg"/>
      </div>
      <div className='right'>
        <p className='title'>Register Page</p>
        <Input label="Fullname" placeholder="Fullname" />
        <Gap height={18}/>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20}/>
        <Button title="Register" onClick={() => history.push('/login') }/>
        <Link title="Kembali ke Login" onClick={() => history.push('/login') } />
      </div>
    </div>
  )
}

export default Register;