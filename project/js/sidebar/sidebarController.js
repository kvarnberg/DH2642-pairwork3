// sidebar controller
class SidebarController{
    constructor(model, root){
        new SidebarView(model, root).render();
        
        const plusButton= root.firstElementChild.nextSibling.nextSibling; 			// document.getElementById("plusButton");
		plusButton.addEventListener("click", function(event){
    		model.setNumberOfGuests(model.getNumberOfGuests()+1)
		});

		const minusButton= root.firstElementChild; 				//document.getElementById("minusButton");
		minusButton.addEventListener("click", function(event){
			model.setNumberOfGuests(model.getNumberOfGuests()-1)
		});
    }
}
