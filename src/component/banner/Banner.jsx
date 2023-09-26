
import { useLoaderData } from 'react-router-dom';
import CardItem from "../cardItem/CardItem";


const Banner = () => {
    const items = useLoaderData()
    console.log(items)
    return (
        <div className=" container mx-auto">
            <div className="banner">
                <div className="banner-text pt-24 pb-8">
                    <h1 className="text-4xl font-bold text-center">I Grow By Helping People In Need</h1>
                </div>
                <div className="banner-input text-center">
                    <input className="border-2 border-l-neutral-700 roun py-2 w-2/6 rounded-lg" type="search" name="" id="" />
                    <button className="btn btn-error text-slate-50"> Search</button>
                </div>
            </div>
            <div className="card container mx-auto grid grid-cols-4 gap-3">
                {
                    items.map(item => <CardItem key={item.id} item={item}></CardItem>)
                }

            </div>

        </div>

    );
};

export default Banner;