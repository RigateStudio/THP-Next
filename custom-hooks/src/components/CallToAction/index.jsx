import './index.scss';

const CallToAction = ({ href, children }) => (
    <a className="CallToAction" href={href}>
        {children}
    </a>
);

export default CallToAction;
