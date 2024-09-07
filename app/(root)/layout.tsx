import Sidebar from "../../components/Sidebar";
import Image from 'next/image';
import MobileNav from "../../components/MobileNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const loggedIn = { firstName: 'Adrian', lastName: 'JSM' };
  
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col w-full">
        <header className="flex items-center justify-between p-4">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <MobileNav user={loggedIn} />
        </header>
        {children}
      </div>
    </main>
  );
}
