let quotes = [
  ["Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"],
  ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
  ["I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale"],
  [" You miss 100% of the shots you don’t take.", "Wayne Gretzky"],
  [" I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "Michael Jordan"],
  ["Life is what happens to you while you’re busy making other plans. ", "John Lennon"]
];
let colors = [];
while (colors.length < 100) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}
console.log(colors);
// function randomize(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// };


$(document).ready(function(){
  $("#new-quote").click(function(){
    let quote= quotes[Math.floor(Math.random() * quotes.length)];
    quotes.splice(Math.floor(Math.random() * quotes.length),1)
    $("body").css({"backgroundColor" : colors[Math.floor(Math.random() * colors.length)]});
    $(".wrapper").css({"backgroundColor" : colors[Math.floor(Math.random() * colors.length)+1]});
    $("#footer").css({"color" : colors[Math.floor(Math.random() * colors.length)+1]});
    $("#text").text(quote[0]);
    $(".quote-author").text(quote[1]);
  });
});
