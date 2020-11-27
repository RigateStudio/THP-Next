import { useState, useEffect } from 'react';
import { getAllClients } from 'Api';
import ClientsListing from './Listing';

const Clients = () => {
    const [clientsList, setClientsList] = useState([]);

    useEffect(() => {
        const results = getAllClients({ page: 1 });
        setClientsList(results)
    }, []);

    return (
        <div className="Clients">
            <ClientsListing data={clientsList} />
        </div>
    );
}

export default Clients;
