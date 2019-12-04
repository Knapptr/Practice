// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory =(specimenNum, dna)=>{
  return{
    specimenNum,
    dna,
    mutate(){
     var index = Math.floor(Math.random() * this.dna.length);
     console.log(this.dna[index])//Index to be replaced 
     var replacer = ''
  
    do{   var replaceIndex = Math.floor(Math.random()* 4);
       
     switch(replaceIndex){
        case 0:
          replacer = 'A'
          break;
        case 1:
          replacer = 'T'
          break;
        case 2:
          replacer = 'C'
                   break;
        case 3:
          replacer = 'G'
                   break;
        default:
          console.log('Error in Mutate Replace Index');
      }} while (replacer === this.dna[index])       // WHILE LOOP?
    
     
      this.dna[index] = replacer;
      console.log(replacer)//Replacer Mutate Value
  },
    compareDNA(pAequorObject){
      var totalShared = 0;
      for(let i = 0; i < pAequorObject.dna.length; i++){
        if(pAequorObject.dna[i] === this.dna[i]){
          totalShared++;
          
        }
      }
      
      console.log("Object:" + this.specimenNum +" and Object:" + pAequorObject.specimenNum + " have " +(totalShared/pAequorObject.dna.length)*100 + "% DNA in common.");  
    },
    willLikelySurvive(){
      var amtCorG = 0
      this.dna.forEach(element =>{
        if(element === 'C' || element === 'G'){
          amtCorG++
        }
      })
      if(amtCorG > .6*this.dna.length){
        return true
      } else{
        return false
      }
    }
}
}
//INSTANCES FOR TEAM CREATION
const potentialSurvivors = [] 
var i = 1
while( potentialSurvivors.length < 30){

  var creationInstance = pAequorFactory(i, mockUpStrand())
  if(creationInstance.willLikelySurvive() === true){
    potentialSurvivors.push(creationInstance);
    i++
  }
  }

  




/////////////TEST SECTION
const test1 = pAequorFactory(2, ['A', 'C', 'T', 'C']);//Factory Create
const test2 = pAequorFactory(3, ['A', 'C', 'G','T']);
//console.log(test1);
//test1.mutate();//Test Mutate of creator object
//console.log(test1);

//test2.compareDNA(test1);
//test1.willLikelySurvive();
//console.log(test1.willLikelySurvive())
console.log(potentialSurvivors)






