import axios from 'axios'
import Head from "next/head";
import Image from "next/image";
import { HomeView } from "../views";
import type { NextPage } from "next";
import React, { useState, useEffect } from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { notify } from "../utils/notifications";
const Home: NextPage = (props) => {
  const wallet = useWallet();
  const { connection } = useConnection()
  
  const [formData, setFormData] = useState({
    userOrMail: '',
    signinPassword: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
        handleSubmit(e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
        axios.post('/api/user', formData)
        .then(response => {
          if(response.data.isAllowed){
            window.location.href = '/dashboard';
          }else{
            notify({ type: 'error', message: 'unknown combination' ? `Error:\n unknown combination` : 'error.name' });
            //window.location.reload();
          }
        })
        .catch(error => {
        console.error('Error:', error);
        });
    }
    const gotoSignup = (event) => {
        event.preventDefault()
        window.location.replace('/signup')
    }
  return (
  <>
  
  <Head>
        <title>Login</title>
      </Head>  
  <main className='pt-10'>
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10" style={{paddingTop: "5%", paddingBottom: "0%", paddingLeft: "15%", paddingRight: "0%"}}>
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
              <div className="w-full">
                  <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                      <div className="g-0 lg:flex lg:flex-wrap">
                          <div className="px-4 md:px-0 lg:w-6/12">
                              <div className="md:mx-6 md:p-12">
                                  <div className="text-center">
                                      <Image src="/Votely.png" className="mx-auto w-48" width={200} height={200} alt="logo" />
                                      <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold flex justify-center">
                                          <p className="z">¡Welcome to Vote.</p><p className="x">ly</p><p className='z'>!</p>
                                      </h4>
                                  </div>
                                  <form>
                                      <p className="mb-4"></p>
                                      <div className="relative mb-4">
                                          <input type="email"
                                              className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                              id="userOrMail"
                                              name="userOrMail"
                                              autoComplete="email"
                                              value={formData.userOrMail}
                                              onChange={handleChange}
                                              placeholder="email or username" />
                                      </div>
                                      <div className="relative mb-4">
                                          <input type="password"
                                              className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                              id="signinPassword" 
                                              name="signinPassword" 
                                              value={formData.signinPassword}
                                              onChange={handleChange}
                                              onKeyDown={handleKeyDown}
                                              placeholder="password" />
                                      </div>
                                      <div className="mb-12 pt-1 pb-1 text-center">
                                          <button 
                                              id="loginButton" onClick={handleSubmit} 
                                              className="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase "
                                              type="button">
                                              Sign in
                                          </button>
                                          <a href="#!">Términos y Condiciones</a>
                                      </div>
                                      <div className="flex items-center justify-between pb-6">
                                          <p className="mb-0 mr-2"></p>
                                          <button 
                                              id="signinButton"
                                              type="button"
                                              onClick={gotoSignup}
                                              className="inline-block rounded border-2 border-danger px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700">
                                              Sign up
                                          </button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                          <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                              style={{background: "linear-gradient(#BB8FCE , #1ABC9C )"}}>
                              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                  <h4 className="mb-6 text-xl font-semibold">
                                      Somos más que una compañia,
                                      Somos Seguridad y Confianza.
                                  </h4>
                                  <p className="text-sm" style={{textAlign: "justify"}}>
                                      Nuestra empresa se dedica a hacer que las votaciones sean más seguras y accesibles
                                      gracias a la tecnología BlockChain. Creemos que la transparencia y la confiabilidad
                                      son fundamentales en el proceso de votación, y estamos comprometidos en proporcionar
                                      una solución innovadora para garantizarlo.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  </main>
  </>);
};
export default Home;
