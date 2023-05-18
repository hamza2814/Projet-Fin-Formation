import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import useActive from '../../hooks/useActive';


const ProductCard = (props) => {

    const { id_article, image, name_article, prix,  } = props;

    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // handling Add-to-cart
    const handleAddItem = () => {
        const item = { ...props };
        addItem(item);

        handleActive(id_article);

        setTimeout(() => {
            handleActive(false);
        }, 3000);
    };

    // const newPrice = displayMoney(finalPrice);
    // const oldPrice = displayMoney(originalPrice);


    return (
        <>
            <div className="card products_card">
                <figure className="products_img">
                    <Link to={`/product-details/${id_article}`}>
                        <img src={`http://localhost:8000/images/${image}`} alt="product-img" />
                    </Link>
                </figure>
                <div className="products_details">
                    {/* <span className="rating_star">
                        {
                            [...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)
                        }
                    </span> */}
                    <h3 className="products_title">
                        <Link to={`/product-details/${id_article}`}>{name_article}</Link>
                    </h3>
                    {/* <h5 className="products_info">{info}</h5> */}
                    <div className="separator"></div>
                    <h2 className="products_price">
                        {prix} DH &nbsp;
                        {/* <small><del>{oldPrice}</del></small> */}
                    </h2>
                    <button
                        type="button"
                        className={`btn products_btn ${activeClass(id_article)}`}
                        onClick={handleAddItem}
                    >
                        {active ? 'Added' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;