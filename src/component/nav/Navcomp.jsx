import './nav.css'
import { NavLink, Outlet,} from 'react-router-dom';
const Navcomp = () => {
    
    return (
        <div className="navbg">
            <nav className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className=" text-xl">
                            <img src="/src/Resources/Logo.png" alt="" />
                        </a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 flex">
                           <NavLink to='/' className='mr-4'>navber</NavLink>
                           <NavLink to='/donatedItem' className='mr-4'>Donation</NavLink>
                           <NavLink to='/Statistics' >Statistics</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
     
        </div>
    );
};

export default Navcomp;