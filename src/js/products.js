// 
function addItem(item){
    let itemHTML= `
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div class="card h-100">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>   
          <p class="card-text">${item.size}</p> 
          </div>
      </div>
    </div>`
 
  let itemsProducts= document.getElementById("list-products");
  itemsProducts.innerHTML += itemHTML;
  
}//function


addItem({'name':'Café Orgánico', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/245057633_1452576331790613_1123708741388528244_n_mrncqw.jpg',
 'description': 'Hecho con el mejor café tostado, originario de Chiapas',
 'size': 'Presentación 500gr'
});

addItem({'name':'Café Tostado Orgánico', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/253144600_900585757496627_3781751932014693_n_a6lhjy.jpg',
 'description': 'Diseñado y confeccinado con la mejor piel, cuidamos de los detalles, para darte un excelente acabado',
'size': 'Presentación 250gr'
});
addItem({'name':'Mandil corte de lujo', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636498861/Imagen10_xilbic.png',
 'description': 'Corte de lujo en loneta color negro y fondo de gabardina, bolsas en piel de res cortadas y cosidas a mano y tirantes de piel desmontables y ajustables.',
 'size': 'S ,M , L' 
});

addItem({'name':'Mandil corte de lujo', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636498657/tx3_rjtnt4.png',
 'description': 'Corte de lujo en loneta tono vino, acabado premium de piel '
 ,'size': 'S ,M , L' 
});
addItem({'name':'Mandil corte Industrial', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636498737/Imagen4_efjfjj.png',
 'description': 'Mandil en mezclilla industrial color negro Obsidiana y fondo de gabardina, con bolsa oculta con solapa y detalles en mezclilla color rosa. Con etiqueta de cuero y porta trapos en piel desmontables. Tirantes en cinta textil ajustables con estabilizador trasero hecho a mano. ',
 'size': 'S ,M , L' 
});
addItem({'name':'Mandil corte bàsico/industrial', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636498769/Imagen5_mipxbl.png',
 'description': 'Corte básico en mezclilla industrial y bolsas en loneta, con tirantes textiles fijos al mandil, personalizado con logo en etiqueta de cuero desmontable y aplicaciones en piel.',
 'size': 'S ,M , L' 
});
addItem({'name':'Mandil Mezclilla corte básico/industrial', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636498659/mandil_tremenda_mexa_vrxkcz.png',
 'description': 'En loneta sublimada con una hermosa imagen que ella eligió y fondo de mezclilla industrial color negro. Bolsas en piel de res cosidas a mano y etiqueta de cuero de res con su nombre, ambas son desmontables. ',
 'size': 'S ,M , L' 
});
addItem({'name':'Mandil Mezclilla corte básico/industrial', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636498781/Imagen3_u0ew7b.png',
 'description': 'En mezclilla industrial color azul Atl con fondo de gabardina, bolsas ocultas con ribete en loneta y bolsa central con divisiones Tirantes desmontables y ajustables con estabilizador trasero en cuero de res hecho a mano, con etiqueta de cuero desmontable y aplicación de bordado',
 'size': 'S ,M , L' 
});
addItem({'name':'Bolsa', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636498751/bolsas_2_e6vu2l.png',
 'description': 'Realizadas en mezclilla industrial y aplicaciones de piel y cuero',
 'size': '30 x 20' 
});
addItem({'name':'Bolsa ', 
'img':'	https://res.cloudinary.com/rookiesquad/image/upload/v1636498649/tx13_hozc9e.png',
 'description': 'Realizadas en mezclilla industrial color azul indigo, con correas y aplicaciones en piel de res color tabaco, con etiqueta de cuero marcada ' 
,'size': '30x 20'
});