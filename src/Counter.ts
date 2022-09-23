
const Counter = (initialValue:number=0)=>{
    
    //let counter=initialValue;

    function getCounterValue(){
        return initialValue; 
    }

    function increment(){
        initialValue += 1;  
    }

    return [getCounterValue, increment];
}

export default Counter; 