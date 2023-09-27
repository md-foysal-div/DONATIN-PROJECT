
// import { stringify } from 'postcss';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Donation = () => {
    const [item, setItem] = useState({})
    const { color, img, title, discription,id } = item
    const { donationid } = useParams()
    const data = useLoaderData()

    useEffect(() => {
        const find = data?.find(dataItem => dataItem.id === donationid)
        setItem(find)

    }, [data, donationid])

    
    // console.log(donationAdd)
    
    const handelAdd = () => {
        const donationAdd = []
        const myItem = JSON.parse(localStorage.getItem('donate'))
       
        if(!myItem){
            donationAdd.push(item)
            localStorage.setItem('donate',JSON.stringify(donationAdd))

            swal("Good job!", "Added the item!", "success");
            console.log('hello i am here')
        }
        else{
           const findItem= myItem.find(item =>item.id === id)
   
           if(!findItem){
               donationAdd.push(...myItem,item)
               localStorage.setItem('donate',JSON.stringify(donationAdd))
            swal("Good job!", "Added the item!", "success");
        }
        else{
            swal({
                title: "already added !!",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
            //  
           }
        }
    }
    return (
        <>
            <div className="container mx-auto mb-20">
                <div className="donation-item">
                    <div className="donation-img relative">
                        <img className="w-full h-[500px]" src={img} alt="" />
                        <div className=" flex items-center  img-button w-full h-28 bg-black opacity-70 absolute bottom-0 right-0">
                           <button onClick={handelAdd} className="btn ml-6  border-none text-white" style={{ color }}>{item.price}</button>
                        </div>
                    </div>
                    <div className="discription">
                        <h2 className="text-4xl font-bold my-9">{title}</h2>
                        <p className="text-lg font-medium ">{discription}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Donation;