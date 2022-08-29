import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getStatistics, setDate } from '../../redux/StatisticsReducer';
import Statistics from './Statistics';

const StatisticsContainer = (props) => {
    let [fullDate, setFullDate] = useState(new Date());

    useEffect(() => {
        props.setDate(fullDate);

        let year = fullDate.getFullYear();

        let month = fullDate.getMonth() + 1;
        month = month < 10 ? '0' + month : month;

        let day = fullDate.getDate();
        day = day < 10 ? '0' + day : day;

        let date = `${year}-${month}-${day}`;

        if (props.date === date) {
            props.getStatistics(props.date);
        }
    }, [props.date])

    useEffect(() => {
        props.setDate(fullDate);
    }, [fullDate])

    return (
        <div>
            <Statistics
                isFetching={props.isFetching}
                fullDate={fullDate}
                date={props.date}
                statistics={props.statistics}
                isError={props.isError}
                descriptionError={props.descriptionError}
                setFullDate={setFullDate}
            />
        </div>
    )
}

let mapStateToProps = (state) => ({
    statistics: state.statisticsPage.statistics,
    date: state.statisticsPage.date,
    fullDate: state.statisticsPage.fullDate,
    isFetching: state.statisticsPage.isFetching,
    isError: state.statisticsPage.isError,
    descriptionError: state.statisticsPage.descriptionError
})

export default connect(mapStateToProps, { getStatistics, setDate })(StatisticsContainer);