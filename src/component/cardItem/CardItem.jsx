
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const CardItem = ({item}) => {
    const {title,img,category,color,backgroundColor,background,id}=item
    return (
        <div>
         <NavLink to={`/donation/${id}`}>
         <div className="card card-compact  bg-base-100 shadow-xl mt-16"style={{backgroundColor}} >
               <img className='w-full rounded-xl h-56' src={img} alt="" />
                <div className='py-3 pl-2'  >
                    <h2 className={`card-title py-2 px-3 rounded-lg w-[110px]`}  style={{color,background}}  >{title}</h2>
                    <h3 className='' style={{color}}>{category} </h3>
                   
                </div>
            </div>

         </NavLink>
        </div>
    );
};
CardItem.propTypes ={
    item:PropTypes.object
}
export default CardItem;