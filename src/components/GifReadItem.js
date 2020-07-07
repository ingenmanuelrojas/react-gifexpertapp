import React from 'react'

export const GifReadItem = ( {title, url} ) => {

    return (
        <div className='card animate__animated animate__bounce'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
