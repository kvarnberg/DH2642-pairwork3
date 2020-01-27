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
}

// model view controller
