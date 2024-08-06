import React, { useContext } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const ExploreMenu = () => {
    const { category, setCategory } = useContext(StoreContext);

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to provide an unforgettable dining experience.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div
                        className="explore-menu-list-item"
                        onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                        key={index}
                    >
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExploreMenu
