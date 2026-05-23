import { useSelector } from 'react-redux';
import type { RootState } from '../features/store';

export default function DashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">Вітаємо, {user?.full_name}!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Оцінки</h2>
          <p className="text-gray-500 mt-1">Переглянути успішність</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Розклад</h2>
          <p className="text-gray-500 mt-1">Розклад занять</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Курси</h2>
          <p className="text-gray-500 mt-1">Мої курси</p>
        </div>
      </div>
    </div>
  );
}
