
const tablo=document.querySelector(".tablo");
const btns=document.querySelectorAll(".btn");
const btnres=document.querySelector(".btnreset");

btnres.addEventListener('click', ()=> {
  tablo.innerHTML='0';
})

const outfoo = (ev)=> {
  let tabn=ev.target.value;
  tablo.innerHTML=tabn;
}

for (let i=0; i<btns.length; i++)
{
  btns[i].addEventListener('click', outfoo)
}




