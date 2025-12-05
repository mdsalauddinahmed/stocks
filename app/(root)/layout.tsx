import { Header } from "@/components/Header"

 function layout({ children: clidren }: { children: React.ReactNode }) {
  return (

    <div>
        <Header />
         <div>
             {clidren}
         </div>
        
        
    </div>
  )
}

export default layout