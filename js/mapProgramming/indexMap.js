document.addEventListener("DOMContentLoaded", () => {
  const bounds = [
    [0, -83], // suroeste
    [15, -70] // noreste
  ];

  const map = L.map("map1", {
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    minZoom: 5,
    maxZoom: 18
  }).setView([7.5, -76.5], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // Archivos GeoJSON con etiquetas y colores
  const capas = [
    {
      nombre: "Caribe continental",
      archivo: "/assets/data/vector/geojson_gml/georefPictures/continentalCaribeanJoinedPictures.geojson",
      color: "#EC407A"
    },
    {
      nombre: "Caribe insular",
      archivo: "/assets/data/vector/geojson_gml/georefPictures/insularCaribeanJoinedPictures.geojson",
      color: "#377eb8"
    },
    {
      nombre: "Pacífico continental",
      archivo: "/assets/data/vector/geojson_gml/georefPictures/continentalPacificJoinedPictures.geojson",
      color: "#4daf4a"
    },
    {
      nombre: "Pacífico insular",
      archivo: "/assets/data/vector/geojson_gml/georefPictures/insularPacificJoinedPictures.geojson",
      color: "#984ea3"
    }
  ];

  capas.forEach(({ archivo, color, nombre }) => {
    fetch(archivo)
      .then(response => {
        if (!response.ok) throw new Error(`Error cargando ${archivo}`);
        return response.json();
      })
      .then(data => {
        L.geoJSON(data, {
          onEachFeature: (feature, layer) => {
            const props = feature.properties || {};
            let popupContent = "<strong>Metadatos:</strong><ul>";

            // Mostrar todas las propiedades en lista
            for (const key in props) {
                if (props.hasOwnProperty(key) && key !== "localPath") {
                popupContent += `<li><strong>${key}:</strong> ${props[key]}</li>`;
                }
            }
    popupContent += "</ul>";

    // Si hay una imagen local, mostrarla después de los metadatos
    if (props.localPath) {
        popupContent += `<img src="${props.localPath}" style="width:100%; max-height:150px; margin-top:8px;">`;
    }

    layer.bindPopup(popupContent);
    },
          pointToLayer: (feature, latlng) => {
            return L.circleMarker(latlng, {
              radius: 6,
              fillColor: color,
              color: "#000",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.8
            });
          }
        }).addTo(map);
      })
      .catch(error => {
        console.error("No se pudo cargar el archivo GeoJSON:", error);
      });
  });

  // Crear leyenda
  const legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    const div = L.DomUtil.create("div", "info legend");
    div.innerHTML += "<h2>Fotografías</h2>";
    capas.forEach(({ nombre, color }) => {
      div.innerHTML += `
        <i style="background:${color}; width: 12px; height: 12px; display:inline-block; margin-right: 6px;"></i> ${nombre}<br>
      `;
    });
    return div;
  };

  legend.addTo(map);
});
