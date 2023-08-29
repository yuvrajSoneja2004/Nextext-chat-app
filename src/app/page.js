'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';

export default function Home() {
  // for navigation
  const router = useRouter();

  // if authinticated then there will be a data in localstorage ex: false
  let isAlreadyAuthinticated = localStorage.getItem("user-data");
  

  // function that will decide weather user should be redirected to register page or chat page based on auth
  const checkAuth = () => {
      if(isAlreadyAuthinticated != null){
        router.push("/");
      } else {
        router.push("/register");
      }  
  }


  // if the user is authinticated then he/she will be redirected to chat page
  useEffect(() => {
    checkAuth()
  } , [isAlreadyAuthinticated]);
  return (
    <main className={styles.main}>
     {
      isAlreadyAuthinticated != null ? <h1>Auth man</h1> : <Loader />
     }
    </main>
  )
}
