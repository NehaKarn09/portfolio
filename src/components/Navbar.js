import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      return (
          <>
              <nav className="bg-black text-white border-gray-200 py-4 shadow dark:bg-gray-900 ">
                  <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                      <Link to="/" className="flex items-center">
                          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Porfolio</span>
                      </Link>
                      <div className="flex items-center lg:order-2 space-x-4">
                          <button
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              aria-controls="mobile-menu-2"
                              aria-expanded={isMenuOpen}>
                              <span className="sr-only">Open main menu</span>
                              <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                              </svg>
                              <svg className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                              </svg>
                          </button>
                      </div>
                      <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                              <li>
                                  <Link to="/" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white">About</Link>
                              </li>
                              <li>
                                  <Link to="/resume" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white">Resume</Link>
                              </li>
                              <li>
                                  <Link to="/projects" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white">Projects</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </>
      );
  };
  
  export default Navbar;