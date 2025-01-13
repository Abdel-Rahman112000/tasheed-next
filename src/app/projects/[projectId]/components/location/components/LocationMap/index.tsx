"use client";
import "leaflet/dist/leaflet.css";
import { WithProjectProps } from "@/app/projects/[projectId]/page";
import { TileLayer, MapContainer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import MapMarker from "@/assets/images/map-marker.png";

const MarkerHeight = 42,
  MarkerWidth = (MapMarker.width * MarkerHeight) / MapMarker.height;

function LocationMap({ project }: WithProjectProps) {
  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={[31.22719451724929, 29.937924769501244]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[31.22719451724929, 29.937924769501244]}
        icon={
          new Icon({
            iconUrl: MapMarker.src,
            iconSize: { x: MarkerWidth, y: MarkerHeight } as any,
          })
        }
      ></Marker>
    </MapContainer>
  );
}

export default LocationMap;
