import React, { useState } from 'react'

export default function Menu(props) {
  const [openIndex, setOpenIndex] = useState(-1)

  const handleOpenDrawer = (index) => {
    if (index == openIndex) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
  }
  
  return (
    <div style={props.style} className='menu__body-area'>
      {props.data ?
      <>
      {props.data.map((item, index) => {
        return (
          <div className='menu__body' key={index}>
            <div className='menu__title-area' onClick={()=>handleOpenDrawer(index)}>
              {props.titleIcon}
              <span style={props.titleStyle} className='menu__title'>{item.label}</span>
            </div>
            <div className={'menu__subitems' + (props.drawer && index!==openIndex ? " drawer" : "")} >
              {item.subItems.map((subItem, subIndex) => (
                <div className='menu__sub-body' key={subIndex}>
                  {props.subTitleIcon}
                  <span style={props.subTitleStyle} className='menu__sub-title' >{subItem.label}</span>
                </div>
              ))}
            </div>
          </div>
        )
      })}
      </>
    :null}
    </div>
  )
}
