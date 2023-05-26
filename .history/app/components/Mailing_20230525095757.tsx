"use client"
import React, { FormEvent, useRef, useState } from 'react'

function Mailing() {
    const [input, setInput] = useState("")
   



    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = input
        
        const res = await fetch("/api/mailSub", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({email}),
          
        })
        const data = await res.json()
        



    }
  return (
    <div>
        <form className="" onSubmit={handleSubmit}>
            <div>
                <input type="email"
                    placeholder='Email..'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                    className="outline-none text-white bg-purple-700 h-14 p-2 rounded-lg mr-10 border-none from-fuchsia-400 "

                 />
                 <button className="cursor-pointer text-white bg-zinc-950 p-2 rounded-3xl " type='submit'  disabled={!input}    >
                    Subscribe
                 </button>
            </div>

        </form>
    </div>
  )
}

export default Mailing