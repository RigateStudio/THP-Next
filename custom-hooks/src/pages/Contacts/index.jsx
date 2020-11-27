import useScroll from 'hooks/useScroll';

const Contacts = () => {
    const scrollY = useScroll();

    return (
        <div className="Contacts">
            {scrollY > 50 ? "Hello contacts" : "Hello tout court"}
        </div>
    );
};

export default Contacts;
