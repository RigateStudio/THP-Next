import './index.scss';
import Avatar from 'components/Avatar';
import Email from 'components/Email';
import Phone from 'components/Phone';

const Client = ({ firstName, lastName, phoneNumber }) => (
    <li className="Client">
        <Avatar />
        <h3 className="Client__name">{firstName} {lastName}</h3>
        <div className="Client__actions">
            <p className="Client__actions__item">
                <Email firstName={firstName} lastName={lastName} />
            </p>
            <p className="Client__actions__item">
                <Phone number={phoneNumber} />
            </p>
        </div>
    </li>
);

export default Client;
