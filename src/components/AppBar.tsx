import { FC } from 'react';
import Link from "next/link";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NetworkSwitcher from './NetworkSwitcher';
import NavElement from './nav-element';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <Image src="/Votely.png" width={40} height={40} className="mr-3" alt="logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <div style={{display:"flex", justifyContent:"center"}}>
              <p className="votely z">Vote.</p>
              <p className="votely x">ly</p>
            </div>
          </span>
        </div>
        <button data-collapse-toggle="navbar-default" type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <div className="flex" id="navbar-default">
          <div>
            <ul
            className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/dashboard"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page">Home</a>
            </li>
            <li>
              <a href="/our_team"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page">Our Team</a>
            </li>
          </ul>
          </div>
          <div>
            <WalletMultiButtonDynamic className='text-black'/>
          </div>
          </div>
        </div>
    </nav>
  );
};
