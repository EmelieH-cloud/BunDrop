import React, { useState, useEffect } from 'react';
import Receipt from './Receipt';
import { useParams } from 'react-router-dom';
import useFetch from '../../CustomHooks/useFetch';

function Confirmation()
 {

    const { id } = useParams();
    const [order, setOrder] = useState(null); // För att spara den hämtade ordern
    const { data, error, isLoading } = useFetch(`http://localhost:3000/orders/${id}`);

    useEffect(() => {
        if (data) {
            setOrder(data);
        }
    }, [data]); 

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {order && <Receipt order={order} />} 
        </>
    );
}

export default Confirmation;
