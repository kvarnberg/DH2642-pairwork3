class SearchView{
	constructor(model, root){
        this.root=root;
        this.model=model;
    }
    render(){
    	h("div",
    		h("div",       
            	this.textControl = h("input"),   
            	this.typeControl = h("select", 
                    h("option", {value:""}, "Choose:"), 
                    ["starter", "main course", "dessert"].map(opt=>(h("option", {value:opt}, opt)))),
            	h("button", {id:"button"}, "Search!") 
            ),  
       		this.resultDiv= h("div")
       	).render(this.root);

    	this.updateSearchResults();
    }

    updateSearchResults(){
        const spinner=this.createSpinner();
        spinner.render(this.resultDiv);  // clears this.resultDiv of all its children, i.e. wipes the previous search results. Then adds the spinner

        this.model.searchDishes(this.typeControl.value, this.textControl.value)
            .then(dishes=> h("div", {className:"dishDiv"}, dishes.map(dish => this.createDishDisplay(dish))).render(this.resultDiv))
            .catch(err=> render(this.resultDiv))
            .finally(()=> render(this.resultDiv));
    }
    
    createSpinner(){
        return h("div", {className:"spinnerClass"}, h("img", {src:"https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"}))
        }

    createDishDisplay(dish){
        return h("span", {className:"dishDisplay"}, h("img",{src:"https://spoonacular.com/recipeImages/" + dish.image}), dish.title);
        
    }
}