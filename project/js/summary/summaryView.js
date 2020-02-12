/*class SummaryView{
	constructor(model, root){
        this.root=root;
        this.model=model;
        model.addObserver(x=>this.update(x));
        }
        render(){
            h("div",
                h("div", "Dinner for " + this.model.getNumberOfGuests() + ' people'),
                h("button", {onClick: event=>show("search"), style:"float:right"}, "Back to search"),
                h("table", {border:1},
                    h("tr",
                        h("th", "Menu :"),h("th", "Shoppinglist :"), h("th", "Total price :")),
                    h("tr",
                        h("td", this.model.getMenu().map(dish =>(this.displayMenu(dish)))),
                        h("td", this.model.getIngredients().map(ing => (this.displayShopping(ing)))),
                        h("td", this.displayTotalPrice())))
            ).render(this.root)
        }

        update(whatHappened){
            this.render()
        }

        displayMenu(dish){
            //return h("li", dish.title + dish.sourceUrl)
            return h("li", h("a", {href:dish.sourceUrl}, dish.title))

        }

        displayShopping(item){
            return h("li", (item.amount*this.model.getNumberOfGuests()).toFixed(1)+' ' + item.name + ' (' + item.aisle + ')')
        }

        displayTotalPrice(){
            let dishes = this.model.getMenu()
            let price = this.model.totalPrice(dishes)
            return price.toFixed(1)
        }
}*/

function SummaryView(model){
    return h("div",
            h("button", {onClick: event=>show("search"), style:"float:right"}, "Back to search"),
                h("div", "Dinner for " + model.getNumberOfGuests() + ' people'),
                h("table", {border:1},
                    h("tr",
                        h("th", "Menu :"),h("th", "Shoppinglist :"), h("th", "Total price :")),
                    h("tr",
                        h("td", model.getMenu().map(dish =>(displayMenu(dish)))),
                        h("td", model.getIngredients().map(ing => (displayShopping(ing)))),
                        h("td", displayTotalPrice())))
            )

        function displayMenu(dish){
            //return h("li", dish.title + dish.sourceUrl)
            return h("li", h("a", {href:dish.sourceUrl}, dish.title))

        }

        function displayShopping(item){
            return h("li", (item.amount*model.getNumberOfGuests()).toFixed(1)+' ' + item.name + ' (' + item.aisle + ')')
        }

        function displayTotalPrice(){
            let dishes = model.getMenu()
            let price = model.totalPrice(dishes)
            return price.toFixed(1)
        }
}