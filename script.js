
		var getDogImage=(url)=>{

			
			fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        
        document.getElementById("dog_img").src = data.message; 
      });
    }
  )
  .catch(function(err) {
    //console.log('Fetch Error :-S', err); 
    let url="https://dog.ceo/api/breeds/image/random";
    getDogImage(url);
  });

}

var getDogList=(url)=>{

			
			fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        
        for (const item in data.message) {
  

  var optionTag = document.createElement("OPTION"); 
  optionTag.value = item;
  optionTag.text = item;
  document.getElementById("dog_category").appendChild(optionTag);

   
}

      });
    }
  )
  .catch(function(err) {
   // console.log('Fetch Error :-S', err);

    let dogListAPI="https://dog.ceo/api/breeds/list/all";
    getDogList(dogListAPI);

  });

}

let url="https://dog.ceo/api/breeds/image/random";
getDogImage(url);


let dogListAPI="https://dog.ceo/api/breeds/list/all";
getDogList(dogListAPI);


var getBreedDog=()=>
{
	var dogBreed=document.getElementById('dog_category').value;
	

	var url=`https://dog.ceo/api/breed/${dogBreed}/images`;

	fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        var dogImg=data.message[0];
        document.getElementById("dog_img").src = dogImg; 
        

      });
    }
  )
  .catch(function(err) {
   // console.log('Fetch Error :-S', err);
    
  });



}

document.getElementById("dog_category").addEventListener("change", getBreedDog);

