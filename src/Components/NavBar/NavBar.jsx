import React from 'react';
import Link from '../Link/Link';

const NavBar = () => {
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
           <ul className='md:flex'>
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