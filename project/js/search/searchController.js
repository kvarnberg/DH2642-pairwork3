class SearchController{
    constructor(model, root){
        const view= new SearchView(model, root);
		view.render();
		document.getElementById("button").addEventListener("click", e=>{view.updateSearchResults()});

		root.lastElementChild.firstElementChild.nextElementSibling.addEventListener("click", e=>{view.isDishRepresentation(event.target)});		

		// check that it got string back, isString() ? .then(model.addToMenu(dish))
		
		/* if (== "string"){(id =>{
			model.getDishDetails(id)
			.then(dish =>{model.addToMenu(dish)})})
		} */
    }
   
}
