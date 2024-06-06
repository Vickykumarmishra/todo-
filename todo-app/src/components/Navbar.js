import React from 'react'

export default function Navbar() {
  return (
//     <div style={{backgroundColor:'#05b993'}}>
      
//       <nav class="navbar navbar-expand-lg bg-body-tertiary" >
//   <div class="container-fluid" > 
//     <a class="navbar-brand" href="#">
//       {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" /> */}
//       My Todo 
//     </a>
//   </div>
// </nav>
//     </div>
<div style={{backgroundColor:'green'}}>
      
      <nav class="navbar navbar-expand-lg bg-body-green" >
  <div class="container-fluid"  style={{backgroundColor:'green'}}>
    
    <a class="navbar-brand" href="/about" style={{color:'white'}}><b>My ToDo</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
      </div>
    </div>
   
  </div>
  
</nav>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
 
  <div class="offcanvas-body">
    <img src="drivedosti profile.png" className='img-fluid' style={{height:'5rem'}}></img><br></br><br></br>
  <b> Username:-{localStorage.getItem("username")} </b>  <br></br>
      <p><b>Email Id:- {localStorage.getItem("email")}</b></p>

     
  </div>
</div>
    </div>
  )
}
