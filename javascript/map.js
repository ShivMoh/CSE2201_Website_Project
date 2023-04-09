//Initialization of variables
var address = "Georgetown Guyana"
var key = "89223c37cb6c40ccb0b278dc2c7c66f7"
let centerLat = 6.810062
let centerLong = -58.1471139

let boundArr = new Array(); // array to store boundaries
let temp_store = new Array() // array temporary storage object.

boundArr = setPerimeter(dis = 100) // initialize boundaries to perimeter
createMap()

//Map functionality
function createMap() {
    map = L.map('map').setView([centerLat, centerLong], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

    marker = L.marker([centerLat, centerLong]).addTo(map);
}

//Additional map functionality
function setPerimeter(lat = centerLat, lng = centerLong, dis = 2) {
    let arr = new Array()
    lng1 = lng + dis/111  
    lng2 = lng - dis/111

    lat1 = lat + dis/111
    lat2 = lat - dis/111

    if(lng1 < lng2) {
        arr.push(lng1)
        arr.push(lng2)
    } else {
        arr.push(lng2)
        arr.push(lng1)
    }

    if(lat1 < lat2) {
        arr.push(lat1)
        arr.push(lat2)
    } else {
        arr.push(lat2)
        arr.push(lat1)
    }
    return arr
}