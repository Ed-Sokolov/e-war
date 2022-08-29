import '../../../App.scss';
import face from '../../../images/face.png';

const Person = (props) => {
    return (
        <img src={face} alt="person" className="person" onClick={() => props.hit()} />
    )
}

export default Person;