class DishDetailsContainer{
	constructor(model, root, onAdd, onCancel){
		this.model=model;
		this.root=root;
		this.onAddCallback=onAdd[0];
    this.onAddLabel=onAdd[1];
    this.cancelAction=onCancel[0];
    this.cancelMessage=onCancel[1];

		model.addObserver(()=> this.currentDish?createDishDisplay(this.currentDish).render(root):null); 
   	}

   	createDishDisplay(dish){
      let currentDish = dish
      return h(DishView, {dish:currentDish, 
        addControl:[()=>{this.model.addToMenu(dish); this.onAddCallback()}, this.onAddLabel], 
        onCancel:[()=>{console.log("onCancel")}, this.cancelMessage], 
        price:model.getPrice(dish), 
        guests:model.getNumberOfGuests(), 
        inMenu:model.alreadyInMenu(dish)});
	  }

   	render(id){
   		renderPromise(
        model.getDishDetails(id),
   			dish =>(this.createDishDisplay(dish)),
        this.root)
        
   		//h("span", "Here we will show the dish with id: ", id).render(this.root);
   	}
}