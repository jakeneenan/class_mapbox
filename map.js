mapboxgl.accessToken =
  "pk.eyJ1IjoibmVlbmFuIiwiYSI6ImNsanlkb3J6MjAzZDYzaGxsZ2w0NDBkaDEifQ.R2hGm9Q0LfrGDebQdwrf0Q";

// This adds a new map to the screen and sets the min and max zoom and the center point and loads the style that you created in mapbox stuidio.
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/neenan/clk8hosvp033s01pc8amz74ch",
  zoom: 3.5,
  center: [-96, 37.5],
  maxZoom: 5,
  minZoom: 3,
  // maxBounds: [
  //   [-74.45, 40.45],
  //   [-73.55, 41],
  // ],
});

// Add a layer to the map, that layer is in the data folder, and that file is called turnstileData.geojson
map.on("load", function () {
  let layers = map.getStyle().layers;
  map.addLayer({
    id: "fires",
    type: "circle",
    source: {
      type: "geojson",
      data: "data/fire.geojson",
    },

    paint: {
      //   "circle-color": [
      //     "interpolate",
      //     ["linear"],
      //     ["get", "BRIGHTNESS"],
      //     320,
      //     "#ff4400",
      //     300,
      //     "#ffba31",
      //     250,
      //     "#ffffff",
      //   ],
      "circle-color": "#ff4400",
      "circle-stroke-color": "#4d4d4d",
      "circle-stroke-width": 0.5,
      //change the circle opacity to depend on the conficende field
      "circle-opacity": [
        "interpolate",
        ["linear"],
        ["get", "CONFIDENCE"],
        50,
        0.1,
        80,
        0.3,
        95,
        0.5,
      ],

      //   "circle-radius": [
      //     "interpolate",
      //     ["exponential", 2],
      //     ["zoom"],
      //     12,
      //     ["interpolate", ["linear"], ["get", "BRIGHTNESS"], -1, 10, -0.4, 1],
      //     15,
      //     ["interpolate", ["linear"], ["get", "BRIGHTNESS"], -1, 25, -0.4, 12],
      //   ],
    },
  });
});
