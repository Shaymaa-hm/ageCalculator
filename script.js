const input1 = document.getElementById('day');
input1.addEventListener('input', event => {
  if (input1.value === '') {
    input1.style.backgroundColor = '';
  } else {
    input1.style.backgroundColor = '';
  }
});

const input2 = document.getElementById('month');
input2.addEventListener('input', event => {
  if (input2.value === '') {
    input2.style.backgroundColor = '';
  } else {
    input2.style.backgroundColor = '';
  }
});

const input3 = document.getElementById('year');
input3.addEventListener('input', event => {
  if (input3.value === '') {
    input3.style.backgroundColor = '';
  } else {
    input3.style.backgroundColor = '';
  }
});

function calculateAge(){
  if (input1.value === '' || parseInt(input1.value)>32) {
    document.getElementById("daytitle").style.color = "red";
    input1.style.borderColor = 'red';
  }
  if(input2.value === '' || parseInt(input2.value)>12){
    document.getElementById("monthtitle").style.color = "red";
    input2.style.borderColor = 'red';
  }
  if(input3.value === '' || parseInt(input3.value)>2024){
    document.getElementById("yeartitle").style.color = "red";
    input3.style.borderColor = 'red';
  }
  if(input1.value != '' && input2.value != '' && input3.value != '' 
  && parseInt(input1.value)<32 && parseInt(input2.value)<12 && parseInt(input3.value)<2024){
    var d = document.getElementById('day').value;
  var m = document.getElementById('month').value;
  var y = document.getElementById('year').value;

  var currDate = new Date();
  var currD = currDate.getDate();
  var currM = 1 + currDate.getMonth();
  var currY = currDate.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 

  if(d > currD){
    currD = currD + month[currM - 1];
    currM = currM - 1;
  }
  if(m > currM){
    currM = currM + 12;
    currY = currY - 1;
  }

  var finalD = currD - d;
  var finalM = currM - m;
  var finalY = currY - y;

  document.getElementById('years').innerHTML = finalY;
  document.getElementById('months').innerHTML = finalM;
  document.getElementById('days').innerHTML = finalD;
}
}