"use client"



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import { ClerkProvider } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";
import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const pathname = usePathname();

  
  
  
  // const isAdmin = pathname.startsWith("/admin");
  // const isOrders = pathname.startsWith("/orders");
  // const isCustomers = pathname.startsWith("/customers");
  // const isStatistics = pathname.startsWith("/product-data");
  // const isReviews = pathname.startsWith("/reviews");
  

  


  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          
        

       
         <div className="min-h-screen">
              <AdminHeader />
              <div className="flex">
                <AdminSidebar />
                <main className="flex-1 p-8 bg-muted/40">{children}</main>
              </div>
            </div>
      </body>
    </html>
    </ClerkProvider >
  );
}
