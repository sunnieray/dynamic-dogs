const dogArray = [
  {
      id: 0,
      name: "Pumper",
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
      name: "Jerry",
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
      name: "Curly",
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
      name: "Disco",
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
      name: "Toro",
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
      name: "Ivy",
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
      name: "Biscuit",
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
      name: "Bunny",
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
      name: "Spice",
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
      name: "Kyzer",
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
      name: "Gonzo",
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
      name: "Daisy",
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



let dogDiv = document.getElementById('dogs');

//for loop with counter, limit, increment
for(var counter = 0; counter < dogArray.length; counter++)
{

  //variables for header and paragrapgh
  var dogName = dogArray[counter].name;
  var dogBreed = dogArray[counter].breed;
  var dogSize = dogArray[counter].size;
  var dogColor = dogArray[counter].color;
  var dogAge = dogArray[counter].age;
  var dogId = dogArray[counter].id;
  
  //variables for dog needs
  var dogToy = dogArray[counter].needs.toys.join(" , ");
  var dogShelter = dogArray[counter].needs.shelter;
  var dogMedication = dogArray[counter].needs.medications;
  if(dogMedication == true) {
    dogMedication ="needs Medz"
  } else {
    dogMedication ="dog is young and healthy"
  }
  var dogFood = dogArray[counter].needs.cupsOfFood;

  //variables holding dynamic elements
  var dogHeader = `<h4>${dogName}</h4>`;
  var dogDescription = "";
  var dogNeedsTable = "";
//needs table used mozilla to build
var dogsNeedsTable =
`<table class="dogTable">
    <tr><th colspan="4">Needs</th></tr>
    <tr>
        <td>${dogShelter}</td>
        <td>plays with${dogToy}</td>
      <td>${dogMedication}</td>
      <td>${dogFood}</td>
    </tr>
 </table>`

  //dynamic populating the dogs description
  if( dogId == 5)
  {
      dogDescription = 
          `<p>${dogName} is a ${dogBreed} who is ${dogAge} years old. 
          ${dogName} is ${dogSize} sized and a beautiful ${dogColor} color!
          ${dogName} is the very berry best doggo!</p>`;
  } else {
      dogDescription = 
          `<p>${dogName} is a ${dogBreed} who is ${dogAge} years old. 
          ${dogName} is ${dogSize} sized and a beautiful ${dogColor} color!
          ${dogName} is a good doggo!</p>`;
  }

  dogDiv.innerHTML += `<div class="card">${dogHeader} ${dogDescription}${dogsNeedsTable}</div>`;
}