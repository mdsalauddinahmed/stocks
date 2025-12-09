import { Header } from "@/components/Header"

 function layout({ children: clidren }: { children: React.ReactNode }) {
  return (

    <main className="min-h-screen text-gray-400">
        <Header />
         <div className="container py-10">
             {clidren}
         </div>
        
        
    </main>
  )
}

export default layout