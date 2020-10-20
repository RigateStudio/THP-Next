import './index.scss';
import Avatar from 'components/Avatar';
import Email from 'components/Email';
import Phone from 'components/Phone';

const Client = ({ firstName, lastName, phoneNumber }) => (
    <li className="Client">
        <Avatar />
        <h3>{firstName} {lastName}</h3>
        <p><Email firstName={firstName} lastName={lastName} /></p>
        <p><Phone number={phoneNumber} /></p>
    </li>
);

export default Client;
