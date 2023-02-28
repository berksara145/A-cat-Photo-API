const API_KEY = "live_cwJduR2QZH0de7yGS2S2znpPmau5VZtfRhve08xMT8pdDcxRJA57tsmwur7SS1rp";

//calls the avaiable breeds by calling the api when site is loaded

/*it will make the api call get the names and ids of the breed 
then it will store the names and ids in arrays respectively
then set the id=breed p tag the stored names*/ 

const breeds = document.querySelector("#breeds")
const btn = document.querySelector("#add");
const label = document.querySelector("#label");
const breedBtn = document.querySelector("#breedChoice");

let SearchURL = "https://api.thecatapi.com/v1/images/search";

fetch("https://api.thecatapi.com/v1/breeds?limit=10&page=0", { 
        Headers : {
                "Content-Type" : "application/json",
                "x-api-key" : API_KEY
        },
    }).then(data => data.json())
    .then( data => {
        let allbreeds = "";
        for(let i = 0; i < data.length; i++){
            allbreeds += "Name: " + data[i].name + "<br>" + "\t Id: " + data[i].id + "<br>" ;
        }
        const breedID = data[0].id;
        breeds.innerHTML = allbreeds;
    })
    .catch(err => alert("couldn't get api call"))
 

btn.addEventListener('click', function (){
    fetch(SearchURL, { Headers : {
            "Content-Type" : "application/json",
            "x-api-key" : API_KEY
        }
    }).then(data => data.json())
    .then( data => {
        const url = data[0].url;
        document.getElementById("image").src = url;
        label.innerHTML = url;
    })
    .catch(err => alert("couldn't get api call"))
            
})   
breedBtn.addEventListener('click', function () {
    const breedId = document.querySelector("#breed").value;
    SearchURL += "?limit=20&breed_ids=" + breedId + "&has_breeds=true&include_breeds=false";
})

