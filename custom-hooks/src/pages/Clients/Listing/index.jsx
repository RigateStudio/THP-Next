import './index.scss';
import Client from 'components/Client';

const ClientsListing = ({ data }) => (
    <ul className="ClientsListing">
        {data.map(({ id, firstName, lastName, phoneNumber }) => (
            <Client
                key={id}
                firstName={firstName}
                lastName={lastName}
                phoneNumber={phoneNumber}
            />
        ))}
    </ul>
);

export default ClientsListing;
