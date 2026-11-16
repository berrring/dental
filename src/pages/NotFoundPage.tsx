import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-36 px-4 text-center max-w-xl mx-auto space-y-6">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#819584]">
        Error 404 • Page Not Found
      </span>
      <h1 className="text-3xl sm:text-4xl font-normal text-[#1C201E]">
        The page you are looking for has shifted.
      </h1>
      <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
        We could not locate this URL. Please return to the studio overview or explore our treatment disciplines.
      </p>
      <div className="pt-4 flex items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium px-5 py-3 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-colors rounded-sm"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/treatments"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium px-5 py-3 bg-[#F3F1EA] text-[#1C201E] border border-[#E8E5DD] hover:border-[#1C201E] transition-colors rounded-sm"
        >
          <span>All Treatments</span>
        </Link>
      </div>
    </div>
  );
};
