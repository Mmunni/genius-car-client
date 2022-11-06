import React from 'react';
import './BannerItems.css';
const BannerItems = ({slide}) => {
    const {image, prev, next, id} = slide;
    return (
            <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carasoul-img">
        <img src={image} className="w-full  rounded-lg" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-28  top-1/3">
         <h1 className='text-5xl font-bold text-white'>
          Affordable<br/>
          Price For Car <br/>
          Servicing
         </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-28  top-1/2">
          <p className='text-lg text-white'>
          There are many variations of passages of  available, but the majority have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-28 top-2/3">
          <button className="btn btn-warning text-white mr-5">Discover More</button>
          <button className="btn btn-outline btn-warning text-white">Latest Projects</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-neutral-500">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle bg-orange-700  hover:bg-orange-500">❯</a>
        </div>
           </div>

       
    );
};

export default BannerItems;