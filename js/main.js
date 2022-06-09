
const tablo=document.querySelector(".tablo");
const btns=document.querySelectorAll(".btn");

const outfoo = (ev)=> {
  let tabn=ev.target.value;
  tablo.innerHTML=tabn;
}

for (let i=0; i<btns.length; i++)
{
  btns[i].addEventListener('click', outfoo)
}


