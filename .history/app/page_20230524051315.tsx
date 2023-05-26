import Mailing from "./components/Mailing";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="font-mono font-extrabold h-6">
      Trizzas Cake Newsletter
    </h1> 
    <Mailing/>
    </main>
  )
}
