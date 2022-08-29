import { useEffect } from "react";
import { connect } from 'react-redux';
import { setPage } from '../../redux/CurrentPage';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = (props) => {
    let pathName = (window.location.href).split('/');
    pathName = `${pathName[pathName.length-1]}`;

    useEffect(() => {
        switch(pathName) {
            case `statistics`:
                props.setPage("Втрати окупантів")
                return;
            case `game`: 
                props.setPage("Злови Путіна")
                return;
            case `map`: 
                props.setPage("Карта тривог")
                return;
            case `main`: 
                props.setPage("Головна сторінка")
                return;
            default: return;
        }
    }, [pathName[pathName.length-1]])

    const navigate = useNavigate();

    return (
        <div>
            <Header titlePage={props.titlePage} navigate={navigate}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    titlePage: state.currentPage.titlePage
})

export default connect(mapStateToProps, { setPage })(HeaderContainer);