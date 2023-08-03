import clsx from 'clsx';
import { Link } from 'react-router-dom';

export const TabNavItem = ({
  children,
  href,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      to={href}
      className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
        'bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white':
          !isActive,
        'bg-vercel-blue text-white': isActive,
      })}
    >
      {children}
    </Link>
  );
};