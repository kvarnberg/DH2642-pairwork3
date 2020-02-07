class SidebarView{
	constructor(model, root){
        this.root=root;
        this.model=model;
        model.addObserver(x=>this.update(x));
    }
    render(){

        var peeps = this.model.getNumberOfGuests();
        const disableButton =  peeps <= 1? "true": undefined;

        h("fragment",
        h("div", 
        h("button", {className:"minusButton", disabled: disableButton}, "-"), 
        peeps, 
        h("button", {className:"plusButton"}, "+")),
        h("div",
            h("table",
                h("tr", h("th", "Title"), h("th", "Price")),
            this.model.getMenu().map(dish =>(this.dishDisplay(dish)))),
            h("div", '-----------------'),
            h("div", 'Total price: ' + this.displayTotalPrice())))
            .render(this.root);
    }

    dishDisplay(dish){
        return h("tr", 
                h("td", dish.title ),
                h("td", this.model.getNumberOfGuests()*dish.price))
    }

    displayTotalPrice(){
        let dishes = this.model.getMenu()
        let price = this.model.totalPrice(dishes)
        return price
    }

	update(whatHappened){
        this.render()
    }
}
