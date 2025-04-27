import '../App.css';

type CardProps = {
    image: string;
    title: string;
    label: string[]
    link: string;
};

function getTagColor(tag: string): string {
    switch (tag) {
        case 'Logo Design':
            return '#AE9BDE';
        case 'Graphic Design':
            return '#AE9BDE'; 
        case 'UI/UX Design':
            return '#F285BA';
        case 'Web Development':
            return '#7DCDFA';
        default:
            return '#121212';
    }
}

const Card = ({ image, title, label, link }: CardProps) => (
    <a href={link} target="_blank" className="card-container">
        <div className="image-container">
            <div className="overlay"></div>
            <img src={image} alt={image} className="image-thumbnail"/>
        </div>
        <div className='text-flex'>
            <h5 className="gradient-text text-left">{title}</h5>
            <div className="card-labels">
                {label.map((tag, index) => (
                <span key={index} className="card-tag" style={{ backgroundColor: getTagColor(tag) }}>{tag}</span>
                ))}
            </div>
        </div>
    </a>
);

export default Card