import React from 'react';
import "./ItemListConteiner.css";
import ListItem from '../ListItems/ListItems';

const ItemListConteiner = () => {
  return (
    <div>
        <h3>List Conteiner</h3>
        <section className='ProductsConteiner'>
            <div className='Product'>
                <ListItem
                    name="Pantalones Polar"
                />
            </div>
            <div className='Product'>
                <ListItem
                    name="Remeras"
                />
            </div>
            <div className='Product'>
                <ListItem
                    name="Pantuflas"
                />
            </div>
            <div className='Product'>
                <ListItem
                    name="Pantalones Polar"
                />
            </div>
            <div className='Product'>
                <ListItem
                    name="Remeras"
                />
            </div>
            <div className='Product'>
                <ListItem
                    name="Pantuflas"
                />
            </div>

        </section>
    </div>

  )
}

export default ItemListConteiner

