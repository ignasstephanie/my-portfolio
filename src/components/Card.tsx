import '../App.css';

type CardProps = {
    image: string;
    title: string;
    label: string[]
    stack: string[]
    link: string;
};

function getTagColor(tag: string): string {
    switch (tag) {
        case 'Logo Design':
            return '#9BDCDE';
        case 'Graphic Design':
            return '#AE9BDE'; 
        case 'UI/UX Design':
            return '#F285BA';
        case 'Web Development':
            return '#7DCDFA';
        case 'Mobile App Development':
            return '#F28585';
        default:
            return '#121212';
    }
}

const Card = ({ image, title, label, stack, link }: CardProps) => (
    <a href={link} target="_blank" className="card-container">
        <div className="image-container">
            <img src={image} alt={image} className="image-thumbnail"/>
        </div>
        <div className='text-flex'>
            <h5 className="gradient-text text-left">{title}</h5>
            <div className="label-stack-wrap">
                <div className="card-labels">
                    {label.map((tag, index) => (
                    <span key={index} className="card-tag" style={{ backgroundColor: getTagColor(tag) }}>{tag}</span>
                    ))}
                </div>
                <div className="card-tech-stack">
                    {stack.map((tag, index) => (
                        <img key={index} className="tech-tag" src={tag} alt="" />
                    ))}
                </div>
            </div>
        </div>
    </a>
);

export default Card