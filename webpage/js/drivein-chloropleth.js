// drivein-chloropleth.js

function addColor(n) {
  return  n > 25 ? "#262240" :
          n > 20 ? "#2E294E" :
          n > 15 ? "#544F6E" :
          n > 10 ? "#7A768E" :
          n > 5 ? "#A09DAE" :
          n > 1 ? "#C6C4CE" :
                  "#ECEBEE"
}


function style(features) {
	return {
    fillColor: addColor(features.properties.driveIns),
    weight: 2,
    opacity: 1,
    color: "#eeeeee",
    dashArray: '3',
    fillOpacity: 0.9
  };
}


function highlightState(event) {
  var layer = event.target;

  layer.setStyle({
    weight: 4,
    color: "#999",
    dashArray: "",
    fillOpacity: 0.9
  });

  info.update(layer.feature.properties)

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}

function resetHighlight(event) {
  geoJson.resetStyle(event.target);
  info.update();
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightState,
    mouseout: resetHighlight
  });
}


var stateCount = {};

for (i = 0; i < driveIns.length; i++) {
  var state = driveIns[i]["state"];
  if (stateCount[state]) {
    stateCount[state] += 1;
  } else {
    stateCount[state] = 1;
  }
}


for (i = 0; i < statesData["features"].length; i++) {
	var state = statesData["features"][i]["properties"]["name"];
	statesData["features"][i]["properties"]["driveIns"] = stateCount[state] || 0;
}



var map = L.map("map").setView([38.01, -95.84], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 17,
	attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
}).addTo(map);


var geoJson = L.geoJson(statesData,
  {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(map);

//LEGEND
var legend = L.control({position: 'bottomright'});

legend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        teams = [1,5,10,15,20,25];

    for (var i = 0; i < teams.length; i++) {
      div.innerHTML +=
        "<span style='background:" + addColor(teams[i] + 1) + "'></span> " +
        teams[i] + "<br>";
    }

    return div;
};

legend.addTo(map);


//INFORMATION BOX

var info = L.control();

info.onAdd = function(map) {
  this.div = L.DomUtil.create("div", "info");
  this.update();
  return this.div;
};

info.update = function(properties) {
  this.div.innerHTML = "<p>Number of Open Drive-In Theaters</p>" + (properties ?
  "<p><strong>State</strong>: " + properties.name +"</p>" +
  "<p><strong>Drive-Ins:</strong> " + properties.driveIns + "</p>" :
  "Hover over a state.")
};

info.addTo(map);
