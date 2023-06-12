// // import React, { Component } from "react";
// // import { Map, GoogleApiWrapper } from "google-map-react";
// // class MapContainer extends Component {
// //   render() {
// //     return (
// //       <Map
// //         google={this.props.google}
// //         zoom={8}
// //         // style={mapStyles}
// //         style={{
// //           width: "100%",
// //           height: "100%",
// //         }}
// //         initialCenter={{ lat: 30.66643, lng: 76.86129 }}
// //       />
// //       // {/* {this.displayMarkers()} */}
// //       //   {/* </Map> */}
// //     );
// //   }
// // }

// // export default GoogleApiWrapper({
// //     apiKey:"AIzaSyDgTXPf5ou4iMy5ZYEzBbUYX8zhxsxtqVA"
// // })(MapContainer)

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const position = [30.66643, 76.86129];
import { Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useRef } from "react";

const MapComponent = () => {
  const theme = useTheme();
  console.log(theme.palette.mode);
  const markerRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const isDarkMode = theme.palette.mode === "dark";
  const mapContainerStyle = {
    height: "100%",
    width: "100%",
    filter: isDarkMode
      ? "invert(100%) hue-rotate(180deg) brightness(100%) contrast(92%)"
      : "brightness(95%) contrast(95%)",
    borderRadius: "8px", // Adjust the value as per your preference
  };

  const mapOptions = {
    attributionControl: false, // Disable attribution control
    scrollWheelZoom: false, // Disable zooming on scroll
  };

  return (
    <div style={mapContainerStyle}>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        style={{
          height: "100%",
          width: "100%",
          minHeight: 300,
          borderRadius: "10px",
        }}
        {...mapOptions}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution={false}
        />
        <Marker position={position} ref={markerRef}>
          <Popup
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                // color: theme.palette.text.primary,
                color: theme.palette.mode === "dark" ? "#070707" : "#212121",
              }}
            >
              Tejas Ravindra Rote
            </Typography>
            <Typography
              variant="body1"
              sx={{
                // color: theme.palette.text.primary,
                color: theme.palette.mode === "dark" ? "#070707" : "#212121",
              }}
            >
              Sector-20, Panchkula
            </Typography>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
