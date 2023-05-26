"use client"
import React, { FormEvent, useRef, useState } from 'react'

function Mailing() {
    const [input, setInput] = useState("")
    const [mailError, setMailError] = useState ("")
    const [mailOk, setMailOk] = useState<MembersSuccessResponse>()
    
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
        
        const data = await res.json()
        if (data.error) {
            setMailError('Hey you already subscribe to trizzas cake')
            
            return
        }
        setMailOk(data.res)
        setInput("")
        
    }
  return (
    <div className=" flex flex-col items-center justify-center h-min-screen">
        <form className="flex sm:flex-col " onSubmit={handleSubmit}>
            <div>
                <input type="email"
                    placeholder='Email..'
                    value={input}

                    onChange={(e) => setInput(e.target.value)}
                    required
                    className="outline-none text-white bg-purple-700 h-12 mb-3 p-2 rounded-lg mr-10 border-none from-fuchsia-400 "

                 />
                 <button className="cursor-pointer mt-3 text-white bg-zinc-950 p-2  rounded-xl md:rounded-3xl " type='submit' disabled={!input}    >
                    Subscribe
                 </button>
            </div>
            <div>
           
               {mailOk  ? (<p>Subscribe</p>):(<p>You have already Subscribe</p>) }
            </div>

        </form>
       
       
        
    </div>
  )
}

export default Mailing