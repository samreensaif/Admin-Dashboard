// src/app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-[#c38c3d] font-bold text-center px-4">
      <h1 className="text-[40px] xsm:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]">
        Furniro - Admin Dashboard
      </h1>
      <Image
        src="/logo.png"
        alt="Furniro Logo"
        width={100}
        height={100}
        className="mt-4 sm:mt-6 md:mt-8 lg:mt-10"
      />
    </div>
  );
}
