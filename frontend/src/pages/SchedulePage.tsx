export default function SchedulePage() {
  const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П'ятниця'];
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Розклад занять</h1>
      <div className="grid grid-cols-5 gap-4">
        {days.map(day => (
          <div key={day} className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-center mb-3 text-blue-700">{day}</h2>
            <div className="text-sm text-gray-600">
              <p>08:00 — Лекція</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
