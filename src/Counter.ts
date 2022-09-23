
const Counter = (initialValue:number=0)=>{
    
    let counter=initialValue;

    function getCounterValue(){
        return counter; 
    }

    function increment(){
        counter += 1;  
    }

    return [getCounterValue, increment];
}

export default Counter; 