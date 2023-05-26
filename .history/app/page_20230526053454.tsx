import Mailing from "./components/Mailing";


export default function Home() {
  return (
    <main className="flex shadow-cyan-800 bg-red-200 min-h-screen-[50vh] flex-col items-center justify-between p-24">
    <h1 className="font-mono font-extrabold text-2xl h-12">
      Trizzas Cake Newsletter
    </h1> 
    <Mailing/>
    </main>
  )
}
