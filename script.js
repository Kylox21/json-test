const petsData = [{
  name: "Story Book",
  species: "Jean Lumier",
  photo: "a.jpg"
},
{
  name: "Barksalot",
  species: "Dog",
  href:"book.html",
  photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
},

];

console.log("Name:", name)

function petTemplate(pet) {
  
return `
<div class ="image-grid">
   <div class="animal">
   
    <img class="pet-photo " src="${pet.photo}" >
   
      
       <div class="olay" onclick="location.href='book.html?book=0';" style="cursor: pointer;">
       <div id="mydiv">
  
      <h2 class="pet-name">${pet.name}
      
      
      <h1 class="species">${pet.species}

      </div>
       <div></div></div>
      </div>
   </div>

  
`;
}

document.getElementById("app").innerHTML = `
   <h1 class="app-title">Kids
   ${petsData.map(petTemplate).join("")}
`;

const urlParams = new URLSearchParams(window.location.search);
const bookPos = urlParams.get('book');

function getTemplateFor() {
  let book = petsData[bookPos]
  let bookHtml =  `
<div class ="book-html">
<h1>${book.name}  </h1>
</div>
`;

document.getElementById('book_details').innerHTML = bookHtml;
}