import Counter from "./Counter";

function App() {

  const[getA, nextA] = Counter(1);

  console.log(getA());
  nextA();
  console.log(getA());

  const[getB, nextB] = Counter(10);
  nextB();
  console.log(getA());
  console.log(getB());
  
  nextA();
  console.log(getA());
  console.log(getB());

  //checking the default initialization
  const [getC, nextC] = Counter();
  console.log(getC());
  nextC();
  console.log(getC())
  
  return (
    <div>
      <h1>Hi there</h1>
    </div>
  )
}

export default App
