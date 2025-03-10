import React,{useState} from 'react'

function ErrorModal({setShowErrorModal}:{setShowErrorModal:any}) {



  return (
    <div className="modal-overlay">
     <div className="modal-content">
       <h2>Error</h2>
       <p>Data not found</p>
       <button onClick={()=>setShowErrorModal(false)} className="modal-button">OK</button>
     </div>
   </div>
  )
}

export default ErrorModal