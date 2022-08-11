import React from 'react'
import Button from '../../Button'
import Container from '../../Container'

export default function Item(props) {

  if (props.type === 'button') {
    return (
      <div className='scistone-form-item'>
        <Container row>
          <Container offset25 col>
            {props.children}
          </Container>
        </Container>
      </div>
    )
  }
  return (
    <div className='scistone-form-item'>
      {props.children}
    </div>
  )
}
