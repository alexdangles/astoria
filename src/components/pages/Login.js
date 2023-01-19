import React from 'react';
import '../../App.css';

export default function Login() {
  return (
    <form method='post'>
      <p>Enter Name:</p>
      <p>
        <input type='text' name='studentName' />
      </p>
      <p>Enter Website:</p>
      <p>
        <input type='text' name='website' />
      </p>
      <p>
        <input type='submit' value='submit' />
      </p>
    </form>
  );
}
