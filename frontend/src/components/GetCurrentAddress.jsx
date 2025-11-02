import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useEffect, useState, useRef } from 'react';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const GetCurrentAddressWithMap = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [policeStations, setPoliceStations] = useState([]);
    const [selectedStation, setSelectedStation] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [placesService, setPlacesService] = useState(null);
    const libraries = ["places"];
    console.log(location);

    const mapRef = useRef(null);

    // Get current location
    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const coords = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                };
                setLocation(coords);
            },
            () => {
                setError("Permission denied or unavailable");
            }
        );
    }, []);


    // Initialize PlacesService when map is loaded
    useEffect(() => {
        if (mapLoaded && window.google && window.google.maps && window.google.maps.places) {
            try {
                const service = new window.google.maps.places.PlacesService(mapRef.current);
                setPlacesService(service);
            } catch (err) {
                console.error("Failed to initialize PlacesService:", err);
                setError("Failed to initialize map services");
            }
        }
    }, [mapLoaded]);

    // Search for police stations when location and places service are ready
    useEffect(() => {
        if (location && placesService) {
            const request = {
                location: new window.google.maps.LatLng(location.lat, location.lng),
                radius: 10000, // 10 km search
                type: "police",
            };

            try {
                placesService.nearbySearch(request, (results, status) => {
                    console.log("Places API status:", status);
                    
                    if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                        setPoliceStations(results);
                    } else {
                        console.error("Places API error:", status);
                        if (status === window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                            console.log("No police stations found in the area");
                        }
                    }
                });
            } catch (err) {
                console.error("Error calling nearbySearch:", err);
            }
        }
    }, [location, placesService]);

    const handleMapLoad = (map) => {
        mapRef.current = map;
        setMapLoaded(true);
    };

    return (
        <div>
            <h3>Police Stations near by You </h3>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <LoadScript 
                googleMapsApiKey="AIzaSyDKu-HIFLE5XrCNmndmrIsOyD9TQI5ac2A" 
                libraries={libraries}
                onError={(err) => console.error("Google Maps API load error:", err)}
            >
                {location ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={13}
                        onLoad={handleMapLoad}
                        onUnmount={() => setMapLoaded(false)}
                    >
                        {/* Marker for your location */}
                        <Marker 
                            position={location} 
                            label={{text: "You", color: "white", fontWeight: "bold"}}
                            icon={{
                                url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                            }}
                            zIndex={1000} // Ensure it appears on top
                        />
                        

                        {/* Markers for police stations */}
                        {policeStations.map((place, i) => (
                            <Marker
                                key={i}
                                position={{
                                    lat: place.geometry.location.lat(),
                                    lng: place.geometry.location.lng(),
                                }}
                                onClick={() => setSelectedStation(place)}
                            />
                        ))}

                        {/* Window for selected police station */}
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
                                        <p>Rating: {selectedStation.rating} ({selectedStation.user_ratings_total} reviews)</p>
                                    )}
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                ) : (
                    <p>Loading map...</p>
                )}
            </LoadScript>
        </div>
    );
};

export default GetCurrentAddressWithMap;