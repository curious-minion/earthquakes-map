import React from "react";
import GoogleMapReact from 'google-map-react';
import styles from "./MapContainer.module.css";

const AnyReactComponent = ({text}) => <div className={styles.mapMark}> <span className={styles.tooltiptext}>{text}</span></div>;

export default function MapContainer({coordinates}){
  const defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 0
  };

  console.log(coordinates);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '80%', position: 'absolute', right: '5px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {coordinates.features.map(({geometry, properties}, index) => (
          <AnyReactComponent
            key={index}
          lat={geometry.coordinates[1]}
            lng={geometry.coordinates[0]}
            text={properties.place}

        />
        ))}

      </GoogleMapReact>
    </div>
  );
}