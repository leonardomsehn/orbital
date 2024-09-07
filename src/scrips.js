//console.log(data);

let section = document.getElementById("search-results");

console.log(section);

section.innerHTML = `<div class="result-item">
        <h2> 
          <a href="#" target="_blank">${data[1].planet}</a>
        </h2>
        <p class="description">Earth is the third planet from the Sun and the only known planet to support life. It is an ocean world, with 71% of its surface covered in water.</p>
        <a href="https://pt.wikipedia.org/wiki/Terra" target="_blank">Mais informações</a>
      </div>`