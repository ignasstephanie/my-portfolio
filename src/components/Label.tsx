import '../App.css';

type Props = {
    icon: string;
    title: string;
};

const Icon = ({ icon, title}: Props) => (
    <div className="icon-group timeline-list hover-expand">
        <img src={icon} alt={icon} />
        <p className="label">{title}</p>
    </div>
);

export default Icon