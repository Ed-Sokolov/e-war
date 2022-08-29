import '../../../App.scss';
import Person from './Person';
import fireworks from '../../../images/fireworks.gif'

const Slot = (props) => {
    return (
        <div className={`slot slot_${props.id}`}>
            <div className="first_part_circle">
            </div>
            <div className="field">
                {props.isHere === true && <Person hit={props.hit}/>}
                {props.isHit && <img src={fireworks} alt="fireworks" className="fireworks"/>}
            </div>
            <div className="second_part_circle"></div>
        </div>
    )
}

export default Slot;