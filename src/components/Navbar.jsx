import React, { useState,useEffect } from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'
const Navbar = () => {
          const [navState , setNavState] =useState(false);
          const onNavScroll = () =>{
                    if(window.screenY >30){
                              setNavState(true)
                    }else{
                              setNavState(false);
                    }
          }

          useEffect(() => {
            first
          
            return () => {
              second
            }
          }, [third])
          
  return (
   <>
   <header className={`absolute top-7 left-0 right-0 opacity-100 z-50`}>
          <nav className='flex items-center justify-between nike-container'>
                    <div className='flex items-center '>
                              <img
                              src={logo}
                              alt='logo/img'
                              className='w-16 h-auto'
                              />
                              </div>
                              <div>
                                        <ul className='flex items-center justify-center gap-2'>
                                                  <li className='grid items-center'>
<MagnifyingGlassIcon className='icon-style'> </MagnifyingGlassIcon>
                                                  </li>
                                                  <li className='grid items-center'>
                                                            <HeartIcon className='icon-style'/>
                                                  </li>
                                                  <li className='grid items-center'>
                                                            <button type='button' className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                                                      <ShoppingBagIcon className='icon-style'/>
                                                                      <div className={`absolute top-4 right-0 bg-white text-slate-900 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] loading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}>0</div>
                                                            </button>
                                                  </li>
                                        </ul>
                              </div>
                    
          </nav>
   </header>
   </>
  )
}

export default Navbar