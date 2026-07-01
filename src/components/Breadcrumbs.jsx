import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  // Format URL segment to readable label
  const formatLabel = (segment) => {
    return segment
      .replace(/-/g, ' ')
      .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  };

  return (
    <nav className="flex py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-slate-500 text-xs sm:text-sm font-sans" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-slate-500 hover:text-sky-600 transition-colors"
          >
            <Home className="mr-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="flex items-center">
              <ChevronRight className="h-3 w-3 text-slate-400 mx-1 sm:mx-2" />
              {last ? (
                <span className="text-slate-900 font-medium" aria-current="page">
                  {formatLabel(value)}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-slate-500 hover:text-sky-600 transition-colors"
                >
                  {formatLabel(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
