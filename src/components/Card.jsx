import React from 'react'

const Card = ({img, title, description, price}) => {
  return (
    <>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img className='h-72'
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p>{price}</p>
  </div>
</div>
    </>
  )
}

export default Card