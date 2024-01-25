import React from 'react'

const Netcards = (props) => {
  return (
    <>
        <div className='cards'>
            <div className='card'>
                <img src={props.imgsrc} alt='pic' className='card__img'/>
                <div className='card__info'>
                    <span className='card__category'>{props.orig}</span>
                    <h3 className='card__title'>{props.sname}</h3>
                    <a href={props.targ} target='_raktim'>
                        <button> Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Netcards
