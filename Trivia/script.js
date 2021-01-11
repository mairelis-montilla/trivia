let saveName;
let sayHi;
let counterRight=0;
let counterWrong=0;
let name;
const congrats= document.getElementById("congrats")
//Contenedores para ocultar mostrar
const welcomeContainer= document.getElementById("welcome-container");
const sayHiContainer=document.getElementById("sayHi-container")

const questionA1 =document.getElementById("qa1-container");
const questionA2 = document.getElementById("qa2-container");
const questionA3 = document.getElementById("qa3-container");
const questionB1 = document.getElementById("qb1-container");
const questionB2 = document.getElementById("qb2-container");
const questionB3 = document.getElementById("qb3-container");
const scoreContainer=document.getElementById("score-container");

const remember=document.getElementById("remember");
const PrintScoreRigth=document.getElementById("score-right");
const PrintScoreWrong=document.getElementById("score-wrong");

const buttonName = document.getElementById("button");

buttonName.addEventListener("click",()=>{  
   name = document.getElementById("name");
 saveName = name.value;
 sayHi= document.getElementById("sayHi");
 sayHi.innerHTML=(`Hola ${saveName}`)
 if(saveName){
 powerOff(welcomeContainer);
 powerOn(sayHiContainer);
 }
else{
  powerOn(remember)
}
 }
 )


//botones de pantalla2 
const places = document.getElementById("button-a");
places.addEventListener("click",()=> {
  powerOff(sayHiContainer);
  powerOn(questionA1)
  ;
})
const events = document.getElementById("button-b");
events.addEventListener("click",()=> {
  powerOff(sayHiContainer);
  powerOn(questionB1);
})

//botones de respuestaP1A//
const piramidesFalseA1 = document.getElementById("piramidesFalseA1");
piramidesFalseA1.addEventListener("click",()=>{
  counterWrong++;
  powerOff(questionA1);
  powerOn(questionA2);
});

const temploFalseA1 =document.getElementById("temploFalseA1");
temploFalseA1.addEventListener("click",()=>{
  counterWrong++;
  powerOff(questionA1);
  powerOn(questionA2);
});

const huacasTrueA1 = document.getElementById("huacasTrueA1");
huacasTrueA1.addEventListener("click",()=>{
  counterRight++;
  powerOff(questionA1);
  powerOn(questionA2);
  });

  const ningunaFalseA1=document.getElementById("ningunaFalseA1");
ningunaFalseA1.addEventListener("click",()=>{
  counterWrong++;
  powerOff(questionA1);
  powerOn(questionA2);
});
//Botones pregunta A2
const firstFalsetButtonA2 = document.getElementById("false1535A2");
firstFalsetButtonA2.addEventListener("click",()=>{
  counterWrong++;
  powerOff(questionA2);
  powerOn(questionA3);
})
const secondFalseButtonA2= document.getElementById("false1821A2");
secondFalseButtonA2.addEventListener("click", ()=>{
    counterWrong++;
  powerOff(questionA2);
  powerOn(questionA3);
});
const thirdFalseButtonA2=document.getElementById("false1998A2");
thirdFalseButtonA2.addEventListener("click",()=>{
  counterWrong++;
  powerOff(questionA2);
  powerOn(questionA3);
});
const onlyRightA2=document.getElementById("true1991A2");
onlyRightA2.addEventListener("click",()=>{
   counterRight++;
  powerOff(questionA2);
  powerOn(questionA3);
});

//  Botones Pregunta A3

const firstFalsetButtonA3= document.getElementById("mirafloresfalseA3");

firstFalsetButtonA3.addEventListener("click",()=>{
    counterWrong++;
    saveScore();
  powerOff(questionA3);
  powerOn(scoreContainer);
})
const onlyRigthA3=document.getElementById("callaotrueA3");
onlyRigthA3.addEventListener("click",()=>{
 counterRight++; 
 saveScore();
  powerOff(questionA3);
  powerOn(scoreContainer);
})
const secondFalseButtonA3=document.getElementById("barrancofalseA3");
secondFalseButtonA3.addEventListener("click",()=>{
 counterRight++; 
 saveScore();
  powerOff(questionA3);
  powerOn(scoreContainer);
})
const thirdFalseButtonA3=document.getElementById("rimacfalseA3");
thirdFalseButtonA3.addEventListener("click",()=>{
 counterRight++; 
 saveScore();
  powerOff(questionA3);
  powerOn(scoreContainer);
})
//Botones pregunta SUCESOS
//PreguntaB1 
const firmaActaFalseB1 = document.getElementById("firmaActaFalseB1");firmaActaFalseB1.addEventListener("click",()=>{
counterWrong++
powerOff(questionB1)
powerOn(questionB2)
})
const firmaTratadoFalseB1 = document.getElementById("firmaTratadoFalseB1");
firmaTratadoFalseB1.addEventListener("click",()=>{
counterWrong++
powerOff(questionB1)
powerOn(questionB2)
})
const composicionTrueB1 = document.getElementById("composicionTrueB1");
composicionTrueB1.addEventListener("click",()=>{
counterRight++;
powerOff(questionB1)
powerOn(questionB2)
})
const primeraFalseB1 = document.getElementById("primeraFalseB1");
primeraFalseB1.addEventListener("click",()=>{
counterWrong++
powerOff(questionB1)
powerOn(questionB2)
})

//Pregunta 2B
const edificioFalseB2 = document.getElementById("edificioFalseB2");
edificioFalseB2.addEventListener("click",()=>{
counterWrong++
powerOff(questionB2)
powerOn(questionB3) 
})
const salaFalseB2 = document.getElementById("salaFalseB2");
salaFalseB2.addEventListener("click",()=>{
counterWrong++
powerOff(questionB2)
powerOn(questionB3) 
})
const museoFalseB2 = document.getElementById("museoFalseB2");
museoFalseB2.addEventListener("click",()=>{
counterWrong++
powerOff(questionB2)
powerOn(questionB3) 
})
const estacionTrueB2 = document.getElementById("estacionTrueB2");
estacionTrueB2.addEventListener("click",()=>{
counterRight++;
powerOff(questionB2)
powerOn(questionB3)
})

//Pregunta 3B
const sanMarcosFalseB3 = document.getElementById("sanMarcosFalseB3");
sanMarcosFalseB3.addEventListener("click",()=>{
counterWrong++;
saveScore();
powerOff(questionB3)
powerOn(scoreContainer)
})
const colegioFalseB3= document.getElementById("colegioFalseB3");
colegioFalseB3.addEventListener("click",()=>{
counterWrong++;
saveScore();
powerOff(questionB3)
powerOn(scoreContainer)
})
const universidadTrueB3 = document.getElementById("universidadTrueB3");
universidadTrueB3.addEventListener("click",()=>{
counterRight++;
saveScore();
powerOff(questionB3)
powerOn(scoreContainer)
})

const ningunaFalse3B = document.getElementById("ningunaFalse3B");
ningunaFalse3B.addEventListener("click",()=>{
counterWrong++;
saveScore();
powerOff(questionB3)
powerOn(scoreContainer)

})

function saveScore(){
   congrats.innerHTML=(`Felicitaciones,
   ${saveName}`);
PrintScoreRigth.innerHTML=(`Respuestas  correctas: ${counterRight}`);
PrintScoreWrong.innerHTML=(`Respuestas incorrectas: ${counterWrong}` );
}


const change =document.getElementById("change");
change.addEventListener("click",()=>{
  powerOff(scoreContainer);
  powerOn(sayHiContainer);
  counterRight="0";
  counterWrong="0";
 
})

const goHome= document.getElementById("goHome");
goHome.addEventListener("click",()=>{
  saveName="";
  name.value="";
  counterRight=0;
  counterWrong=0;
  powerOff(scoreContainer);
  powerOn(welcomeContainer);
})
// Funciones para Mostrar y ocultar 


function powerOff(element){
  element.classList.add("power-off")

}

function powerOn(element){
  element.classList.remove("power-off")
}
 