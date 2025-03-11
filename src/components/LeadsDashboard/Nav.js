// import React from 'react';
// import './Sidebar.css';
// // import { BellIcon, CogIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid';

// function Nav({ Toggle }) {
//     return (
//         <header className='container-fluid '>
//             {/* <div className="container mx-auto flex justify-between items-center"> */}
                
//                 <div className="flex space-x-4">
//                     <div className=" container-fluid flex items-center bg-white ">
//                     <nav className='navbar navbar-expand-sm'>
//             <a className='navbar-brand bi bi-justify-left fs-5 ' onClick={Toggle}></a>
//             {/* <button className='navbar-toggler d-lg-none' type='button' data-bs-toggle='collapse' data-bs-target="#navbarToggleExternalContent" aria-expanded='false'  aria-controls="navbarToggleExternalContent" aria-label='Toggle navigation'>
//             <i className=''></i>
//             </button> */}
//             <div className='collapse navbar-collapse' id='collasibleNavId'>

//                 <form className='d-flex my-2 my-lg-0'>
//                     <input className='form-control me-lg-8 ' type='text' placeholder='Serach here' />
//                     <button className='btn bg-primary my-2 my-sm-0 text-white' type='submit'>Search</button>
//                 </form>
//                   {/* <BellIcon className="text-white w-6 h-6" /> */}
//                     {/* <UserCircleIcon className="text-white w-6 h-6" />
//                     <CogIcon className="text-white w-6 h-6" /> */}
//             </div>

//         </nav>
   
                    
//                 </div>
//             </div>
          
//         </header>
//     )
// }

// export default Nav;
import React from 'react';

function Nav({ Toggle }) {
    return (
        <div className="bg-white shadow">
            <div className="container ">
                <div className="flex justify-between items-center py-4 px-2">
                <button className="text-gray-500 hover:text-gray-600" onClick={Toggle}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                   

                    
                </div>
            </div>
        </div>
    );
}

export default Nav;

