class SidebarView{
	constructor(model, root){
        this.root=root;
        this.model=model;
        model.addObserver(x=>this.update(x));
    }
	render(){
		// const Sidebar=({model})=>h("span", h("button", "+"), this.model.getNumberOfGuests(), h("button", "-"))
		//this.root.innerHTML=`<button id="minusButton"> - </button><span>${this.model.getNumberOfGuests()}</span><button id="plusButton"> + </button>`
        //mutationObserver() kanske kan användas för ändring av textContent

        var peeps = this.model.getNumberOfGuests();

        // disabled:(peeps <1) ? {} : true}

        h("fragment",
        h("div", 
        h("button", {className:"minusButton"}, "-"), 
        peeps, 
        h("button", {className:"plusButton"}, "+")),
        h("div", "show dishes here", 
        h("ul"))        // model.getMenu().sort(/*TODO sort compareFunction */).map(dish=> /* TODO render the dish*/)
        ).render(this.root);
	}

	update(whatHappened){
        if (whatHappened.guests !== undefined){
            // this.root.firstElementChild.firstElementChild.nextSibling.textContent = whatHappened.guests;
            this.render();
        }
    }
}