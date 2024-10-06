import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import MainLayout from '@/Layouts/MainLayout';  // Ensure correct path

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Result {
  id: number;
  exam: string;
  result: number;
  student_name: string; // Student name added here
}

interface ResultsPageProps {
  allResults: Result[];  // An array of all exam results
}

function ResultsPage({ allResults }: ResultsPageProps) {
  // State to track the selected exam
  const [selectedExam, setSelectedExam] = useState('');

  // Get a list of unique exam names for the filter dropdown
  const uniqueExams = Array.from(new Set(allResults.map(result => result.exam)));

  // Filter results based on the selected exam
  const filteredResults = selectedExam
    ? allResults.filter(result => result.exam === selectedExam)
    : allResults;

  // Data for the bar chart
  const chartData = {
    labels: filteredResults.map((item) => item.student_name),  // Show student names in the chart
    datasets: [
      {
        label: 'Marks',
        data: filteredResults.map((item) => item.result),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const handleExamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExam(event.target.value);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Results</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Filter Dropdown and Table */}
        <div>
          <div className="mb-4">
            <select
              value={selectedExam}
              onChange={handleExamChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="">Filter by Exam</option>
              {uniqueExams.map((exam, index) => (
                <option key={index} value={exam}>
                  {exam}
                </option>
              ))}
            </select>
          </div>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Student Name</th>
              <th className="border border-gray-300 p-2">Exam</th>
              <th className="border border-gray-300 p-2">Result</th>
            </tr>
            </thead>
            <tbody>
            {filteredResults.map((result) => (
              <tr key={result.id} className="text-center">
                <td className="border border-gray-300 p-2">{result.id}</td>
                <td className="border border-gray-300 p-2">{result.student_name}</td> {/* Display student name */}
                <td className="border border-gray-300 p-2">{result.exam}</td>
                <td className="border border-gray-300 p-2">{result.result}</td>
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
                title: { display: true, text: `Marks for ${selectedExam || 'All Exams'}` },
              },
              scales: {
                x: { title: { display: true, text: 'Students' } },
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
