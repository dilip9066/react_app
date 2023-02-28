import React ,{useState} from 'react'

export default function About() {
     const [myStyle,setmyStyle ]=useState({


      backgroundColor:'white',
        
      color:'red'

     })

      const[btnText,setbtnText]= useState('Enable Dark Mode')
   
     const toggelButton =()=>{

      if (myStyle.color ==='red') {
        setmyStyle({

          backgroundColor:'black',
        
           color:'white',

           border:'1px solid white'
          

        })
        setbtnText("Disable Dark Mode")
      
      }
       else {
        setmyStyle({

          backgroundColor:'white',
        
           color:"red"


        })
        setbtnText("Enable Dark Mode")


       
      }

      


     }

    

  return (

    <div className='container-fluid' style={myStyle} >
        <h1>About us</h1>
      <div id="accordion"  >
  <div className="card">
    <div className="card-header" id="headingOne"style={myStyle} >
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse"  data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show"  aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body" style={myStyle}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo" style={myStyle}>
      <h5 className="mb-0">
        <button className="btn btn-link collapsed"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body" style={myStyle}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree" style={myStyle}>
      <h5 className="mb-0">
        <button className="btn btn-link collapsed"  data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse"  aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body" style={myStyle}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
<button className="btn btn-primary mx-2 text-centre my-3"  type="button"  onClick={toggelButton} > {btnText}</button>
    </div>
  )
}
