"use client";
import { useEffect, useRef } from "react";

const GoogleMap = () => {
  const googleMapRef = useRef(null);
  const googleMap = useRef(null);

  const loadGoogleMapsScript = () => {
    if (window.google) {
      initializeMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBwluYefKGtA6APAxoWkIhcMmgE5ltZb1c`;
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      initializeMap();
    };
  };

  const initializeMap = () => {
    const mapProp = {
      center: new google.maps.LatLng(45.266959, 19.836998),
      zoom: 14,
    };

    googleMap.current = new google.maps.Map(googleMapRef.current, mapProp);

    const markerData = [
      `Soca Servis
      Đorđa Zličića 9
      Novi Sad 21000
      Serbia`,
      45.26685248977331,
      19.836984219044385,
    ];
    const marker = new google.maps.Marker({
      map: googleMap.current,
      clickable: true,
      title: markerData[0],
      position: new google.maps.LatLng(markerData[1], markerData[2]),
    });

    addInfoWindow(marker, markerData[0]);
  };

  const addInfoWindow = (marker, message) => {
    const infoWindow = new google.maps.InfoWindow({
      content: message,
    });

    marker.addListener("click", () => {
      infoWindow.open(googleMap.current, marker);
    });
  };

  useEffect(() => {
    loadGoogleMapsScript();

    return () => {
      if (googleMapRef.current) {
        googleMapRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={googleMapRef}
      className="rounded-[1rem] h-[30rem] md:h-[40rem] 2xl:h-[50rem] 3xl:h-[60rem] w-full"
    />
  );
};

export default GoogleMap;
