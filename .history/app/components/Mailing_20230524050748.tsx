"use client"
import React, { FormEvent, useRef, useState } from 'react'

function Mailing() {
    const [input, setInput] = useState("")
    const buttonRef = useRef<HTMLButtonElement>(null)



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }
  return (
    <div>
        <form className="" onSubmit={handleSubmit}>
            <div>
                <input type="text"
                    placeholder='Email..'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                    className="outline-none border-none from-fuchsia-400 "

                 />
                 <button className="cursor-pointer disa bg-zinc-950 p-2 rounded-3xl " type='submit' ref={buttonRef} disabled={!input}    >
                    Subscribe
                 </button>
            </div>

        </form>
    </div>
  )
}

export default Mailing