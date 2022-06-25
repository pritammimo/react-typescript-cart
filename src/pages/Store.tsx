import React from 'react'
import StoreItems from "../data/items.json";
import { Row,Col } from "react-bootstrap";
import StoreItem from '../components/StoreItem';
type Props = {}

const Store = (props: Props) => {
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
      {StoreItems?.map((item,i)=>(
        <Col key={i}>
          <StoreItem {...item}/>
        </Col>
      ))}
    
    </Row>
    </>

  )
}

export default Store