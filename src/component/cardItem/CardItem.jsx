
import PropTypes from 'prop-types';
const CardItem = ({item}) => {
    const {title,img,category,titlebackgroundcolor,textcolor,backgroundcolor}=item
    console.log(textcolor)
    
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mt-16">
               <img className='w-full rounded-xl h-56' src={img} alt="" />
                <div className={`card-body ${textcolor}`}>
                    <h2 className={`card-title py-2 px-3 00  w-[110px] text-[${textcolor}]`} >{title}</h2>
                    <h3 className={`${titlebackgroundcolor}`}>{category} </h3>
                   
                </div>
            </div>
        </div>
    );
};
CardItem.propTypes ={
    item:PropTypes.object
}
export default CardItem;