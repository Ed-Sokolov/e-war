import MapPage from "./Map";
import { connect } from 'react-redux';
import { getStatutes } from '../../redux/StatusesReducer';
import { useEffect, useState } from "react";
import L from 'leaflet';

const center = [49.12029563346219, 32.35630349960624];

const southWest = L.latLng(44.02738, 22.10166),
    northEast = L.latLng(52.42326, 40.25842),
    bounds = L.latLngBounds(southWest, northEast);

const MapContainer = (props) => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

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
            <MapPage citiesStatus={props.citiesStatus} center={center} bounds={bounds} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    citiesStatus: state.statusesPage.citiesStatus
})

export default connect(mapStateToProps, { getStatutes })(MapContainer);