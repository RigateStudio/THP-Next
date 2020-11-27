import './index.scss';
import { useCallback, useState } from 'react';
import Client from 'components/Client';
import useScroll from 'hooks/useScroll';

const ClientsListing = ({ data }) => {
    const scrollY = useScroll();

    const [mode, setMode] = useState('grid');

    const handleChangeMode = useCallback(() => {
        setMode(mode === 'list' ? 'grid' : 'list');
    }, [mode]);

    let classNames = 'ClientsListing';
    if (mode === 'list') {
        classNames += ' ClientsListing--list-mode';
    }

    return (
        <div className={classNames}>
            <h4 className="ClientsListing__scroll-pos">
                Scroll: {Math.round(scrollY)}px<br />
                <button onClick={handleChangeMode}>Toggle mode</button>
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
