import '../App.css';

type Props = {
    title: string;
    institution: string;
    award: string;
};

const Timeline = ({ title, institution, award }: Props) => (
    <div className="timeline-text">
        <h6>{title}</h6>
        <div className="small-text">
            <p>{institution}<br/>{award}</p>
        </div>
    </div>
);

export default Timeline