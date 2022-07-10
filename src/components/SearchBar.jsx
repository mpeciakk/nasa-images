import React, { useState } from 'react'

const SearchBar = ({ updateQuery }) => {
    const [cooldown, setCooldown] = useState(0)

    const handleInput = (event) => {
        const text = event.target.value

        if (cooldown) {
            clearTimeout(cooldown)
        }

        setCooldown(
            setTimeout(() => {
                updateQuery(text)
            }, 300),
        )
    }

    return (
        <div className="w-full h-16 grid grid-cols-3 bg-slate-600">
            <h3 className="text-white text-xl font-medium ml-4 flex items-center">nasa-images</h3>
            <div className="flex justify-center items-center">
                <input
                    type="text"
                    className="w-1/2 shadow appearance-none border py-1 px-3 transition duration-500 ease-in-out focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Search images..."
                    onChange={handleInput}
                />
            </div>
            <div />
        </div>
    )
}

export default SearchBar
