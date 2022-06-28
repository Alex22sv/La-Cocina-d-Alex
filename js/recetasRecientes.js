const crearRecetasRecientes = () => {
    let recetasRecientes = document.querySelector(".recetasRecientes");
    recetasRecientes.innerHTML = `
	<li>
		<h4><a href="tostadas-de-pizza.html">Tostadas de pizza</a></h4>
		<a href="tostadas-de-pizza.html"><img src="../images/tostadas-de-pizza.png" alt="" /></a>
		<div class="price-details">
			<div class="add-cart">								
				<h4><a href="tostadas-de-pizza.html">Ver receta</a></h4>
		    </div>
			<div class="clear"></div>
    	</div>					 
	</li>
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
    `;

}
crearRecetasRecientes();