import React, { useEffect, useState } from "react";
import "./heroSlide.scss";
import PropTypes from 'prop-types'
import { Button, ButtonOutline } from "../button/Button";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import noFile from '../../assets/nofile.jpg'
import {useNavigate} from 'react-router-dom'

const HeroSlide = (props) => {
  let count = 1;

  const [movies, setMovies] = useState([])
  
  useEffect(()=>{
      const fetchData= async () => {
        const params ={page: 1, language: 'vi'}

        try{
          const response = await tmdbApi.getMoviesList(movieType.popular, {params})
          setMovies(response.results.slice(0, 4));
        }catch(err){
          console.log(err);
        }
      };
      fetchData()
  },[])
    
  useEffect(()=>{
    const slide = document.querySelector('.heroSile-slide')
    const slideItemAll = document.querySelectorAll('.heroSlideItem')

    if(movies.length > 0){
      slide.style.transform = `translateX(-${1 * 100}%)`
      slideItemAll[0].setAttribute('id','lastClone');
      slideItemAll[slideItemAll.length-1].setAttribute('id','firstClone');
    }
  },[movies])

  useEffect(()=> {
    const slide = document.querySelector('.heroSile-slide')
    const slideItemAll = document.querySelectorAll('.heroSlideItem')

    if(movies.length > 0){
      slide.addEventListener('transitionend', () =>{
        if(slideItemAll[count].id === 'lastClone'){
          slide.style.transition = 'none';
          count = slideItemAll.length - 2;
          slide.style.transform = `translateX(-${count * 100}%)`
        }
        if(slideItemAll[count].id === 'firstClone'){
          slide.style.transition = 'none';
          count = slideItemAll.length - count;
          slide.style.transform = `translateX(-${count * 100}%)`
        }
      })
    }
  },[movies])

  const handleClick = () => {
    count++;
    const slide = document.querySelector('.heroSile-slide')
    const lengthSlide = document.querySelectorAll('.heroSlideItem').length;
     if(count >= lengthSlide) count = lengthSlide-1;
     slide.style.transition = 'transform .4s';
     slide.style.transform = `translateX(-${count * 100}%)`
  }

  return (
    <div className="heroSile-container">
      <div className="heroSile-slide">
        {
          movies.map((item, index) => (
            <HeroSlideItem item={item} key={index} />
          ))
        }
        {
          movies.slice(0,2).map((item, index) => (
            <HeroSlideItem item={item} key={index} />
          ))
        }
      </div>
      <div className="btn-slide ">
        <ButtonOutline className="round"  onClick={handleClick}>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
        </ButtonOutline>
      </div>
    </div>
  );
}

const HeroSlideItem = (props) => {

  const navigate = useNavigate()

  const [genres, setGenres] = useState([])
  const item = props.item;

  const bg = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`

  const viewFriend = Math.round(Math.random() * 5)

  useEffect(()=>{
    const fetchData= async () => {
      const params ={page: 1, language: 'vi'}
      try{
        const response = await tmdbApi.detail(category.movie, item.id, {params})
        setGenres(response.genres.slice(0,3));
      }catch(err){
        console.log(err);
      }
    };
    fetchData()
  },[])

  return (
    <div className="heroSlideItem" style={ item.backdrop_path ? { backgroundImage: `url(${bg})` } : {backgroundImage: `url(${noFile})`}}>
      <div className="heroSlideItem__content">
        <div className="heroSlideItem__content__view">{
          `${item.popularity} người đã xem` 
        }</div>
        <div className="heroSlideItem__content__main">
          <h2 className="title">{item.original_title}</h2>
          <div className="genre">
            {
              genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))
            }
          </div>
          <div className="evaluate">
            <i className="fa-solid fa-star"></i>
            <span>{item.vote_average}</span>
          </div>
          <div className="button">
            <Button className="btn-watch" onClick={() =>{
              return navigate('movie/' + item.id)} }>Watch</Button>
            <ButtonOutline className="btn-add">
              <i className="fa-solid fa-plus"></i>
            </ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HeroSlide;