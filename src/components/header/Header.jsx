import back from '../../images/back.png';
import flag from '../../images/flag.png';
import '../../App.scss';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="back">
                    {props.titlePage !== "Головна сторінка" && <img src={back} alt="icon_back" onClick={() => props.navigate(-1)}/>}
                </div>
                <div className="title_page">
                    {props.titlePage}
                </div>
                <div className="flag">
                    <img src={flag} alt="Ukrainian_flag" />
                </div>
            </div>
        </header>
    )
}

export default Header;