const brand = document.querySelectorAll('.brand img')

function logo(){
  brand.forEach(el=>{
    el.classList.toggle('disable')
  })
}

setInterval(()=>logo(), 1000);
