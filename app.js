function pesquisar() {
  console.log("Clicou no Botão de Pesquisa");
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Campo de Pesquisa Vazio</p>";
    return
  }
  let resultados = "";
  let titulo = "";
  let pesquisa = "";
  let descricao = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    pesquisa = campoPesquisa.toLowerCase().trim();

    if (titulo.includes(pesquisa) ||
      descricao.includes(pesquisa)) {

      resultados += `
      <div class="item-resultado">
           <h2>${dado.titulo}</h2>
           <p class="descricao-meta">${dado.descricao}</p>
           <a href="${dado.link}" target="_blank">Wiki do Game</a>
      </div>`
    }
  }

  if (!resultados) {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return
  }

  section.innerHTML = resultados;
}
