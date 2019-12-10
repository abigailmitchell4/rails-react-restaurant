import React from 'react'
import Item from './Item'

const ItemList = (props) => (
  <div>
    { props.items.map( item => (
      <Item
        key={item.id} {...item}
        removeItem={props.removeItem}
        editItem={props.editItem}
      />
    ))}
  </div>
)

export default ItemList