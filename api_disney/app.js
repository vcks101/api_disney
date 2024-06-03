const apiDis = async (pagina) => {
  let url = "https://api.disneyapi.dev/character?page=" + pagina;
  const api = await fetch(url);
  const data = await api.json();

  console.log(data);
  console.log(data.data[0]);
  let divRes = document.querySelector("#resultado");
  divRes.innerHTML = ""
  for (let i = 0; i < data.data.length; i++) {
    const card = document.createElement('div');
    card.classList.add('character-card');

    card.innerHTML = `
      <div class="card p-1" style="width: 18rem;">
      <img class="card-img-top" src="${data.data[i].imageUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${data.data[i].name}</h5>
        <p class="card-text"> Peliculas: ${data.data[i].films}</p>
      </div>
    </div>        
        `;
    divRes.appendChild(card);
  }
}


apiDis(1);
