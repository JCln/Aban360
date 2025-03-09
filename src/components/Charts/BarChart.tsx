import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const data: ChartData<'bar'> = {
    labels: ['1402/09/16', '1402/12/02', '1403/02/18', '1403/06/07', '1403/07/15', '1402/10/25', '1403/01/11'],
    datasets: [
      {
        label: '',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return;
          }

          const gradient = ctx.createLinearGradient(0, 0, chartArea.width, chartArea.height);
          gradient.addColorStop(0, 'rgba(0, 123, 255, 0.5)');
          gradient.addColorStop(1, 'rgba(0, 123, 255, 1)');

          return gradient;
        },
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
        borderRadius: 10,
      }
    ]
  };

  const options: ChartOptions<'bar'> = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(128, 128, 128, 0.2)' // Light gray color for horizontal lines
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: 'RaviRegular',
            size: 12
          }

        },
      }
    },

    plugins: {
      legend: {
        display: false
      },
      // title: {
      //   display: false,
      //   text: '',
      //   font: {
      //     family: 'Roboto', 
      //     size: 18
      //   }
      // }
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
