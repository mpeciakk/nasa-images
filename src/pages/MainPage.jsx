import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import axios from 'axios'

const API_URL = 'https://images-api.nasa.gov'

const MainPage = () => {
    const [images, setImages] = useState([])

    const search = (value) => {
        axios.get(`${API_URL}/search?q=${value}`).then((response) => {
            setImages(response.data.collection.items)
        })
    }

    return (
        <div>
            <SearchBar updateQuery={search} />

            <div className='grid grid-rows-4 grid-cols-4 gap-4 p-16'>
                {images
                    .filter((image) => !image.href.includes('audio'))
                    .map((image, i) => (
                        <Card
                            key={i}
                            title={image.data[0].title}
                            src={image.links[0].href}
                        />
                    ))}
            </div>
        </div>
    )
}

export default MainPage
