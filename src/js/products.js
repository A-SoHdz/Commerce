
function addItem(item){
    let itemHTML= `<div class="row row-cols-1 row-cols-md-3">
    <div class="col mb-4">
      <div class="card h-100">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal101">
          Ver más</button>
         </div> //car body     
          </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a short card.</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100">
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


addItem({'name':'Mandil Mezclilla', 
'img':'	https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 'description': 'Hecho a tu medida, con el mejor material de mezclilla',
'size': 'S ,M , L ,XL' 

});

addItem({'name':'Mandil de cuero', 
'img':'	https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 'description': 'Diseñado y confeccinado con la mejor piel, cuidamos de los detalles, para darte un excelente acabado',
 'size': 'S ,M , L ,XL' 
});
addItem({'name':'Bolsa de mezclilla', 
'img':'	https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 'description': 'Bolsa de mezclilla, '
 
});
addItem({'name':'Cafe organico', 
'img':'	https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 'description': 'Delicioso cafe organico, cada taza te transporta a otro mundo ' 
});
addItem({'name':'Bolsa de mezclilla', 
'img':'	https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 'description': 'Bolsa de mezclilla c/piel, recuerda que tambien podemos diseñar lo que mas te agrade '
 
});
addItem({'name':'Mandil Obscuro', 
'img':'	https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 'description': 'Realizado con piel, finamente elaborada  ',
 'size': 'S ,M , L ,XL' 
});