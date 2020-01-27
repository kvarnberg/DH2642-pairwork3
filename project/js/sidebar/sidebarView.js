class SidebarView{
    constructor(model, root){
        this.root=root;
        this.model=model;
        model.addObserver(x=>this.update(x));
    }
    render(){
        // const Sidebar=({model})=>h("span", h("button", "+"), this.model.getNumberOfGuests(), h("button", "-"))
        this.root.innerHTML=`<button id="minusButton"> - </button><span>${this.model.getNumberOfGuests()}</span><button id="plusButton"> + </button>`
    }
    
    // är det här som klick på button ska uppdatera anta gäster?
    update(whatHappened){
            if(whatHappened.guests !== undefined){
                this.root.firstElementChild.nextSibling.textContent= whatHappened.guests;
            }
    }