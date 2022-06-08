const crearRecetasRecientes = () => {
    let recetasRecientes = document.querySelector(".recetasRecientes");
    recetasRecientes.innerHTML = `
    <li>
		<h4><a href="tortas-de-carne.html">Tortas de carne</a></h4>
		<a href="tortas-de-carne.html"><img src="../images/tortas-de-carne.png" alt="" /></a>
		<div class="price-details">
			<div class="add-cart">								
				<h4><a href="tortas-de-carne.html">Ver receta</a></h4>
			</div>
	    	<div class="clear"></div>
		</div>					 
	</li>
    <li>
		<h4><a href="chirmol.html">Chirmol</a></h4>
		<a href="chirmol.html"><img src="../images/chirmol-1.png" alt="" /></a>
		<div class="price-details">
			<div class="add-cart">								
				<h4><a href="chirmol.html">Ver receta</a></h4>
		    </div>
			<div class="clear"></div>
    	</div>					 
	</li>
    `;

}
crearRecetasRecientes();