import '../../../App.scss';

const Statistic = (props) => {
    return (
        <div className="card_statistic">
            <div className="icon">
                <img src={props.icon} alt={props.originalTitle} />
            </div>
            <div className="value">
                {props.value}
            </div>
            <div className="title">
                {props.title}
            </div>
        </div>
    )
}

export default Statistic;