import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
      <div className="text-7xl font-extrabold text-indigo-500 tracking-wider">404</div>
      <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
      <p className="text-slate-400 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/30"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
