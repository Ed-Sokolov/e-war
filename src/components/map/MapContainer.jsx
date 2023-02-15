import MapPage from "./Map";
import { connect } from 'react-redux';
import { getStatutes } from '../../redux/StatusesReducer';
import { useEffect, useState } from "react";
import L from 'leaflet';
import { Error } from "../error/Error";
import { useMediaQuery } from 'react-responsive';

const center = [49.12029563346219, 32.35630349960624];

const southWest = L.latLng(44.02738, 22.10166),
    northEast = L.latLng(52.42326, 40.25842),
    bounds = L.latLngBounds(southWest, northEast);

const MapContainer = (props) => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1251px)' });
    const isSmallWidth = useMediaQuery({ query: '(max-width: 850px)' });
    const isEvenWidth = useMediaQuery({ query: '(max-width: 410px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isSmallHeight = useMediaQuery({ query: '(max-height: 395px)' });

    let zoom = isDesktopOrLaptop ? 6 : (isPortrait ? (isEvenWidth? 4.4 : isSmallWidth ? 5 : 6) : isSmallHeight ? 4.4 : 5);

    if (isFirstLoad) {
        setIsFirstLoad(false);
        props.getStatutes();
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            props.getStatutes();
            setIsFirstLoad(false);
        }, 10000);
        return () => clearTimeout(timeout);
    }, [props.citiesStatus.map(stat => stat.alert)]);

    return (
        <div>
            {
                props.isError ? <Error/> : <MapPage citiesStatus={props.citiesStatus} center={center} bounds={bounds} zoom={zoom}/>
            }
        </div>
    )
}

let mapStateToProps = (state) => ({
    citiesStatus: state.statusesPage.citiesStatus,
    isError: state.statusesPage.isError
})

export default connect(mapStateToProps, { getStatutes })(MapContainer);