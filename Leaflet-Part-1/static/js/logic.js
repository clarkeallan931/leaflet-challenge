let myMap = L.map("map", {
    center: [34.0549, -118.24],
    zoom: 6
  });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
var div = L.DomUtil.create('div', 'legend');
div.innerHTML = '<h3>Earthquake Depth </h3>';
var labels = ['>90 km', '70-89 km', '40-69 km','10-39 km', '-10-10 km']; // Add your legend labels
var colors = ['#ff0000', '#FFA500', '#FFFF00','#ADFF2F','#00FF00']; // Add corresponding colors

for (var i = 0; i < labels.length; i++) {
    div.innerHTML += '<div class="legend-item"><div class="legend-color" style="background:' + colors[i] + '"></div> ' +
        labels[i] + '</div>';
}

return div;

}



legend.addTo(myMap);

let queryURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson';

d3.json(queryURL).then(function(response) {
    for (let i = 0; i < response.features.length; i++) { 
        let lat = response.features[i].geometry.coordinates[1];
        let lon = response.features[i].geometry.coordinates[0];
        let depth = response.features[i].geometry.coordinates[2];
        let mag = response.features[i].properties.mag;

        L.circle([lat, lon], {
            color: chooseColor(depth),
            fillColor: chooseColor(depth),
            fillOpacity: 0.75,
            radius: circlesize(mag)
        }).bindPopup(`<h1>Place:${response.features[i].properties.place}</h1> <hr> <h3> Magnitude:${response.features[i].properties.mag}`).addTo(myMap); 
    }
});


function circlesize(mag) {
    if (mag>8){
        return 1000000;
    } else if (mag>6){
        return 70000;
    } else if (mag > 4){
        return 50000;
    } else {
        return 10000;
    }
    ;
}

function chooseColor(depth) {
    if (depth>90){
        return 'red';
    }else if (depth>70){
        return 'orange';
    }else if (depth > 40){
        return 'yellow';
    }else if (depth >10) {
        return 'greenyellow';
    } else {
        return 'lime';
    }
 }

























//function chooseColor(x) {
   // if (x < 5) {return "yellow";
       // } else {return "red";}

//function circlesize (y) {
   // if (y > 10) {return 800;
      // } else {return 1000;}};

//d3.json(queryURL).then(function(response) {
  //  for (let i = 0; i < response.length; i++) {
   //     let lat = response.features[i].geometry.coordinates[1];
      //  let lon = response.features[i].geometry.coordinates[0];
//
     //   L.circle([lat, lon], {
      //      color: chooseColor(response.features[i].geometry.coordinates[2]),
      //      fillColor: chooseColor(response.features[i].geometry.coordinates[2]),
     //       fillOpacity: 0.75,
      //      radius: circlesize(response.features[i].properties.mag)
     //   }.addTo(myMap)

     //   )}});



        // Creating a GeoJSON layer with the retrieved data
      





  
  
  
  
    //    d3.json(queryURL).then(function(response) {
    
  
    // Loop through the data.
    //for (let i = 0; i < response.length; i++) {
  
      // Set the data location property to a variable.
      // let lat = response.features[i].geometry.coordinates[1];
     //  let lon = response.features[i].geometry.coordinates[0];
      // let size = parseInt(response.features[i].properties.mag);
      // let depth = parseInt(response.features[i].geometry.coordinates[2]);
  
      // Check for the location property.
      // if (size < 6) {
      //    L.circle([lat, lon], {
       //     radius: 500
       //   }).addTo(myMap);
       //  } else {
       //     L.circle([lat,lon], {
        //        radius: 200
       //     }).addTo(myMap);
       // }
    //}});
        //  .bindPopup(response[i].descriptor)
      
  
    
  
    // Add our marker cluster layer to the map.

  
  //};
  


  



  //d3.json(queryURL).then(function(response){
  //  console.log(response);
  //  console.log(response.features[0].geometry.coordinates[1]);
   // console.log(response.features[0].geometry.coordinates[0]);
   // console.log(response.features[0].properties.mag);
    //console.log(response.features[0].geometry.coordinates[2]);
    //console.log(parseInt(response.features[0].geometry.coordinates[2]));

//})




