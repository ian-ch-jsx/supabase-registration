import AuthForm from '../../components/Auth/AuthForm';
import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signUpUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setError('Error. Please try again.');
    }
  };

  return (
    <>
      <div className="auth-tabs">
        <h3
          onClick={() => {
            setType('signin');
          }}
        >
          Sign In
        </h3>
        <h3
          onClick={() => {
            setType('signup');
          }}
        >
          Sign Up
        </h3>
      </div>
      <p>type: {type}</p>
      <AuthForm
        setError={error}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
