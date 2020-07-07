import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifReadItem } from './GifReadItem';

export const GifGrid = ({category}) => {

    //la data viene con el nombre data, y se renombra a images con data:images
    const { data:images, loading } = useFetchGifs(category);
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifReadItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div> 
        </>
    )
}
