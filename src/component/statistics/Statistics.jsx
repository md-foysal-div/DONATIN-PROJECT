import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const COLORS = ['#0088FE', '#FF8042'];
     
    return (
        <div>
         <PieChart width={800} height={700}>
          <Pie
            data={data}
            cx="70%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={100}
            fill="0088FE"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
    );
};

export default Statistics;