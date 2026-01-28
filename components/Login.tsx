
import React, { useState } from 'react';
import { FlaskConical, Lock, User, ArrowRight } from 'lucide-react';

export const Login: React.FC<{ onLogin: (user: string) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="p-8 bg-gray-800 text-white flex flex-col items-center text-center">
          <div className="bg-teal-500 p-4 rounded-2xl mb-4 shadow-lg shadow-teal-500/30">
            <FlaskConical size={40} />
          </div>
          <h1 className="text-2xl font-bold">Equipment Visualizer</h1>
          <p className="text-gray-400 mt-1">Equipment Parameter Analytics</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-[0.98]"
          >
            <span>Login</span>
            <ArrowRight size={20} />
          </button>

          <p className="text-center text-xs text-gray-400">
            Secure enterprise access protocol enabled. 
            <br />Demo: Admin / password
          </p>
        </form>
      </div>
    </div>
  );
};
