import React from 'react'

const Entry = () => {
  return (
    <>
    

    <section className="sign-in">
    <div className="container mt-5">
      <div className="signin-content">
      <div className='signin-image'>
 
</div>
      <div className = "signin-form">
        <h2 className = "form-title">
          New Entry
        </h2>
        <form method="POST" className="register-form" id="register-form"> 
        
        
        <div className="form-group"> 
        <label htmlFor='Date'></label>
        <input type="date" name="Date" id="name" autoComplete='off'
        placeholder='Date'></input> </div>

        <div className="form-group"> 
        <label htmlFor='name'></label>
        <input type="text" name="name" id="name" autoComplete='off'
        placeholder='Name PIC'></input> </div>

       
        <div className="form-group"> 
        <label htmlFor='Departure'></label>
        <input type="text" name="Departure" id="name" autoComplete='off'
        placeholder='Place'></input> </div>

        <div className="form-group"> 
        <label htmlFor='Destination'></label>
        <input type="text" name="Destination" id="name" autoComplete='off'
        placeholder='Place'></input> </div>

        <div className="form-group"> 
        <label htmlFor='Aircraft'></label>
        <input type="text" name="Aircraft" id="name" autoComplete='off'
        placeholder='SU-30 MKI'></input> </div>
        
        
        

        <div className="form-group"> 
        <label htmlFor='Duration'></label>
        <input type="time" name="Duration" id="name" autoComplete='off'
        placeholder='00:00'></input> </div>
        
        
        <div className="form-group"> 
        <label htmlFor='name'></label>
        <input type="text" name="name" id="name" autoComplete='off'
        placeholder='Second Pilot'></input> </div>

       
       
        <div className="form-group"> 
        <label htmlFor='name'></label>
        <input type="text" name="name" id="name" autoComplete='off'
        placeholder='Third Pilot'></input> </div>

        <div className='form-group form-button'>
          <input type="submit" name="entryin" id=" signin" className='form-submit'   value="Submit"
          /> 
        </div>
        
        </form>


      </div>
       


      </div>


    </div>

   </section>    
    
    </>
  )
}

export default Entry