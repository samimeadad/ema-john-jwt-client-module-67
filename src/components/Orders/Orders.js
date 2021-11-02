import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';

const Orders = () => {
    const [ orders, setOrders ] = useState( [] );
    const { user } = useAuth();
    const navigation = useHistory();

    useEffect( () => {
        fetch( `http://localhost:5000/orders?email=${ user.email }`, {
            headers: {
                'authorization': `Bearer ${ localStorage.getItem( 'idToken' ) }`
            }
        } )
            .then( res => {
                if ( res.status === 200 ) {
                    return res.json()
                }
                else if ( res.status === 401 ) {
                    navigation.push( '/login' );
                }
            } )
            .then( data => setOrders( data ) );
    }, [] );

    return (
        <div>
            <h2>Total Orders: { orders.length }</h2>
            <ul>
                {
                    orders.map( order => <li key={ order._id }>{ order.name } :: { order.email }</li> )
                }
            </ul>
        </div>
    );
};

export default Orders;