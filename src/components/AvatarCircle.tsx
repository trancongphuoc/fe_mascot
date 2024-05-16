interface CardProps {
    avatarUrl: string;
    className: string; // Define the type of the card prop
}

function AvatarCircle({avatarUrl, className} : CardProps) {
    return (
        <img src={avatarUrl} alt="avatar" className={className}></img>
    );
}

export default AvatarCircle;