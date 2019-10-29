const dogArray = [
  {
      id: 0,
      img: "images/boxer.jpg",
      name: "Pumper",
      pronoun: "She",
      breed: "boxer",
      size: "medium",
      color: "brown",
      age: 2,
      needs: {
          toys: ["bow-tie", "ball"],
          shelter: "sunroom",
          medication: true,
          cupsOfFood: 1.5
      }
  },
  {
      id: 1,
      img: "images/bullterrier.jpeg",
      name: "Jerry",
      pronoun: "She",
      breed: "terrier",
      size: "small",
      color: "green",
      age: 3,
      needs: {
          toys: ["underpants", "squeaker"],
          shelter: "rescue shelter",
          medication: true,
          cupsOfFood: 1
      }
  },
  {
      id: 2,
      img: "images/poodle.jpeg",
      name: "Curly",
      pronoun: "He",
      breed: "poodle",
      size: "large",
      color: "black",
      age: 2,
      needs: {
          toys: ["bone", "squeaker", "frisbee"],
          shelter: "house",
          medication: false,
          cupsOfFood: 2
      }
  },
  {
      id: 3,
      img: "images/lab.jpeg",
      name: "Disco",
      pronoun: "She",
      breed: "lab",
      size: "big",
      color: "black",
      age: 1,
      needs: {
          toys: ["bone", "shoes", "hats"],
          shelter: "house",
          medication: false,
          cupsOfFood: 3
      }
  },
  {
      id: 4,
      img: "images/bull.jpg",
      name: "Toro",
      pronoun: "He",
      breed: "bull mastiff",
      size: "huge",
      color: "brown",
      age: 6,
      needs: {
          toys: ["small children", "large children", "squirrels", "squeaker"],
          shelter: "outside",
          medication: false,
          cupsOfFood: 6
      }
  },
  {
      id: 5,
      img: "images/bullterrier.jpeg",
      name: "Ivy",
      pronoun: "She",
      breed: "stafford bull terrier",
      size: "medium",
      color: "yellow",
      age: 7,
      needs: {
          toys: ["fat rat", "squeaker", "slippers"],
          shelter: "wherever she wants",
          medication: false,
          cupsOfFood: 2.5
      }
  },
  {
      id: 6,
      img: "images/americaneskimo.jpeg",
      name: "Biscuit",
      pronoun: "She",
      breed: "american eskimo",
      size: "medium",
      color: "white",
      age: 0.5,
      needs: {
          toys: ["bunny", "sticks", "bath tub"],
          shelter: "kennel",
          medication: false,
          cupsOfFood: 2
      }
  },
  {
      id: 7,
      img: "images/pomsky.jpeg",
      name: "Bunny",
      pronoun: "She",
      breed: "pomsky",
      size: "small",
      color: "black triad",
      age: 1,
      needs: {
          toys: ["biscuit", "kong"],
          shelter: "bed",
          medication: false,
          cupsOfFood: 2
      }
  },
  {
      id: 8,
      img: "images/goldenretriever.jpeg",
      name: "Spice",
      pronoun: "He",
      breed: "golden retriever",
      size: "medium",
      color: "brown",
      age: 18,
      needs: {
          toys: ["baby doll", "rubber bone"],
          shelter: "den",
          medication: true,
          cupsOfFood: 3
      }
  },
  {
      id: 9,
      img: "images/germansheppard.jpeg",
      name: "Kyzer",
      pronoun: "He",
      breed: "german sheppard",
      size: "large",
      color: "black",
      age: 6,
      needs: {
          toys: ["bone", "stick"],
          shelter: "dog house",
          medication: true,
          cupsOfFood: 5
      }
  },
  {
      id: 10,
      img: "images/schnauzer.jpeg",
      name: "Gonzo",
      pronoun: "She",
      breed: "schnauzer",
      size: "small",
      color: "black and white",
      age: 4,
      needs: {
          toys: [],
          shelter: "streets",
          medication: false,
          cupsOfFood: 0
      }
  },
  {
      id: 11,
      img: "images/daisy.jpeg",
      name: "Daisy",
      pronoun: "He",
      breed: "golden retriever",
      size: "medium",
      color: "golden",
      age: 3,
      needs: {
          toys: ["does not like things"],
          shelter: "???",
          medication: null,
          cupsOfFood: "string"
      }
  }
];

console.log("dog array", dogArray);

let dogDiv = document.getElementById('dogs');

//for loop with counter, limit, increment
for(var counter = 0; counter < dogArray.length; counter++) {
  
  var dogOfMoment = dogArray[counter];

  //variables for header and paragraph
  var dogName = dogOfMoment.name;
  var dogBreed = dogOfMoment.breed;
  var dogSize = dogOfMoment.size;
  var dogColor = dogOfMoment.color;
  var dogAge = dogOfMoment.age;
  var dogId = dogOfMoment.id;
  var dogPronoun = dogOfMoment.pronoun;
  var dogImg = dogOfMoment.img;


  //variables for dog needs
  var dogShelter = dogOfMoment.needs.shelter;
  var dogFood = dogOfMoment.needs.cupsOfFood;
  
  var dogMedication = dogOfMoment.needs.medication;
 
  if(dogMedication == true) {
      dogMedication = "needs medz";
  } else {
      dogMedication = "young and healthy";
  }

  var dogToys = dogOfMoment.needs.toys.join(", ");


  //variables holding dynamic elements

  var dogDescription = 
      `<p>${dogName} is a ${dogBreed} who is ${dogAge} years old. 
      ${dogPronoun} is ${dogSize} sized and a beautiful ${dogColor} color! `;

  var dogNeedsTable = 
      `<table class="dogTable">
      <tr><td>Housing:<td>
      sleeps in ${dogShelter}</td></tr>
      <tr><td>Toys:<td>
      plays with ${dogToys}</td></tr>
      <tr><td>Medication:<td>
      ${dogMedication}</td></tr>
      <tr><td>Food:<td>
      eats ${dogFood} cups per day</td></tr>
      </table>`;

  //dynamically populating the description
  if( dogId == 5)
  {
      dogDescription += `${dogName} is the very berry best doggo!</p>`;
  } else {
      dogDescription += `${dogName} is a good doggo!</p>`;
  }

  dogDiv.innerHTML += `<div class="card"><img alt="${dogName}" src="${dogImg}" width=\"120px\" height=\"120px\"><h4>${dogName}</h4>${dogDescription}${dogNeedsTable}</div>`;
}