import React from 'react';
import Image from 'next/image';
import {MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            {/*Left*/}
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image src="https://links.papareact.com/f90"
                width={150}
                height={40}
                objectFit="contain"
                className='cursor-pointer'/>
            </div>
            <div className='items-center corsor-pointer h-10 rounded-md flex-grow hidden sm:flex bg-yellow-400 hover:bg-yellow-500'>
                <input className='p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4 flex-shrink' type='text'/>
               <SearchIcon className='h-12 p-4 cursor-pointer'/>
            </div>
            {/*Right*/}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div className='link'>
                    <p>Hey Nova</p>
                    <p className=' font-extrabold md:text-sm'>Account & lists</p>
                </div>
                <div className='link'>
                    <p>Returns</p>
                    <p className=' font-extrabold md:text-sm'>& orders</p>
                </div>
                <div className='relative link flex items-center'>
                    <span className='absolute top-0 right-10 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
                    <ShoppingCartIcon className='h-10'/>
                    <p className=' font-extrabold md:text-sm'>Basket</p>
                </div>
            </div>
        </div>
        {/*botton top nav bar*/}
        <div className='flex items-center space-x-5 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
            <p className='link flex items-center'>
                <MenuIcon className='mr-1 h-6'/>    
            </p>
            <p className='link'>All</p>
            <p className='link'>Prime Video</p>
            <p className='link'>TaoTao Business</p>
            <p className='link'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Groceries</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header
