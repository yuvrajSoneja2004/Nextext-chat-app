'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components';
import Logo from '../../assets/logo.svg'
import Link from 'next/link';

function page() {
    // 1 .Defining user state variable
    const [userData, setUserData] = useState({
        username: "",
        userpass: ""
    })



    // 2. Function to handle user inputs
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    return (
        <Whole>
            <Box>
                <Image src={Logo} width={100} height={100} />
                <input type="text" placeholder='Username' name='username' value={userData.username} onChange={handleInputChange} />
                <input type="password" placeholder='Password' name='userpass' value={userData.userpass} onChange={handleInputChange} />
                <button>Login</button>
                <p>Don't have an acocunt gareeb sala? <Link href="/register">Click here</Link></p>
            </Box>
        </Whole>
    )
}

const Whole = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

const Box = styled.div`
width: 500px;
min-height: 400px;
text-align: center;
padding:  23px 20px;
border-radius: 20px;
background-color: #0B0914;
display: flex;
flex-direction: column;
gap: 30px;
justify-content: center;
align-items: center;

input {
    width: 85%;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: none;
    outline: 2px solid #331DA2;
    background-color: transparent; 
    color: #fff;
}

p {
    color: #fff;
 }
 
button {
    background-color: #8F71E0;
    width: 85%;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    color: #fff;
    outline: none;
    padding: 15px 20px;
    transition: all .3s;

    &:hover {
        background-color: #7a62bb;

    }

   
}


`

export default page