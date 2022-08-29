import Statistic from './Statistic/Statistic';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomInput from './customInput/CustomInput';
import '../../App.scss';
import loader from '../../images/loader.gif';

const Statistics = (props) => {
    return (
        <div className="statistics_page">
            <div className="title">
                <h2>Втрати окупантів на {props.date && props.date}</h2>
            </div>
            <div className="prompt_for_input_field">Обрати дату</div>
            <div className="input_field">
                <DatePicker
                    dateFormat='yyyy-MM-dd'
                    selected={props.fullDate}
                    onChange={date => props.setFullDate(date)}
                    minDate={new Date("2022-02-25")}
                    maxDate={new Date()}
                    onKeyDown={(e) => {
                        e.preventDefault();
                    }}
                    customInput={<CustomInput />}
                />
            </div>
            {props.isFetching ? <img src={loader} alt="loader" /> :
                <div className="list_statistic">
                    {props.isError ? props.descriptionError : Array.isArray(props.statistics) && props.statistics.map((s, index) => <Statistic key={index} title={s.title} value={s.value} icon={s.icon} originalTitle={s.originalTitle} />)}
                </div>
            }
        </div>
    )
}

export default Statistics;