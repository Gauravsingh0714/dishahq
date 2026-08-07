import { useState, useEffect } from 'react';
import { checkHealth } from '../services/api';

const HomePage = () => {
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHealth = async () => {
      try {
        const data = await checkHealth();
        setHealthStatus(data);
      } catch (err) {
        setError(err.message || 'Failed to connect to Disha Backend API');
      } finally {
        setLoading(false);
      }
    };

    getHealth();
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold tracking-wide uppercase">
          Engineering Foundation Ready
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Your Career Direction Starts Here
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          Disha empowers students and professionals to discover, navigate, and achieve their ideal career trajectory.
        </p>
      </section>

      {/* API Health Monitor Card */}
      <section className="max-w-xl mx-auto bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 backdrop-blur shadow-xl">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
          <span>Backend Connection Monitor</span>
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${healthStatus ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${healthStatus ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
          </span>
        </h2>

        {loading && (
          <div className="text-slate-400 text-sm py-4 text-center">Checking API health...</div>
        )}

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-4 rounded-xl text-sm">
            <p className="font-semibold">Backend Unreachable</p>
            <p className="text-xs text-rose-400 mt-1">{error}</p>
          </div>
        )}

        {healthStatus && (
          <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-sm font-mono">
            <div className="flex justify-between">
              <span className="text-slate-500">Status:</span>
              <span className="text-emerald-400 font-semibold">{healthStatus.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Service:</span>
              <span className="text-slate-200">{healthStatus.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Environment:</span>
              <span className="text-indigo-400">{healthStatus.environment}</span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
