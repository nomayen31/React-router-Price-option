import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/user/:id', name: 'UserDetail', id:5 },
        { path: '*', name: 'NotFound', id: 6 },
      ];
      
    return (
        <nav>
            <div className='md:hidden' onClick={()=>setOpen(!open)}>
                {
                    open === true ? <AiFillCloseCircle></AiFillCloseCircle> : <AiOutlineMenu></AiOutlineMenu>
                }
              </div>
           <ul className={`md:flex duration-1000 absolute
           ${open ?  'top-16' : 'top-60'}
           bg-yellow-600 px-6 shadow-lg`}>
           {
                routes.map(route =><Link  key={route.id}
                route={route}
                ></Link> )
            }
           </ul>
        </nav>
    ); 
};

export default NavBar;