import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSlide from '../components/heroSlide/HeroSlide'
import SearchHeader from '../components/searchHeader/SearchHeader'
import CastList from '../components/castList/CastList'
import ListColumn from '../components/listColumn/ListColumn'

import tmdbApi, {category, tvType, movieType} from '../api/tmdbApi'

export default function Home() {
  return (
   <>
      <div className='main pc-8 t-9 m-12'>
          <SearchHeader/>
          <HeroSlide/>
          <CastList/>
      </div>
      <div className='left-main pc-2 t-0 m-0'>
         <ListColumn name={'Popular'} category={category.movie} type={movieType.popular} />
         <ListColumn name={'Favorites'} category={category.movie} type={movieType.top_rated} />
      </div>
   </>
  )
}
