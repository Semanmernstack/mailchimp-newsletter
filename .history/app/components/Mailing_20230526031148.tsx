"use client"
import React, { FormEvent, useRef, useState } from 'react'

function Mailing() {
    const [input, setInput] = useState("")
    const [mailError, setMailError] = useState<string>("")
    const [mailOk, setMailOk] = React.useState<boolean>(true)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = input;
        
        const res = await fetch("/api/mailSub", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({email}),
          
        })
        setInput("")
        const data = await res.json()
        if (data.error) {
            setMailError('Hey you already subscribe to trizzas cake')
            
            return
        }
        setMailOk(data.res)
    }
  return (
    <div className=" flex flex-col items-center justify-center h-min-screen">
        <form className="" onSubmit={handleSubmit}>
            <div>
                <input type="email"
                    placeholder='Email..'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                    className="outline-none text-white bg-purple-700 h-12 mb-3 p-2 rounded-lg mr-10 border-none from-fuchsia-400 "

                 />
                 <button className="cursor-pointer mt-3 text-white bg-zinc-950 p-2 rounded-3xl " type='submit'  disabled={!input}    >
                    Subscribe
                 </button>
            </div>

        </form>
        <div>
           
            

        </div>
       
        
    </div>
  )
}

export default Mailing