import './index.scss';
import { useLayoutEffect, useState } from 'react';
import Client from 'components/Client';

const ClientsListing = ({ data }) => {
    const [scrollY, setScrollY] = useState(0);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const scrollY = document.documentElement.scrollTop;
            setScrollY(scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <div className="ClientsListing">
            <h4 className="ClientsListing__scroll-pos">
                Scroll: {Math.round(scrollY)}px
            </h4>
            <ul className="ClientsListing__list">
                {data.map(({ id, firstName, lastName, phoneNumber }) => (
                    <Client
                        key={id}
                        firstName={firstName}
                        lastName={lastName}
                        phoneNumber={phoneNumber}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ClientsListing;
