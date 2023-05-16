import React from 'react';
import './item.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({ id, name, description, price, image, categoria }) => {
  return (
    <div className='item'>
      <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <Card.Title>Categoria: {categoria}</Card.Title>
          <Link to={`/detail/${id}`}>
            <Button variant="primary">Ver más detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}
