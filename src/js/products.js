
function addItem(item){
  //   let itemHTML= `<div class="row row-cols-6 row-cols-6">
  //   <div class="card">
  //     <img src= ${item.img} class="card-img-top" alt="...">
  //     <div class="card-body">
  //       <h5 class="card-title">${item.name}</h5>
  //       <p class="card-text">${item.description}</p>
  //       <a href="#" class="btn btn-primary">Add</a>
  //       </div>
  //   </div>
  // </div>`
  let itemHTML=`<div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card">
      <img src="${item.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="${item.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title>"${item.name}"</h5>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>`

  let itemsProducts= document.getElementById("list-products");
  itemsProducts.innerHTML += itemHTML;
}//function


addItem({'name':'produc1', 
'img':'	https://rickandmortyapi.com/api/character/avatar/1.jpeg',
 'description': 'character1'
});

addItem({'name':'produc2', 
'img':'	https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 'description': 'character2'
});
