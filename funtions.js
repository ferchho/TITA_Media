// API parameters.
API_KEY = "z45KvTWtg3Z8mgAvsi6LNXXRMd8INYRazwJGTw2VjuU";
apiUrl = "https://api.unsplash.com/photos/?client_id="+API_KEY+"&per_page=30";

imageURLS = [];

window.onload = (event) => {
    fetchData();
}

const fetchData = async () => {

    const response = await (fetch(apiUrl).catch(handleError));
    const myJson = await response.json();

    var imageArrays = myJson;

    imageArrays.forEach(element => {
        imageURLS.push(element.urls.small);
    });

    displayImage();
    getYear();
}

var handleError = function(err) {
    console.warn(err);
    errorGrid.innerHTML = "<h4>Unable to fetch data "+err+"</h4>";
}

function displayImage() {
    const col1 = document.getElementById("col1");
    const col2 = document.getElementById("col2");
    const col3 = document.getElementById("col3");
    const errorG = document.getElementById("errorG");

    errorG.innerHTML = "";
    if(imageURLS.length == 0) {
        errorG.innerHTML = "<h4>Unable to fetch data.</h4>";
        return;
    }

    col1.innerHTML = "<img src='https://img.freepik.com/vector-premium/plantilla-diseno-logotipo-tienda-letra-b-simbolo-tienda-online_18099-2033.jpg?w=2000' width='95%'>";
    col2.innerHTML = "";
    col3.innerHTML = "";

    imageURLS.forEach((url,index) => {
        // dynamic image tag 
        var image = document.createElement('img');
        image.src = url;
        image.setAttribute("width", "95%");

        if( (index + 1) % 3 == 0 ) {
            col1.appendChild(image);
        }
        if( (index + 2) % 3 == 0 ) {
            col2.appendChild(image);
        }
        if( (index + 3) % 3 == 0 ) {
            col3.appendChild(image);
        }
        
    });

}

function getYear(){
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("spanYear").innerHTML = year;
}

function collapseMenu() {
    var x = document.getElementsByClassName("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }