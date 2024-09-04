"use client";
import { useEffect, useRef } from "react";

const GoogleMapPartners = ({ partners }) => {
  const googleMapRef = useRef(null);
  const googleMap = useRef(null);
  const markersRef = useRef([]);

  const initializeMap = () => {
    if (!googleMapRef.current) return;

    const mapOptions = {
      center: new google.maps.LatLng(44.0165, 21.0059),
      zoom: 7,
    };

    googleMap.current = new google.maps.Map(googleMapRef.current, mapOptions);

    partners.forEach((partner, index) => {
      const lat = parseFloat(partner.lat);
      const lng = parseFloat(partner.lng);

      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = new google.maps.Marker({
          map: googleMap.current,
          clickable: true,
          title: `${partner.servis} - ${partner.grad}`,
          position: new google.maps.LatLng(lat, lng),
        });

        markersRef.current.push(marker);

        const infoWindow = new google.maps.InfoWindow({
          content: `<div><strong>${partner.servis}</strong><br>${partner.adresa}<br>${partner.tel}</div>`,
        });

        marker.addListener("click", () => {
          infoWindow.open(googleMap.current, marker);
          googleMap.current.setZoom(14);
          googleMap.current.setCenter(marker.getPosition());
        });
      } else {
        console.error(
          `Invalid coordinates for partner ${partner.servis} in ${partner.grad}`
        );
      }
    });

    document.querySelectorAll("[data-partner-index]").forEach((element) => {
      element.addEventListener("click", () => {
        const index = element.getAttribute("data-partner-index");
        const marker = markersRef.current[index];
        if (marker) {
          google.maps.event.trigger(marker, "click");
        }
      });
    });
  };

  const loadGoogleMapsScript = () => {
    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      if (
        !document.querySelector(
          `script[src^="https://maps.googleapis.com/maps/api/js"]`
        )
      ) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBwluYefKGtA6APAxoWkIhcMmgE5ltZb1c`;
        script.async = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        document
          .querySelector(
            `script[src^="https://maps.googleapis.com/maps/api/js"]`
          )
          .addEventListener("load", initializeMap);
      }
    }
  };

  useEffect(() => {
    loadGoogleMapsScript();

    return () => {
      if (googleMapRef.current) {
        googleMapRef.current.innerHTML = "";
      }

      markersRef.current.forEach((marker) => {
        google.maps.event.clearInstanceListeners(marker);
      });

      markersRef.current = [];
    };
  }, []);

  return (
    <div
      ref={googleMapRef}
      className="rounded-[1rem] h-[30rem] md:h-[60rem] 2xl:h-[80rem] 3xl:h-[100rem] w-full"
    />
  );
};

export default GoogleMapPartners;
