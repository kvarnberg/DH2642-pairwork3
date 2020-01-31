class DinnerModel{
    constructor(){
        this.numberOfGuests=1;
        this.subscribers=[];
        this.dishes=[];
    }
    setNumberOfGuests(x){
        // do a error thingy
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
        return data; 

    }
    addToMenu(dish){
        if (this.dishes.includes(dish) == false){
           this.dishes.push(dish) 
        }
        else{
            console.log("already in list")
        }
        
    }
}

// model view controller
