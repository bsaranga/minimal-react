import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  return (
    <div>
      <h1 className="mainTitle leftAlign">Minimal React</h1>
      <p className="leftAlign para">This is a minimal react boilerplate made with Webpack & Babel.</p>
      <p className="leftAlign para">Hot loading works</p>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))