import React, { useRef, useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import data from "./../../data";
import { MdLocationOn } from "react-icons/md";
import CityPin from "./../pin";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -27.969087,
    longitude: 153.410898,
    width: "100vw",
    height: "100vh",
    zoom: 12
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {/* <Marker
          key={data[0].id}
          latitude={data[0].coordinates[0]}
          longitude={data[0].coordinates[1]}
        >
          <CityPin size={32} />
        </Marker>
        ; */}
        {data.map((location) => {
          return (
            <Marker
              key={location.id}
              latitude={location.coordinates[0]}
              longitude={location.coordinates[1]}
            >
              <CityPin size={32} />
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
};

export default Map;
