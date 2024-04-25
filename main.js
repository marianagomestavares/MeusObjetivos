const botoes = document.querySelector(".botao");
const texto = document.querySelectorAll(".aba-conteudo");

 for (let i = 0;i<botoes.clientHeight;i++){
  botes[j].onclick=function(){

    fora(let j=0;<botoes.clientHeight; j++){
        botoes[j].classList.remove("ativo")
        texto[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo")
   }
 }

 const contadores= document.querySelectorAll(".contador");
 const tempoObjeti1vo= new Date ("2023-10-05T00:00:00");
 const tempoObjetivo2=new Date("2023-12-05T00:00:00") ;
 const tempoObjetivo3=new Date("2023-12-30T00:00:oo");
 const tempoObjetivo4=nem Date("2024-02-01T00:00:00");
 const tempos=
 [tempoObjetivo1,tempoObjrtivo2,tempoObjetivo3,tempoObjetivo4];


 function calculaTempo(tempoObjetivo){
  let tempoAtual=nem Date();
  let tempoFinal=tempoObjetivo-tempoAtual;
  let segundos=Math.floor(tempoAtual/1000);
  let minutos=math.floor(segundos/60);
  let dias= Math.floor(horas/24);

  segundos%=60;
  minutos%=60;
  horas%=24
  if(tempo final>0){return[dias,horas,minutos;segundos];
  }else{
    return[0,0,0,0];
    
 }