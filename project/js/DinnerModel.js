class DinnerModel{
    constructor(){
        this.numberOfGuests=1;
        this.subscribers=[];
        this.dishes=[];
        this.ingList=[];
    }
    setNumberOfGuests(x){
        this.numberOfGuests=x 
        this.notifyObservers({guests:x}); 
    }
    getNumberOfGuests(){
        return this.numberOfGuests;
    }
    addObserver(callback){
    	this.subscribers.push(callback);                                                         
	}
	notifyObservers(whatHappened){   
        for(let i=0; i<this.subscribers.length; i++){ 
            let callback= this.subscribers[i];
            callback(whatHappened);}
    }

    async searchDishes(dishType, freeText) {
        const response = await fetch(ENDPOINT + "recipes/search?type="+dishType+"&query="+freeText, {
            "method": "GET",
            "headers": {
                'X-Mashape-Key': API_KEY
            }
        })
        const data = await response.json();
        return data.results;        
    }

    async getDishDetails(id){
        const response = await fetch(ENDPOINT + "recipes/"+id+"/information", {
            "method": "GET",
            "headers": {
                'X-Mashape-Key': API_KEY
            }
        })
        const data = await response.json();
        return data  // ta ut objekt från promise
    }
    
    alreadyInMenu(newDish){
        const exists=this.dishes.some(dish => newDish.id === dish.id);

        return exists
    }

    addToMenu(dish){
        let dishAmount = dish.extendedIngredients.map(p => p.amount)
        dish.price = dishAmount.reduce(function(a, b) { return a + b; }, 0)

        const exists=this.alreadyInMenu(dish);
        if (!exists){
           this.dishes = [dish, ...this.dishes]
           this.notifyObservers({add_dish:dish});             
        }
        else{
            console.log("already in menu");
        }
    }

    totalPrice(dishes){
        let totalPrice = 0
        this.dishes.map(dish=>totalPrice=totalPrice + (dish.price* this.numberOfGuests))
        return totalPrice
    }

    filterDishType(dishType){
        let filtered = dishType.filter(type=> type=="starter" || type=="main course" || type=="dessert")
        return filtered
    }

    getMenu(){
        this.dishes.map(dish=> dish.dishTypes=this.filterDishType(dish.dishTypes))
        this.dishes.sort(function(a,b){
            if (a.dishTypes[0] < b.dishTypes[0]){
                return 1
            } else if (a.dishTypes[0] > b.dishTypes[0]){
                return -1
            } else {return 0}
        })
        return [...this.dishes]
    }

    getIngredients(){
        let ingredients= this.dishes.map(dish=>dish.extendedIngredients)
                
        ingredients.map(item => item.map(i =>{
                ethis.alreadyInIngredients(i);
            }))
        return this.ingList
    }

    alreadyInIngredients(new_ing){
       const exists = this.ingList.some(ing => new_ing.id === ing.id);
       if (!exists){
            this.ingList = [new_ing, ...this.ingList]
       }
       else{
            // add amounts together here
            let ing = this.ingList.find(ing => ing.id === new_ing.id);
            ing.amount = ing.amount+new_ing.amount
       }  
    }

}

