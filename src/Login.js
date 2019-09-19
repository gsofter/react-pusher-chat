import React from 'react';

import './Login.css';

export default function Login(props) {
  return (
    <div className="Login">
      <h1 className="Login__title">Chatkit React Getting Started</h1>
      <div className="Login__button" onClick={() => login('alice', 'bob')}>
        Log in as <b>Alice</b>
      </div>
      <div className="Login__button" onClick={() => login('bob', 'alice')}>
        Log in as <b>Bob</b>
      </div>
    </div>
  );
}

function login(userId, otherUserId) {
  window.location.href = `?userId=${userId}&otherUserId=${otherUserId}`;
}
