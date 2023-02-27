import React from 'react'

export default function Cards(props) {
  return (
    
    <div>
       
    <div className="row text-center">
        <div className="card text-white bg-success mb-3 mx-3 col-sm-4">
          <div className="card-header text-uppercase">Character in your content</div>
          <div className="card-body">
            <h1 className="card-title">{props.text.length}</h1>
           
          </div>
        </div>
        <div className="card text-white bg-danger mb-3 mx-3 col-sm-3 ">
          <div className="card-header text-uppercase">Words in your content</div>
          <div className="card-body">
            <h1 className="card-title">{props.text.split(" ").length}</h1>
           
          </div>
        </div>
        <div className="card text-white bg-warning mb-3 mx-3 col-sm-4">
          <div className="card-header text-uppercase">Mintues takes to read</div>
          <div className="card-body">
            <h1 className="card-title">{0.008*props.text.slice(" ").length}</h1>
           
          </div>
        </div>
      </div>

    </div>
  )
}
