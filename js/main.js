const equations = document.getElementsByTagName('eq');
const tabs = document.getElementsByClassName('tab');
let variables = [];

$('input[type=checkbox]').change(function(){
  if($(this).is(':checked')) {
    variables.push($(this).val());
  } else {
    let index = variables.indexOf($(this).val());
    if (index >= 0) {
      variables.splice(index, 1);
    }
  }
  if (variables.length == 0) {
    for (let i = 0; i < equations.length; i++) {
      equations[i].style.display = 'none';
    }
    document.getElementById('equations').style.display = 'none';
  } else {
    document.getElementById('equations').style.display = 'inline-block';
    for (let i = 0; i < equations.length; i++) {
      let containsAll = true;
      for (let j = 0; j < variables.length; j++) {
        if (!equations[i].className.includes(variables[j])) {
          containsAll = false;
          break;
        }
      }
      if (containsAll) {
        equations[i].style.display = 'inline';
      } else {
        equations[i].style.display = 'none';
      }
    }
  }
});

let setActive = function() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  this.classList.add('active');
};

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', setActive, false);
}
