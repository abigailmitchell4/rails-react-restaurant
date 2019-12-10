import React from 'react'
import Menu from './Menu'

const MenuList = (props) => (
  <div>
    { props.menus.map( menu => (
      <Menu
        key={menu.id} {...menu}
        removeMenu={props.removeMenu}
        editMenu={props.editMenu}
      />
    ))}
  </div>
)

export default MenuList