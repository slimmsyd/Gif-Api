import './App.css';

import React, {useEffect, useState} from 'react';
import { type } from '@testing-library/user-event/dist/type';



const ART_API = "https://api.giphy.com/v1/gifs/search?api_key=S5MCWa2Wo594YJJgxhsEPXDHt7PUBwyu&q=Code&limit=25&offset=0&rating=g&lang=en"

function App() {

const API = "https://api.giphy.com/v1/gifs/search?"
const API_KEY = "api_key=S5MCWa2Wo594YJJgxhsEPXDHt7PUBwyu&q="
var QUERY = "=Code"


const [giph ,setGiph] = useState([])
const [image, setImage] =useState([])
const [search, setSearch] = useState("")
const [loading, setLoading] = useState(false)


const url = API + API_KEY 




const searchGif = () => { 

  if(search.length > 0 ) {
    setLoading(true)
    fetch(url + search)
    .then((res) => {
      setLoading(false)
      return res.json()
    })
    .then((result) => { 
      setGiph(result.data.map(giph => {
      let randomImage = []
      randomImage.push( giph.images.fixed_height.url)
      const img =  randomImage[Math.floor(Math.random() * randomImage.length)]
      console.log(giph.id)
      return img
      }))
    })
    .catch((error)=> {
      setLoading(false)
      console.log("Something Went Wrong ", error)
    })
  }
}




//Move class to next slide 
const moveToSlide =  (currentSlide, nextSlide, track) => { 

  currentSlide.classList.remove("slide")
  nextSlide.classList.add("slide")

}

//Track the current Slide 
function stuff () { 

  addClass()
 const currentSlide = document.querySelector(".slide")
 const nextSlide = currentSlide.nextElementSibling

 moveToSlide(currentSlide,nextSlide)


}

function addClass() { 
  var v = document.querySelector(".all_Images")
  v.firstChild.classList.add("slide")
}


  return (
    <>
    <div className = "center_Page">
    <div className ="title_search">
     <div className = "title">Simple Gif Search</div>
     <p>Source code <a href = "#"></a></p>
     <input className='search'
     placeholder='search'
     onChange={(e) => setSearch(e.target.value)}
     value = {search}
     type = "text"


     >
       
     </input>
       
     <button className='btn'
      onClick = {searchGif}
      
      >
        Another Gif? Maybe gm
      </button>
      <div className = "next_Gif">
     <div className = "all_Images">
        {
          giph.map((gif) => { 
            return (
              <div key ={gif.id} id ="list_Items" className='current_Slide'> <img src = {gif}></img></div>
           
            )
          })
        }
  
        </div>
        
    
        </div>
     
    

    </div>
    </div>
    </>
  );
}

export default App;
