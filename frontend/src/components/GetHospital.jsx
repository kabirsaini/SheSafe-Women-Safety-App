import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useEffect, useState, useRef } from 'react';

const GetHospital = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [hospitalStations, setHospitalStations] = useState([]);
    const [selectedStation, setSelectedStation] = useState(null);

    const mapRef = useRef(null);

    // GET USER LOCATION
    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLocation({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            },
            () => setError("Permission denied or unavailable")
        );
    }, []);

    // HANDLE MAP LOAD → Initialize Places AND Search Nearby Hospitals
    const handleMapLoad = (map) => {
        mapRef.current = map;

        if (!location) return;

        const service = new window.google.maps.places.PlacesService(map);

        const request = {
            location: new window.google.maps.LatLng(location.lat, location.lng),
            radius: 5000,
            type: "hospital", // MUST BE ARRAY
        };

        service.nearbySearch(request, (results, status) => {
            console.log("Places API:", status);

            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setHospitalStations(results);
            } else {
                console.error("Nearby Search Error:", status);
            }
        });
    };

    // MAP STYLE
    const containerStyle = {
        width: "100%",
        height: "500px",
        borderRadius: "20px",
        overflow: "hidden",
        border: "2px solid #e0e0e0",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
    };

    return (
        <div style={{ padding: '20px', marginTop: '20px' }}>
            <h3 style={{ marginBottom: '20px' }}>Hospitals near you</h3>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!location ? (
                <p>Loading map...</p>
            ) : (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={13}
                    onLoad={handleMapLoad}
                >
                    {/* USER MARKER */}
                    <Marker
                        position={location}
                        label={{ text: "You", color: "white", fontWeight: "bold" }}
                        icon={{ url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                        zIndex={1000}
                    />

                    {/* HOSPITAL MARKERS */}
                    {hospitalStations.map((place, i) => (
                        <Marker
                            key={i}
                            position={{
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng(),
                            }}
                            onClick={() => setSelectedStation(place)}
                        />
                    ))}

                    {/* INFO WINDOW */}
                    {selectedStation && (
                        <InfoWindow
                            position={{
                                lat: selectedStation.geometry.location.lat(),
                                lng: selectedStation.geometry.location.lng(),
                            }}
                            onCloseClick={() => setSelectedStation(null)}
                        >
                            <div>
                                <h4>{selectedStation.name}</h4>
                                <p>{selectedStation.vicinity}</p>
                                {selectedStation.rating && (
                                    <p>
                                        Rating: {selectedStation.rating} ({selectedStation.user_ratings_total} reviews)
                                    </p>
                                )}
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            )}
        </div>
    );
};

export default GetHospital;
