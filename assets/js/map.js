
//let apiKey= "AIzaSyCDnioJ-4sjgwHmUDaEb5KZmnHYSO7E-Ss";
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }

    });
    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let locations = [
        { lat: 40.785091, lng: -73.8968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];
    let markers = locations.map(function (location, i) {// this map method here is a built-in JavaScript method.The map method in JavaScript works similar to a forEach() function.
        //The difference is that this returns an array with the results of looping through each item in our locations array.
        // the first argument :location, which is the current value of where we are in the array as we're looping through.
        //The second one is i, which is the index number of where we currently are in the array.
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length] //The reason for using the %operator is so that if we have more than 26 locations, then it will loop around to the start of our string again and go from Z back to A, instead of throwing an error.
        });
    });
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}
