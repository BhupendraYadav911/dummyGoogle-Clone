import React from 'react'
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import '../pages/Images.css'

const Images = () => {
    const [{ term='tesla' }, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);

  return (
    <div>
   
   {term && (

<div className="image-gallery">
 


{data?.items.map(item => <div className="searchPage_result">
  {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
      <img  className="gallery-image" src={item.pagemap?.cse_image[0]?.src} alt="" />
      
  )}


<a className="searchPage_resultTitle" href={item.link}>
  <h2>{item.title}</h2>
</a>
<p className="searchPage_resultSnippet">{item.snippet}</p>
</div>)}
</div>
)}
  </div>
  )
}

export default Images