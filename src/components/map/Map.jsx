import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import { statesData, statesCrimea } from '../../api/map/data';
import 'leaflet/dist/leaflet.css';
import '../../App.scss';
import icon_alert from '../../images/icon_alert.png';
import icon_all_clear from '../../images/icon_all-clear.png';

const MapPage = (props) => {
    return (
        <div className="map_page">
            <div className="field_map">
                <MapContainer className="map" center={props.center} zoom={props.zoom} maxZoom={8} minZoom={props.zoom} maxBounds={props.bounds}>
                    <TileLayer
                        url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=Pb0egcwjDrYMdpI7GZIM"
                        attribution='<a href="https://carto.com/" target="_blank">&copy; CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    />
                    {
                        statesData.features.map((state, stateId) => {
                            const coordinates = state.geometry.coordinates[0].map(item => [item[1], item[0]]);
                            let color = "green";
                            if (state.properties.id === props.citiesStatus[stateId].id && props.citiesStatus[stateId].alert === true) {
                                color = "red";
                            }
                            let time;
                            if (props.citiesStatus[stateId].changed === 'Without data') {
                                time = 'Данних нема.';
                            } else {
                                let date = new Date(props.citiesStatus[stateId].changed);
                                time = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getFullYear()}, ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`;
                            }
                            
                            return (
                                <Polygon pathOptions={{
                                    fillColor: color,
                                    fillOpacity: .5,
                                    weight: 2,
                                    opacity: 1,
                                    dashArray: 5,
                                    color: "white",
                                }}
                                    positions={coordinates}
                                    key={state.properties.shapeID}
                                >
                                    <Tooltip sticky direction="auto">
                                        <div className="tooltip">
                                            <div className="title">
                                                {props.citiesStatus[stateId].name}
                                            </div>
                                            <hr />
                                            <div className="status_alert">
                                                <img src={props.citiesStatus[stateId].alert === true ? icon_alert : icon_all_clear} alt="icon_status" />
                                                {props.citiesStatus[stateId].alert === true ? "Тривога з" : "Немає тривоги з"}
                                            </div>
                                            <div className="duration">
                                                {time}
                                            </div>
                                        </div>
                                    </Tooltip>
                                </Polygon>
                            )
                        })
                    }
                    {
                        statesCrimea.features.map(state => {
                            const coordinates = state.geometry.coordinates[0].map(item => [item[1], item[0]]);
                            return (
                                <Polygon pathOptions={{
                                    fillColor: 'grey',
                                    fillOpacity: .5,
                                    weight: 2,
                                    opacity: 1,
                                    dashArray: 5,
                                    color: "white"
                                }}
                                    positions={coordinates}
                                    key={state.properties.shapeID}
                                >
                                    <Tooltip sticky direction="top">
                                        <div className="tooltip">
                                            <div className="title">
                                                Автономна Республіка Крим
                                            </div>
                                            <hr />
                                            <div>
                                                Данних нема.
                                            </div>
                                        </div>
                                    </Tooltip>
                                </Polygon>
                            )
                        })
                    }
                </MapContainer>
                <div className="description">Ця карта є недостовірною, тому що бере дані не з офіційного джерела і показує лише повітряні тривоги.  Загрози – не показує та відсутня інформація про Кримський півострів.</div>
            </div>
        </div>
    )
}

export default MapPage;