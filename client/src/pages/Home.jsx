import { useState } from "react"

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Youth x Hackathon Website</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    this is stuff
                </p>
            </div>
        </>
    )
}

export default Home
