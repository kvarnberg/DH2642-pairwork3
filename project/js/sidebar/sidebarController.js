class SidebarController{
    constructor(model, root){
        new SidebarView(model, root).render();

        const plusButton=this.root.lastElementChild;
    
        plusButton.addEventListener("click", function(event){
        model.setNumberOfGuests(model.getNumberOfGuests()+1)
    });
        const minusButton=this.root.firstElementChild;
    
        minusButton.addEventListener("click", function(event){
        model.setNumberOfGuests(model.getNumberOfGuests()-1)
    });}
}