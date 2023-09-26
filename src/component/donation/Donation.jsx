
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import DonatinoItems from './DonatinoItems';
const Donation = () => {
    const [item ,setItem]= useState({})
    const {donationid} =useParams()
    const data = useLoaderData()
 
    useEffect(() =>{
        const find = data?.find(dataItem => dataItem.id === donationid)
        setItem(find)
        
    },[data, donationid])
    console.log(item)

    return (
        <>
          <div className="container mx-auto mb-20">
                <div className="donation-item">
                    <div className="donation-img relative">
                        <img className="w-full h-[500px]" src={item.img} alt="" />
                        <div className=" flex items-center  img-button w-full h-28 bg-black opacity-70 absolute bottom-0 right-0">
                            <button className="btn ml-6 bg-red-800  border-none text-white">{item.price}</button>
                        </div>
                    </div>
                    <div className="discription">
                        <h2 className="text-4xl font-bold my-9">{item.title}</h2>
                        <p className="text-lg font-medium ">{item.discription}</p>
                    </div>
                </div>
            </div>
        {/* {
            
            data.map(data =><DonatinoItems key={data.id} data={data}></DonatinoItems>)
        } */}
        <h1>mobile</h1>
        </>
    );
};

export default Donation;