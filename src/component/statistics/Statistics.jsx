import { PieChart, Pie, Cell } from 'recharts';
import './stat.css'
import { useEffect, useState } from 'react';
const Statistics = () => {
    const [pai, setPai] = useState()
    const [localPai, setLocalsetPai] = useState()
    const [noData, setNodata] = useState()

    useEffect(() => {
        const totalData = 12
        const local = JSON.parse(localStorage.getItem('donate'))
        if (local) {
            const ff = local.length * 100 / totalData;
            setPai(ff)
            setLocalsetPai(100 - ff)
        }
        else {
            setNodata('NO DATA IN HERE')
        }

    }, [pai, localPai])

    const data = [
        console.log(pai),
        { name: 'Group A', value: pai },
        { name: 'Group B', value: localPai },

    ];

    const COLORS = ['#0088FE', '#FF8042'];

    return (
        <div className='container mx-auto'>
            <PieChart width={1100} height={500}>
                <Pie
                    data={data}
                    cx="60%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={200}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (


                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            {
                localPai? <div className="color-div flex justify-center">
                    <div className='flex items-center gap-1'>
                        <p>Your donation</p>
                        <span className='color-one'></span>
                    </div>

                    <div className='flex items-center gap-1'>
                    <p>Total donation</p>
                        <span className='color-two'></span>
                    </div>
                    
                </div>:<h1 className='text-center -mt-80'>{noData}</h1>
        }
        </div>
    );
};

export default Statistics;