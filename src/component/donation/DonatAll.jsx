
import { NavLink } from "react-router-dom";

const DonatAll = ({ cardItem }) => {
   
    const { img, price, title, color, category, backgroundColor, background,id } = cardItem
    return (
        <div>
            <div className="relative flex  flex-row rounded-xl  shadow-md" style={{backgroundColor}}>

                <div className="relative m-0 w-2/5  overflow-hidden rounded-xl rounded-r-none">
                    <img src={img} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block  text-base font-semibold uppercase py-2 px-3  w-[110px] rounded-lg" style={{color,background}}>
                       {title}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold  text-blue-gray-900 ">
                       {category}
                    </h4>
                    <h3 className="text-lg font-bold mb-6" style={{color}}>{price}</h3>
                    <NavLink to={`/donation/${id}`} className="py-[5px] px-[8px] text-black " style={{background}}>Viwe Details</NavLink>

                </div>
            </div>
        </div>
    );
};

export default DonatAll;