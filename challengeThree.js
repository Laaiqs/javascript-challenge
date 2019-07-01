
function change(colour){

  document.getElementById("text").innerHTML = "hi, my name is "+ colour;

    document.getElementById('result').style.background = colour;

    var sum =0;
    for (var i = 0; i < colour.length; i++) {
          sum+= colour.charCodeAt(i);
    }

  document.getElementById("calc").innerHTML = sum;


}
