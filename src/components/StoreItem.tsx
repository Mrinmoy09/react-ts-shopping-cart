import React from 'react';
import {Card,Button} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

type storeItemProps = {
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

const StoreItem = ({id,name,price,imgUrl}:storeItemProps) => {
    const {getitemQuantity , increaseCartQuantity ,decreaseCartQuantity ,removeFromCart} = useShoppingCart()
    const quantity = getitemQuantity(id);
    return (
        <>
            <Card className='h-100'>
                <Card.Img variant="top" src={imgUrl} style={{objectFit:'cover',height:'300px'}} ></Card.Img>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='d-flex justify-content-between align-items-baseline'>
                        <span className='fs-2'>{name}</span>
                        <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                    </Card.Title>
                    <div className='mt-auto'>
                        {quantity === 0 ? 
                        <Button className='w-100' onClick={()=>increaseCartQuantity(id)}>+ Add to cart</Button> 
                        : 
                        <div className='d-flex align-items-center flex-column' style={{gap:'.5rem'}}>
                            <div className='d-flex mx-2' style={{gap:'.5rem'}}>
                            <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className='fs-3'>{quantity} in cart</span>
                            </div>
                            <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                            </div>
                            <div className='d-flex justify-content-center align-items-center' style={{gap:'.5rem'}}>
                             <Button variant='danger' onClick={()=>removeFromCart(id)}>Remove from cart</Button>
                            </div>
                        </div>}
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default StoreItem;