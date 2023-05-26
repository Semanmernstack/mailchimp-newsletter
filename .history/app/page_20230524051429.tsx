import Mailing from "./components/Mailing";


export default function Home() {
  return (
    <main className="flex bg-red-200 min-h-screen flex-col items-center justify-between p-24">
    <h1 className="font-mono font-extrabold text-2xl h-12">
      Trizzas Cake Newsletter
    </h1> 
    <Mailing/>
    </main>
  )
}
