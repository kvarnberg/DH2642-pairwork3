class SearchController{
    constructor(model, root){
        const view= new SearchView(model, root);
		view.render();
		document.getElementById("button").addEventListener("click", e=>{view.updateSearchResults()});
    }
}
