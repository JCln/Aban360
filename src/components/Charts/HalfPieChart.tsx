import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { icons } from '../../components/Icons/Icons';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const HalfPieChart: React.FC = () => {
  const data: ChartData<'doughnut'> = {
    labels: ['0-10', '', '', '', '', '', '', '', '', '', '10-20', '', '', '', '', '', '', '', '', '', '20-30', '', '', '', '', '', '', '', '', '', '30-40'],
    datasets: [
      {
        label: '',
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: [
          '#5DD15D', '#5DD15D', '#5DD15D', '#5DD15D', '#5DD15D', '#5DD15D', '#5DD15D', '#5DD15D', '#5DD15D', '#5DD15D',  // Green for 0-10
          '#FFCC00', '#FFCC00', '#FFCC00', '#FFCC00', '#FFCC00', '#FFCC00', '#FFCC00', '#FFCC00', '#FFCC00', '#FFCC00',  // Yellow for 10-20
          '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212',  // Red for 20-30
          '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212', '#E72212',  // Red for 30-40
        ],
        borderColor: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        borderWidth: 3,
        borderRadius: 20,  // Add border radius
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    rotation: -90,
    circumference: 180,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const ranges = ['0-10', '10-20', '20-30', '30-40'];
            const index = Math.floor(context.dataIndex / 10);
            return `${ranges[index]}: ${context.raw}`;
          },
        },
      },
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end',
        color: 'black',
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: function (value, context) {
          const ranges = ['10', '20', '30', '40'];
          const index = [9, 19, 29, 39].indexOf(context.dataIndex);
          return index >= 0 ? ranges[index] : '';
        },
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center -mt-8 "style={{ height: '180px' }}>
     
    <div className="relative mx-auto -top-10 p-4 w-full sm:w-3/4 md:w-/2 lg:w-2/3 xl:w-3/4">
      <Doughnut data={data} options={options} />
      <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '45%' }}>
        <img src={icons.pointer} alt="Pointer Icon" />
      </div>
    </div>

      <div className="flex justify-center relative" style={{ top: '-100px' }} >
        <div className="flex items-center mr-1">
          <div className="w-4 h-4 bg-green-900"></div>
          <span className='text-10'>خوش مصرف</span>
        </div>
        <div className="flex items-center mr-1">
          <div className="w-3 h-3 bg-green-500"></div>
          <span className='text-10'>کم مصرف</span>
        </div>
        <div className="flex items-center mr-2">
          <div className="w-3 h-3 bg-yellow-500"></div>
          <span className='text-10'>پر مصرف</span>
        </div>
        <div className="flex items-center mr-2">
          <div className="w-3 h-3 bg-red "></div>
          <span className='text-10'>بد مصرف</span>
        </div>
      </div>
    </div>
  );
};

export default HalfPieChart;
