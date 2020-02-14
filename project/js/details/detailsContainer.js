class DishDetailsContainer{
	constructor(model, root, onAdd, onCancel){
		this.model=model;
		this.root=root;
		this.onAddCallback=onAdd[0];
        this.onAddLabel=onAdd[1];

		model.addObserver(()=> this.currentDish?createDishDisplay(this.currentDish).render(root):null); 
   	}
   	createDishDisplay(dish){ 
   		h(DishView, {dish:dish, guests:model.getNumberOfGuests(), inMenu, onAdd, onCancel})
     /* TODO invoke h(DishView) with the needed attributes:
        dish object,  number of guests, whether the dish is in the menu or not, onAdd (improved!), onCancel 
    */
	}
   	render(id){
   		/*renderPromise(model.getDishDetails(id),
   			dish => {this.currentDish=dish; this.createDishDisplay(dish)},
            this.root)*/
        
   		h("span", "Here we will show the dish with id: ", id).render(this.root);
   	}
}