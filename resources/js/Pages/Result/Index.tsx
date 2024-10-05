import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import MainLayout from '@/Layouts/MainLayout';  // Ensure correct path

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ResultsPage() {
  // Sample data for the table
  const [results] = useState([
    { id: 1, exam: 'Exam 1', result: 80, rank: 5 },
    { id: 2, exam: 'Exam 2', result: 70, rank: 10 },
    { id: 3, exam: 'Exam 3', result: 60, rank: 15 },
  ]);

  // Data for the bar chart
  const chartData = {
    labels: results.map((item) => item.exam),
    datasets: [
      {
        label: 'Marks',
        data: results.map((item) => item.result),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Results</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Table */}
        <div>
          <div className="mb-4">
            <select className="p-2 border border-gray-300 rounded-md">
              <option value="">Filter Subject</option>
              <option value="subject1">Subject 1</option>
              <option value="subject2">Subject 2</option>
            </select>
          </div>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Exam</th>
              <th className="border border-gray-300 p-2">Result</th>
              <th className="border border-gray-300 p-2">Rank</th>
            </tr>
            </thead>
            <tbody>
            {results.map((result) => (
              <tr key={result.id} className="text-center">
                <td className="border border-gray-300 p-2">{result.id}</td>
                <td className="border border-gray-300 p-2">{result.exam}</td>
                <td className="border border-gray-300 p-2">{result.result}</td>
                <td className="border border-gray-300 p-2">{result.rank}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Right Section: Chart */}
        <div>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
                title: { display: true, text: 'Marks vs Exams' },
              },
              scales: {
                x: { title: { display: true, text: 'Exams' } },
                y: { title: { display: true, text: 'Marks' }, min: 0, max: 100 },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Use the MainLayout for the ResultsPage
ResultsPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Results" children={page} />
);

export default ResultsPage;
