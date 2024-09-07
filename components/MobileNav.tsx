'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";  // Ensure this path is correct and components are exported
import { sidebarLinks } from "../constants"; // Verify the correct path and export
import { cn } from "@/lib/utils";// Verify the correct path and export
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  user: any; // Adjust type as needed
}

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2">
            <Image
              src="/icons/hamburger.svg"
              width={30}
              height={30}
              alt="menu"
              className="cursor-pointer"
            />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>
          <div className="mobilenav-sheet">
            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
              {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                return (
                  <SheetClose asChild key={item.route}>
                    <Link
                      href={item.route}
                      className={cn('mobilenav-sheet_close w-full', 
                        { 'bg-bank-gradient': isActive })}
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({ 'brightness-[3] invert-0': isActive })}
                        />
                        <p className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}>
                          {item.label}
                        </p>
                      </div>
                    </Link>
                  </SheetClose>
                );
              })}
              {/* Display user info or actions related to user */}
              <div className="mt-4 px-4">
                <p className="text-black">User: {user?.name || "Guest"}</p>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
