import React, { useEffect } from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'
import './listColumn.scss'
import ListItem from './list-item/ListItem'
import {Button} from '../button/Button'
import tmdbApi,{category} from '../../api/tmdbApi'

function ListColumn(props) {
 const name = props.name

 const [items, setItems] = useState([])
  
  useEffect(() =>{
    const fetchData= async () => {
      const params ={page: 1, language: 'vi'}
      let response = null
      if(props !== 'similar'){
        switch(props.category){
          case category.movie: 
              response = await tmdbApi.getMoviesList(props.type, {params})
              break;
          default: 
              response = await tmdbApi.getTvList(props.type, {params})
              break;
        }
      }else{
        response = await tmdbApi.similar(props.category, props.id)
      }

      
      console.log(response.results);
      if(name === 'Popular'){
        setItems(response.results.slice(5,8))
      }else{
        setItems(response.results.slice(0,3))
      }
      

    };
    fetchData()
  },[])


  return (
    <div className='ListColumn'>
        <h4>{name}</h4>{
          items.map((item, i)=>(
            <ListItem key={i} item={item}/>
          ))
        }
        <Button className='big'>See More</Button>
    </div>
  )
}

ListColumn.propTypes = {

}

export default ListColumn
