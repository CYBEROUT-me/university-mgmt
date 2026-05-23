export default function GradesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Оцінки</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Дисципліна</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Оцінка</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Дата</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Математика</td>
              <td className="px-6 py-4 font-semibold text-green-600">92</td>
              <td className="px-6 py-4 text-gray-500">2025-05-10</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Фізика</td>
              <td className="px-6 py-4 font-semibold text-yellow-600">75</td>
              <td className="px-6 py-4 text-gray-500">2025-05-08</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
