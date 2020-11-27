import CallToAction from 'components/CallToAction';

const Email = ({ firstName, lastName }) => {
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

    return (
        <CallToAction href={`mailto:${email}`}>
            Envoyer un e-mail
        </CallToAction>
    );
}

export default Email;
