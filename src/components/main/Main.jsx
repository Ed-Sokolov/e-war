import { NavLink } from 'react-router-dom';
import ponter from '../../images/pointer_down.png';

const Main = () => {
    return (
        <div className="main_page__wrapped">
            <div className="main_page">
                <div className="title">
                    <h1>eWar</h1>
                </div>
                <div className="navigation">
                    <div className="title">
                        <h3>Навігація</h3>
                        <div className="pointer">
                            <img src={ponter} alt="pointer_down" />
                        </div>
                    </div>
                    <ul className="list">
                        <li>
                            <NavLink to="/map">
                                <span>&#x3e;</span>Карта тривог<span>&#x3c;</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics">
                                <span>&#x3e;</span>Втрати окупантів<span>&#x3c;</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/game">
                                <span>&#x3e;</span>Злови Путіна<span>&#x3c;</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    Цей додаток був створений для отримання інформації стосовно місцеположення тривог і втрат окупантів, а також можна випустити свій гнів, вдаривши Путіна.
                </div>
            </div>
        </div>
    )
}

export default Main;