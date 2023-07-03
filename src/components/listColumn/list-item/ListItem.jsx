import React, { useState, useEffect } from 'react'
import img from '../../../assets/poster.jpg'
import imdb from '../../../assets/imdb.png'
import './listItem.scss'
import noFile from '../../../assets/nofile.jpg'
import apiConfig from '../../../api/apiConfig'
import tmdbApi, {category} from '../../../api/tmdbApi'

function ListItem(props) {
  const item = props.item
  const [genres,setGenres] = useState([])
  const poster = item.poster_path ? apiConfig.originalImage(item.poster_path) : noFile

  useEffect(()=>{
    const fetchData= async () => {
      const params ={page: 1, language: 'en'}
      try{
        const response = await tmdbApi.detail(category.movie, item.id, {params})
        setGenres(response.genres.slice(0,2));
        console.log(response.genres);
      }catch(err){
        console.log(err);
      }
    };
    fetchData()
  },[])

  return (
    <div className='ListItem'>
        <img className='ListItem__img' src={poster}></img>
        <div className='ListItem__body'>
          <div className="ListItem__body__top">
            <h6>{item.original_title}</h6>
            <div className='grens'>
              {
                genres.map((genre,i) =>(
                  <span key={i}>{genre.name}</span>
                ))
              }
            </div>
          </div>

          <div className='imdb'>
              <img src={imdb} alt="" />
              {item.vote_average}
          </div>
        </div>
    </div>
  )
}

export default ListItem