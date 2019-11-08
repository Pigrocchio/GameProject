# clients 
* aggiustare tempo di entrata
* 
 deve uscire quando il timer interno arriva a 0 = non esce
 deve ridisegnardlo quando esce


 
#ingredient
generazione e disegno di più ingredienti --> generate ingredintes con push, da mettere dentro a reset (stato iniziale del gioco)


push in un array del selezionato

// confronto tra array: let isEqual = function (a,b)  {
  
  if(a.length!=b.length) 
   return "False"; 
  else
  { 
    for(let i=0;i<a.length;i++) 
   if(a[i]!=b[i]) 
    return "False"; 
    return "True"; 
  } 
} 
isEqual(uno,due)