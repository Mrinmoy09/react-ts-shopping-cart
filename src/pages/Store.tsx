import React from 'react';
import storeItems from '../data/items.json'
import {Row,Col} from 'react-bootstrap'
import StoreItem from '../components/StoreItem';

const Store = () => {
    
    return (
        <>
          <Row md={2} lg={3} className="g-3">
            {storeItems.map(item=>
                <Col sm={1} key={item.id}><StoreItem {...item}></StoreItem></Col>)
            }
          </Row>  
        </>
    );
};

export default Store;