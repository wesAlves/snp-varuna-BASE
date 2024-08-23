import './App.css'
import {} from "@progress/kendo-theme-material"
import {SnpAppBar} from "./components/SnpAppBar.tsx";
import {SnpDrawer} from "./components/SnpDrawer.tsx";
import {Drawer, DrawerContent, Splitter, SplitterOnChangeEvent} from "@progress/kendo-react-layout";
import * as React from "react";

import {
    Map,
    TileUrlTemplateArgs,
    MapLayers,
    MapShapeLayer,
    MapTileLayer,
    MapMarkerLayer,
} from "@progress/kendo-react-map";
import {ShapeOptions} from "@progress/kendo-drawing";

const center = [30.2686, -97.7494];

const tileSubdomains = ["a", "b", "c"];
const tileUrl = (e: TileUrlTemplateArgs) =>
    `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution =
    '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';

const geoShapes = [
    {
        type: "Polygon",
        coordinates: [
            // Note that GeoJSON coordinates are listed as Longitude, Latitude (X, Y).
            // Map locations are typically listed as Latitude, Longitude as in the other Map properties.
            [
                [-97.7409, 30.2675],
                [-97.7409, 30.2705],
                [-97.749, 30.2707],
                [-97.7494, 30.2686],
                [-97.7409, 30.2675],
            ],
        ],
    },
];
const shapeStyle: ShapeOptions = {
    fill: {
        color: "#fff",
        opacity: 0.5,
    },
    stroke: {
        width: 3,
        color: "#bbb",
    },
};

const markers = [
    {latlng: [30.2675, -97.7409], name: "Zevo Toys"},
    {latlng: [30.2707, -97.749], name: "Foo Bars"},
    {latlng: [30.2705, -97.7409], name: "Mainway Toys"},
    {latlng: [30.2686, -97.7494], name: "Acme Toys"},
];


function App() {

    const [panes, setPanes] = React.useState<Array<any>>([
        {},
        {size: "30%", min: "20px", collapsible: true, collapsed: true, max: "600px", scrollable: true},
    ]);
    const onChange = (event: SplitterOnChangeEvent) => {
        setPanes(event.newState);
    };

    // @ts-ignore
    return (
        <>
            <div style={{background: "#ff0000"}}><SnpAppBar/></div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "16p",
                height: "95vh",
                background: "#ccc",
                margin: 0
            }}>

                <SnpDrawer>
                    <Splitter panes={panes} onChange={onChange} style={{height: "95vh", background: "yellow"}}>
                            <Map center={center} zoom={15} className="pane-content" style={{height:"100vh"}}>
                                <MapLayers>
                                    <MapTileLayer
                                        urlTemplate={tileUrl}
                                        subdomains={tileSubdomains}
                                        attribution={attribution}
                                    />
                                    <MapShapeLayer data={geoShapes} style={shapeStyle}/>
                                    <MapMarkerLayer
                                        data={markers}
                                        locationField="latlng"
                                        titleField="name"
                                    />
                                </MapLayers>
                            </Map>
                        <div className="pane-content">
                            <h3>Inner splitter / right pane</h3>
                            <p>Resizable and collapsible.</p>
                        </div>
                    </Splitter>

                </SnpDrawer>

            </div>
        </>
    )
}

export default App
