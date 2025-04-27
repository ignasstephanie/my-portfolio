import '../App.css';

type Props = {
    icon: string;
    title: string;
    institution: string;
    award: string;
};

const Timeline = ({ icon, title, institution, award }: Props) => (
    <div className="timeline-flex">
        <span className="icon-container">
            <img src={icon} alt={icon} />
        </span>
        <div className="timeline-text">
            <span className="timeline-title">{title}</span>
            <div className="small-text">
                <span>{institution}<br/>{award}</span>
            </div>
        </div>
    </div>
);

export default Timeline