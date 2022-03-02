//ORDER HOME
if(document.querySelector('.page-pin')){
  window.addEventListener('keydown',function(e){
   	if(e.key === 'Enter'){
   		location.href = 'orderhome.html';
   	}
  })
}

//ORDER BASE
if(document.querySelector('.option-selector')){
  
  const labels = document.querySelectorAll('.option-selector input');
  const next = document.querySelector('.option-selector .next');

  labels.forEach(function(l){
    // enable button if at least one box has been checked
    l.addEventListener('click',function(e){
      const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
      next.disabled = (checked===0);
    })
  })

  next.addEventListener('click',function(e){
    e.preventDefault();
    location.href = 'ordericing.html';
  })
}

//QUANTITY
if(document.querySelector('.counter') ){


  const form = document.querySelector('.counter');
  const btnPlus = document.querySelector('.count .increase');
  const btnMinus = document.querySelector('.count .decrease');
  const btnCart = document.querySelector('.cart button');
  const qty = form.querySelector('input');
  let count = 0;

  // initial form state
  form.reset();
  btnMinus.disabled = true;
  btnCart.disabled = true;

  qty.value = 0;

  btnPlus.addEventListener('click',function(e){
    e.preventDefault();
    if(count<12){
      count++;
      updateDisplay();
    }
  })
  
  btnMinus.addEventListener('click',function(e){
    e.preventDefault();
    if(count>0){
      count--;
      updateDisplay();
    }
  })

  btnCart.addEventListener('click',function(e){
    e.preventDefault();
    location.href = 'halfcart.html';
  })

  function updateDisplay(){
    qty.value = count;
    checkButtonState();
  }
  
  function checkButtonState(){
    if(count === 0){
      btnMinus.disabled = true;
      btnPlus.disabled = false;
      btnCart.disabled = true;
    } else if(count === 10) {
      btnMinus.disabled = false;
      btnPlus.disabled = true;
      btnCart.disabled = false;
    } else {
      btnMinus.disabled = false;
      btnPlus.disabled = false;
      btnCart.disabled = false;
    }
  }
  
}