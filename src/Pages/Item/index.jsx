import React from 'react'
import {PRODUCTS} from '../Products'
import ItemDisplay from '../ItemDisplay'
import { useParams } from 'react-router-dom'

const Item = () => {

  const {itemId} = useParams();
  const items = PRODUCTS.find((e) => e.id === Number(itemId));

  return (
    <div>
        <ItemDisplay data={items} />
    </div>
  )
}

export default Item