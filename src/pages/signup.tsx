import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
export default function Signup() {
  const wallet = useWallet();
  const { connection } = useConnection()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    populationRegister: '',
    email: '',
    address: '',
    cellphone: '',
    wallet: '',
    sex: '',
    birthDate: '',
    username: '',
    password: '',
    verifyPassword:''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(formData.password === formData.verifyPassword){
        axios.put('/api/user', formData)
        .then(response => {
        console.log('Response:', response.data);
        })
        .catch(error => {
        console.error('Error:', error);
        });
    }else{
        console.log('No es la contraseña');
    }
  }

    useEffect(() => {
        if (wallet.publicKey) {
            formData.wallet = wallet.publicKey.toBase58()
          console.log(wallet.publicKey.toBase58())
        }
      }, [wallet.publicKey, connection])  
  return (
    <>
        <Head>
            <title>Sign up</title>
        </Head>
        <main >
            <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
                <div className="container h-full p-10" style={{paddingTop: "5%", paddingBottom: "0%", paddingLeft: "15%", paddingRight: "0%"}}>
                    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-1/2">
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="g-0 lg:flex lg:flex-wrap">
                                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto pt-10">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className=''>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                placeholder='First Name'
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                autoComplete="given-name"
                                                className='p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black'
                                            />
                                            </div>
                                            <div className=''>
                                            <input
                                                type="text"
                                                name="lastName"
                                                id="lastName"
                                                placeholder='Last Name'
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                autoComplete="family-name"
                                                className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <input
                                            type="text"
                                            name="populationRegister"
                                            id="populationRegister"
                                            placeholder='Population Register'
                                            value={formData.populationRegister}
                                            onChange={handleChange}
                                            className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            autoComplete="email"
                                            className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            placeholder='Address'
                                            value={formData.address}
                                            onChange={handleChange}
                                            autoComplete="street-address"
                                            className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <input
                                            type="text"
                                            name="cellphone"
                                            id="cellphone"
                                            placeholder='+(lada) phone number'
                                            value={formData.cellphone}
                                            onChange={handleChange}
                                            autoComplete="cellphone"
                                            className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <select
                                            type="text"
                                            name="sex"
                                            id="sex"
                                            value={formData.sex}
                                            onChange={handleChange}
                                            className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            >
                                                <option value="" disabled defaultValue>Select a gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className='mt-4'>
                                            <label htmlFor="birthDate" className="block text-gray-700 mb-2">
                                            Birth Date
                                            </label>
                                            <input
                                            type="date"
                                            id="birthDate"
                                            name="birthDate"
                                            value={formData.birthDate}
                                            onChange={handleChange}
                                            placeholder="Enter birth date"
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        
                                        <div className="mt-4">
                                            <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder='Username'
                                            value={formData.username}
                                            onChange={handleChange}
                                            className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder='Password'
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            />
                                            </div>
                                            <div>
                                            <input
                                                type="password"
                                                name="verifyPassword"
                                                id="verifyPassword"
                                                placeholder='repeat password'
                                                value={formData.verifyPassword}
                                                onChange={handleChange}
                                                className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            />
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4">
                                            <input
                                            type="text"
                                            name="wallet"
                                            id="wallet"
                                            placeholder='Solana wallet'
                                            value={formData.wallet}
                                            onChange={handleChange}
                                            className="p-1 block w-full rounded-sm border border-gray-300 focus:border-indigo-300 bg-gray-100 outline-none ease-linear text-black"
                                            />
                                        </div>
                                        
                                        <div className="mt-4 pb-10 w-full">
                                            <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white">Sign Up</button>
                                        </div>

                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}
