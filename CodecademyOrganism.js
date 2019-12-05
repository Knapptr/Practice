//INSTANCES FOR TEAM CREATION
const potentialSurvivors = [];
const create30Viable = () =>{

var i = 1
while( potentialSurvivors.length < 30){

  var creationInstance = pAequorFactory(i, mockUpStrand())
  if(creationInstance.willLikelySurvive() === true){
    potentialSurvivors.push(creationInstance);
    i++
  }
  }
}

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
    rna: [],
    codons: [],
    aminoArray: [],
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
    },
    transcribe(){
      
      this.dna.forEach(element =>{
        if ( element === "T"){
          this.rna.push("A")
        } else if( element ==="A"){
          this.rna.push("U")
        }else if( element ==="C"){
          this.rna.push("G")
        }else if( element ==="G"){
          this.rna.push("C")
        }
      }) 
      //RNA to codons
      for(let i = 0 ; i<this.rna.length; i+=3){ 
        this.codons.push(this.rna.slice(i,i+3))}
    for( let i = 0; i<this.codons.length; i++){
    var comparEval = this.codons[i].join('');
    if (comparEval === "UUU" || comparEval === "UUC"){
      this.aminoArray.push("Phe")
    } else if (comparEval === "UUA" || comparEval === "UUG" || comparEval === "CUU" || comparEval === "CUC" || comparEval === "CUA" || comparEval === "CUG"){
      this.aminoArray.push("Leu")
    } else if (comparEval === "AUU" || comparEval === "AUC" ||  comparEval === "AUA"){
      this.aminoArray.push("Ile") 
    }else if (comparEval === "AUG"){
      this.aminoArray.push("Met/Start")
    } else if (comparEval === "GUU" || comparEval === "GUC" || comparEval === "GUA" || comparEval === "GUG"){
      this.aminoArray.push("Val")
    } else if (comparEval === "UCU" || comparEval === "UCC" || comparEval === "UCA" || comparEval === "UCG"){
      this.aminoArray.push("Ser")
    } else if (comparEval === "CCU" || comparEval === "CCC" || comparEval === "CCA" || comparEval === "CCG"){
      this.aminoArray.push("Pro")
    }else if (comparEval === "ACU" || comparEval === "ACC" || comparEval === "ACA" || comparEval === "ACG"){
      this.aminoArray.push("Thr")
    }else if (comparEval === "GCU" || comparEval === "GCC" || comparEval === "GCA" || comparEval === "GCG"){
      this.aminoArray.push("Ala")
    } else if (comparEval === "UAU" || comparEval === "UAC" ){
      this.aminoArray.push("Tyr")
    } else if (comparEval === "UAA" || comparEval === "UAG"){
      this.aminoArray.push("Stop")
    } else if (comparEval === "CAU" || comparEval === "CAC"){
      this.aminoArray.push("His")
    } else if (comparEval === "CAA" || comparEval === "CAG"){
      this.aminoArray.push("Gln")
    }  else if (comparEval === "AAU" || comparEval === "AAC"){
      this.aminoArray.push("Asn")
    }  else if (comparEval === "AAA" || comparEval === "AAG"){
      this.aminoArray.push("Lys")
    } else if (comparEval === "GAU" || comparEval === "GAC"){
      this.aminoArray.push("Asp")
    }  else if (comparEval === "GAA" || comparEval === "GAG"){
      this.aminoArray.push("Glu")
    }  else if (comparEval === "UGU" || comparEval === "UGC"){
      this.aminoArray.push("Cys")
    }  else if (comparEval === "UGA"){
      this.aminoArray.push("STOP")
    } else if (comparEval === "UGG"){
      this.aminoArray.push("Trp")
    } else if (comparEval === "CGU" || comparEval === "CGC" || comparEval === "CGA" || comparEval === "CGG"){
      this.aminoArray.push("Arg")
    } else if (comparEval === "AGU" || comparEval === "AGC"){
      this.aminoArray.push("Ser")
    } else if (comparEval === "AGA" || comparEval === "AGG"){
      this.aminoArray.push("Arg")
    }else if (comparEval === "GCU" || comparEval === "GGC" || comparEval === "GGA" || comparEval === "GGG"){
      this.aminoArray.push("Gly")
    } else console.log("Error")
    
    }}}}

  




/////////////TEST SECTION
const test1 = pAequorFactory(2, ['A', 'C', 'T', 'A', 'C','C','A','A','T','C','G', 'C']);//Factory Create
const test2 = pAequorFactory(3, ['A', 'C', 'G','T']);
//console.log(test1);
//test1.mutate();//Test Mutate of creator object
//console.log(test1);

//test2.compareDNA(test1);
//test1.willLikelySurvive();
//console.log(test1.willLikelySurvive())
//console.log(potentialSurvivors)

//console.log(test1.dna);
//test1.transcribe();
//console.log(test1.rna);
//console.log(test1.codons);
//console.log(test1.aminoArray)

//create30Viable();
//console.log(potentialSurvivors);
//console.log(potentialSurvivors[1].transcribe())
//console.log(potentialSurvivors[1].aminoArray);

