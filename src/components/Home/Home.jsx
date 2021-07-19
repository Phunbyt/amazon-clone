import React from 'react'
import Product from '../Product/Product';
import "./Home.css";

const Home = () => {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_ROW_Muti-title_Mag1._CB1564087979_.jpg"
            alt=""
          />

          <div className="home__row">
            <Product
              id={49}
              title={"Count the Ways: sissy"}
              price={49.99}
              image={"https://m.media-amazon.com/images/I/51pa+OPTuAL.jpg"}
              rating={5}
            />
            <Product
              id={44}
              title={"Golden girl"}
              price={49.99}
              image={
                "https://m.media-amazon.com/images/I/41fqFDAjrBS._SY346_.jpg"
              }
              rating={1}
            />
          </div>
          <div className="home__row">
            <Product
              id={88}
              title={
                "I Alone Can Fix It: Donald J. Trump's"
              }
              price={49.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/41ItBEAc3kS._SX327_BO1,204,203,200_.jpg"
              }
              rating={2}
            />
            <Product
              id={11}
              title={"American Marxism"}
              price={49.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/51Hj-Lfw+0S._SX322_BO1,204,203,200_.jpg"
              }
              rating={3}
            />
            <Product
              id={33}
              title={"Malibu Rising: A Novel"}
              price={49.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/518bm5DN-VS._SX327_BO1,204,203,200_.jpg"
              }
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id={33333}
              title={"The Paper Palace: A Novel"}
              price={49.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/51yonEYjuyS._SX329_BO1,204,203,200_.jpg"
              }
              rating={5}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
