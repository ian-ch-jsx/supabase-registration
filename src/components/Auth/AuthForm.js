import React from 'react';

export default function AuthForm({ email, setEmail, password, setPassword, error, handleSubmit }) {
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <p>{error} test</p>
        <div className="form-controls">
          <label>email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-controls">
          <label>password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
}
