'use client';

import { sidebarLinks } from '../constants'; // Ensure this path is correct or adjust based on your structure
import { cn } from '../lib/utils'; // Ensure this import path is correct
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


type SidebarProps = {
  user: any; // Adjust the type as per your application needs
};

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="w-6 h-6 max-xl:w-4 max-xl:h-4" // Corrected Tailwind CSS classes
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link flex items-center gap-2 p-2 rounded transition', {
                'bg-bank-gradient': isActive,
              })}
            >
              <div className="relative w-6 h-6"> {/* Ensure the parent has a relative position with set dimensions */}
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive,
                  })}
                />
              </div>
              <p className={cn('sidebar-label ml-2', { '!text-white': isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}

  
      </nav>

    
    </section>
  );
};

export default Sidebar;
