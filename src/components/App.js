// create your App component here
import React, { useEffect, useState} from "react";

function App() {
    const [images, setImage] = useState("")
    const [isLoaded, setLoading] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                setImage(data.message)
                setLoading(true)
            })
    }, [])

    if(!isLoaded) return <p>Loading...</p>
    return (
        <div>
            <img src={images} alt="A Random Dog" />
        </div>
    )
}

export default App