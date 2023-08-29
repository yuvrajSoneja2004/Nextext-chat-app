import React from 'react';
import LoaderImg from '../assets/loader.gif'
import Image from 'next/image';

function Loader() {
  return (
    <div style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center' , height: '100vh'}}>
        <Image src={LoaderImg} width={300} height={300}  alt='loader-gif'/>
    </div>
  )
}

export default Loader