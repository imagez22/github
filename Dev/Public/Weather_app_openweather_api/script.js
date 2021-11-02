//selectors
var button= document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name= document.querySelector('.name');
var desc= document.querySelector('.desc');
var temp= document.querySelector('.temp');

//event listeners
button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=8b2fed32f7f9348510b3efe0ecaaa5e8')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;

  })
  .catch(err => alert("Invalid city name!"))
})

//functions
