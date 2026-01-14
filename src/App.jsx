import './App.css'

function App() {

  return (
    <>
      <h1>React Calculator</h1>
      <div id='calculator'>
        <div className='row'>
          <input type='number' id='output' name='output' readOnly />
        </div>
        <div className='row'>
          <button>&lt;</button>
          <button>AC</button>
          <button>%</button>
          <button>/</button>
        </div>
        <div className='row'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
        </div>
        <div className='row'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className='row'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className='row'>
          <button>+/-</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </>
  )
}

export default App
