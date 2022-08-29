import { useEffect } from "react";
import { connect } from 'react-redux';
import { setPositionPerson, setHit, setReset } from '../../redux/GameReducer';
import Game from "./Game";

const GameContainer = ({location, isHit, ...props}) => {
    useEffect(() => {
        if(!isHit) {
            const timeout = setTimeout(() => {
                props.setPositionPerson();
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isHit ? isHit : location.map(location => location.isHere)])
    
    const hit = () => {
        props.setHit(true);
        props.setReset();
    }

    const reset = () => {
        props.setHit(false);
    }

    return (
        <Game location={location} hit={hit} isHit={isHit} reset={reset}/>
    )
}

let mapStateToProps = (state) => ({
    location: state.gamePage.location,
    isHit: state.gamePage.isHit
})

export default connect(mapStateToProps, { setPositionPerson, setHit, setReset })(GameContainer);