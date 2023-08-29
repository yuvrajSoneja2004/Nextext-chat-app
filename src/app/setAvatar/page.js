'use client'
import Loader from '@/components/Loader';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

function page() {


    const [availableAvatars , setAvailableAvatars] = useState([]);
    const [selectedAvatar , setSelectedAvatar] = useState(undefined);
    const [isLoading , setIsLoading] = useState(false);
    
    const getAvailableAvatars = async () => {
        setIsLoading(true)
        try {
            const data = [];
        const baseAvatarURL = "https://api.multiavatar.com";
        for (let i = 0; i < 5;  i++){
            const res = await axios.get(`${baseAvatarURL}/${Math.round(Math.random() * 1000)}`);
            const buffer = new Buffer(res.data);
            data.push(buffer.toString("base64"));
        }
        setAvailableAvatars(data)
        } catch (error) {
            console.log('error man avatar' , error)
        } finally {
            setIsLoading(false);

        }
       
    }

    useEffect(() => {
        getAvailableAvatars();
    } , [])

    if(isLoading){
        return <Loader />
    }

  return (
    <Container>
       
        <h1>Select avatar that you want to use</h1>
        <div>
        {
          isLoading ? <Loader /> :  availableAvatars.map(( avatar , i ) => (
            <>
             <img src={`data:image/svg+xml;base64,${avatar}`} key={i} alt='lol' width={100} height={100} onClick={() => {
                setSelectedAvatar(i)
             }} className={i === selectedAvatar ? "selectedAvatar" : "avatar-zero"} style={{borderRadius: '50%'}}/>
            </>
                
            ))
        }
        </div>
        
    </Container>
  )
}


const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    div {
        display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    }

    h1 {
        color: #fff;
        display: block;
    }
`
export default page