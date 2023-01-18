
import React from 'react'
import axios from '../api/axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';


export default function Home() {
  const [greeting, setGreeting] = useState('')
  const [cookies, setCookie] = useCookies(['token']);

  const getGreeting = async () => {
    const jwt = cookies.token;
    const res = await axios.get('/api/v1/greetings', {
      headers:{
        Authorization: `Bearer ${jwt}`
      }
    });
    setGreeting(res.data)
}


  return (
    <>
    <div>Secure Home Page</div>
    <button onClick={getGreeting}>Display Greeting:</button>

    {greeting !== '' && <h1>{greeting}</h1>}
    </>
  )
}