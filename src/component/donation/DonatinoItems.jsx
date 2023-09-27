import { useEffect, useState } from "react";
import swal from 'sweetalert';
import DonatAll from "./DonatAll";


const DonatinoItems = () => {

    const [donats, setDonats] = useState([])
    const [notFount, setFound] = useState()
    const [isShow, setShow] = useState(false)
    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('donate'))
        if (local) {

            setDonats(local)
        }
        else {
            swal({
                title: "NO data found !!",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            setFound('no items found')
        }

    }, [])
  const showItem = (props)=>{
    setShow(props)
  }
    return (
        <div className="container mx-auto mt-20">
            {
                notFount ? <p className="text-2xl text-center mt-20">{notFount}</p> : <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5  ">
                    {
                      isShow ?   donats.map(cardItem => <DonatAll key={cardItem.id} cardItem={cardItem}></DonatAll>):
                      donats.slice(0,4).map(cardItem => <DonatAll key={cardItem.id} cardItem={cardItem}></DonatAll>)
                    }
                </div>
            }
            <div className="flex justify-center mt-10">
                {
                    donats.length > 4 && <button className="btn btn-error flex justify-center"onClick={() =>showItem(!isShow)}>show more</button>
                }
            </div>

        </div>
    );
};

export default DonatinoItems;
