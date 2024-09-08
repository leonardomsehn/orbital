function pesquisar() {

let section = document.getElementById("search-results");

let campoPesquisa = document.getElementById("campo-pesquisa").value;
console.log(campoPesquisa);

if(!campoPesquisa){
  section.innerHTML = "Nenhum valor digitado";
  return
}

campoPesquisa = campoPesquisa.toLowerCase();

let resultados = "";
let planet = "";
let description = "";

for (let dado of data) {
  planet = dado.planet.toLowerCase();
  description = dado.planet.toLowerCase();
  if(planet.includes(campoPesquisa) || description.includes(campoPesquisa)){
    resultados += `
  <div class="result-item">
        <h2> 
          <a href="#" target="_blank">${dado.planet}</a>
        </h2>
        <p class="description">${dado.description}.</p>
        <p class="gravity">A gravidade de ${dado.planet} é de ${dado.gravity}</p> 
      </div>
      `
    }
  }
  
  if(!resultados) {
    resultados = "<p>Nenhum planeta encontrado</p>";
  }

section.innerHTML = resultados;
}


