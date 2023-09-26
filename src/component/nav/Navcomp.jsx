import './nav.css'
import Banner from "../banner/Banner";
import { useLoaderData } from 'react-router-dom';
import CardItem from "../cardItem/CardItem";
const Navcomp = () => {
    const items = useLoaderData()
    console.log(items)
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
                            <li><a href="">Home</a></li>
                            <li><a href="">Donation</a></li>
                            <li><a href="">Statistic</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Banner></Banner>
            <div className="card container mx-auto grid grid-cols-4 gap-3">
                {
                    items.map(item => <CardItem key={item.id} item={item}></CardItem>)
                }
            </div>

        </div>
    );
};

export default Navcomp;