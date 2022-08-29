import '../../App.scss';
import Slot from './Slot/Slot';
import { useState } from "react";
import sledgehammer from '../../images/sledgehammer.svg';
import rotatedSledgehammer from '../../images/rotatedSledgehammer.svg';

const Game = (props) => {
    const [isClick, setIsClick] = useState(false);

    let urlCursor = isClick ? rotatedSledgehammer : sledgehammer;

    const eventClick = (e) => {
        if(isClick) {
            return false;
        }
        else {
            setIsClick(true);
        }
        const timeouts = setTimeout(() => {
            setIsClick(false);
        }, 100);
        return () => clearTimeout(timeouts);
    }

    let cursor = `url(${urlCursor}) 15 60, auto`;

    return (
        <div className="game_page">
            <div className="game_field" style={{ cursor: cursor }} onClick={(e) => eventClick(e)}>
                {props.location.map(location => {
                    return <Slot id={location.id} isHere={location.isHere} key={location.id} hit={props.hit} isHit={props.isHit}/>
                })}
            </div>
            {props.isHit && <div className="message">
                <div className="congratulations">Ви виграли! Натисніть кнопку, щоб почати заново.</div>
                <div className="btn">
                    <button onClick={() => props.reset()}>Заново</button>
                </div>
            </div>}
        </div>
    )
}

export default Game;