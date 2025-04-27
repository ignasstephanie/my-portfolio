import '../App.css';

type Props = {
    icon: string;
};

const Icon = ({ icon }: Props) => (
    <div className="icon-group">
        <span className="icon-container">
            <img src={icon} alt={icon} />
        </span>
        <div className="line-connector"></div>
    </div>
);

export default Icon