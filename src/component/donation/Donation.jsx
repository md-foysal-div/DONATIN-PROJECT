
import { useLoaderData } from 'react-router-dom';
import DonatinoItems from './DonatinoItems';
const Donation = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <>
        {
            
            data.map(data =><DonatinoItems key={data.id} data={data}></DonatinoItems>)
        }
        </>
    );
};

export default Donation;