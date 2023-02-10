const toggle = document.querySelector('.slider')
const annual_price = document.querySelectorAll('.annually-price')
const month_price = document.querySelectorAll('.monthly-price')



    toggle.onclick = function(){
      for ( let i = 0; i < annual_price.length ; i++) {
        if (annual_price[i].style.display === "none"){
            month_price[i].style.display = "none";
            annual_price[i].style.display = "flex";
        }else {
            month_price[i].style.display = "flex";
            annual_price[i].style.display = "none";
        }
    }
    }