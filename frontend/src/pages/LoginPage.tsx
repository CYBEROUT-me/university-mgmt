import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/authSlice';
import { authService } from '../services/authService';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await authService.login(email, password);
      dispatch(loginSuccess(data));
      navigate('/dashboard');
    } catch {
      setError('Невірний email або пароль');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Вхід до системи</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email" placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded p-2 mb-4" required
        />
        <input
          type="password" placeholder="Пароль" value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border rounded p-2 mb-6" required
        />
        <button type="submit" className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700">
          Увійти
        </button>
      </form>
    </div>
  );
}
