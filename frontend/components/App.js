import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = 'SBns2vnidYwZuWpU63xvghIGnOjVad7FBrHGEB3D'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // fetchPhoto()
    setApod([{
      "copyright": "\nN. D. Liao\n",
      "date": "2024-03-04",
      "explanation": "What's happening across that field?  Pictured here are not auroras but nearby light pillars, a phenomenon typically much closer.   In most places on Earth, a lucky viewer can see a Sun pillar, a column of light appearing to extend up from the Sun caused by flat fluttering ice-crystals reflecting sunlight from the upper atmosphere.  Usually, these ice crystals evaporate before reaching the ground.  During freezing temperatures, however, flat fluttering ice crystals may form near the ground in a f...",
      "hdurl": "https://apod.nasa.gov/apod/image/2403/PillarsMongolia_Liao_6240.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Light Pillars Over Inner Mongolia",
      "url": "https://apod.nasa.gov/apod/image/2403/PillarsMongolia_Liao_960.jpg"
    }])
  }, [])
  return (
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
  )
}

export default App
