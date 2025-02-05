//src\app\page.tsx
import Image from 'next/image'


export default async function Home() {

  
  return (

    <>
    <div className="flex flex-col justify-center items-center h-screen text-[#c38c3d] font-bold text-[80px]">
      <h1>Furniro - Admin Dashboard</h1>
      <Image
        src="/logo.png"
        alt="Furniro Logo"
        width={100}
        height={100}
>
      </Image>
    </div>


   
    </>
  );
}
