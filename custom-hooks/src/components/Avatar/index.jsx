import './index.scss';
import NoAvatar from './no-avatar.png';

const Avatar = ({ image }) => (
    <div className="Avatar">
        {image && <img src={image} alt="Avatar" className="Avatar__image" />}
        {!image && <img src={NoAvatar} alt="" className="Avatar__no-image" />}
    </div>
);

export default Avatar;
