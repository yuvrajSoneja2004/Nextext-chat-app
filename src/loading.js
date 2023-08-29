import Image from 'next/image'
import React from 'react';
import Loader from './assets/loader.gif'

function loading() {
  return (
    <Image src={Loader} width={300} height={300} />
  )
}

export default loading