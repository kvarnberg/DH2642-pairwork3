class SummaryView{
	constructor(model, root){
        this.root=root;
        this.model=model;
        model.addObserver(x=>this.update(x));
        }
        render(){
            h("div",
                h("div", "Menu:", this.model.getMenu().map(dish =>(this.displayMenu(dish)))),
                h("div", "Shoppinglist:", this.model.getIngredients().map(ing => (this.displayShopping(ing)))),
                h("div", "Total price: ", this.displayTotalPrice())
            ).render(this.root)
        }

        update(whatHappened){
            this.render()
        }

        displayMenu(dish){
            return h("li", dish.title + ' ' + dish.sourceUrl)
        }

        displayShopping(item){
            return h("li", item.amount*this.model.getNumberOfGuests()+' ' + item.name)
        }

        displayTotalPrice(){
            let dishes = this.model.getMenu()
            let price = this.model.totalPrice(dishes)
            return price
        }

        
}

