import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-900/60 via-slate-800 to-slate-900 border border-slate-700/80 rounded-3xl p-8 backdrop-blur shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold uppercase tracking-wider">
            User Dashboard
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Welcome back, {user?.fullName || 'Student'}!
          </h1>
          <p className="text-slate-400 text-sm">
            Manage your profile, track your career roadmap, and explore guidance tools.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-rose-600/90 text-slate-200 hover:text-white text-sm font-semibold transition shadow-md border border-slate-600 hover:border-rose-500"
        >
          Sign Out
        </button>
      </div>

      {/* User Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 backdrop-blur space-y-4">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Profile Info</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-slate-500 text-xs block">Full Name</span>
              <span className="text-slate-100 font-medium">{user?.fullName}</span>
            </div>
            <div>
              <span className="text-slate-500 text-xs block">Email Address</span>
              <span className="text-slate-100 font-medium">{user?.email}</span>
            </div>
            <div>
              <span className="text-slate-500 text-xs block">Account Role</span>
              <span className="inline-block px-2.5 py-0.5 mt-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase border border-indigo-500/20">
                {user?.role || 'student'}
              </span>
            </div>
          </div>
        </div>

        {/* Quiz Status Card */}
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 backdrop-blur space-y-4">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Career Assessment</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-slate-500 text-xs block">Quiz Status</span>
              {user?.isQuizCompleted ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 mt-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                  ✓ Completed
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 mt-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
                  ⏳ Pending (Phase D)
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 pt-2">
              Career assessment quizzes will be activated during Phase D release.
            </p>
          </div>
        </div>

        {/* Authentication Status Card */}
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 backdrop-blur space-y-4">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Security & Session</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-slate-500 text-xs block">JWT Token Status</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 mt-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
                🔒 Valid Bearer Token Active
              </span>
            </div>
            <div>
              <span className="text-slate-500 text-xs block">Session Security</span>
              <span className="text-slate-300 text-xs">Passwords hashed with bcryptjs salt rounds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Roadmap Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white tracking-tight">Upcoming Platform Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2 opacity-80">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">Phase C</span>
            <h3 className="text-base font-semibold text-white">Career Database & Seeding</h3>
            <p className="text-xs text-slate-400">Curated career pathways, job market demands, and skill taxonomies.</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2 opacity-80">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">Phase D</span>
            <h3 className="text-base font-semibold text-white">Interactive Career Quiz</h3>
            <p className="text-xs text-slate-400">Algorithmic skill discovery to recommend personalized career matches.</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2 opacity-80">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">Phase E</span>
            <h3 className="text-base font-semibold text-white">Roadmap Builder & Progress</h3>
            <p className="text-xs text-slate-400">Step-by-step milestone planning and skill achievement tracking.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
