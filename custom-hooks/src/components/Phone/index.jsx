import CallToAction from 'components/CallToAction';

const Phone = ({ number }) => (
    <CallToAction href={`callto:${number}`}>
        Appeler
    </CallToAction>
);

export default Phone;
