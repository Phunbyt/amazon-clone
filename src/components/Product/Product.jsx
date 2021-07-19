import React from 'react'
import './Product.css'
import {useStateValue} from '../../contexts/StateProvider'
const Product = ({id,  title, price, image, rating }) => {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  }

    return (
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((item, i) => (
                <p key={ i}>⭐</p>
              ))}
          </div>
        </div>

        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to basket</button>
      </div>
    );
}

export default Product
