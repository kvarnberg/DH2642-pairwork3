class DinnerModel{
    constructor(){
        this.numberOfGuests=1;
        this.subscribers=[];
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
        console.log(dishType)
        console.log(freeText)
        const response = await fetch(ENDPOINT + "recipes/search?type="+dishType+"&query="+freeText, {
            "method": "GET",
            "headers": {
                'X-Mashape-Key': API_KEY
            }
        })
        const data = await response.json();
        return data.results;          // leave out the unimportant parts of the response data
        }
}

// model view controller
