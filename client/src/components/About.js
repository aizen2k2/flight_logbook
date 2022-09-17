import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {


  const navigate = useNavigate();
    const [userData, setUserData] = useState({});


  const callAboutPage = async () => {
    try {
        const res = await fetch('/about', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);

        if ( !res.status  === 200)
         {
            const error = res.error;
            throw error;
        }

    } catch (err) {
        console.log(err);
        navigate('/login');
    }
}



  useEffect(() => {
    callAboutPage();
}, []);

  return (
    <>
  <div className='container emp-profile'>
  <form method="GET">
    <div className='row'>
      <div className='col-md-4'>
      


      </div>
      <div className='col-md-4'>
      
    <div className='profile-head'> <h5> Karan </h5>
    <h6>Pilot</h6>
    
    <ul className ="nav nav-tabs" role="tablist">
    <li className ="nav-item"><a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a></li>
    <li className ="nav-item"><a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a></li>
    
  </ul>



    </div>

      </div>

      <div className='col-md-4'>
      


      </div>
    
     <div className='col-md-2'>
      <input type="submit" className="profile-edt-btn" name="btnAddMore" value="Edit Profile" /> 
     </div>

    </div>
   
<div className='row'>
  <div className='col-md-8 pl-5 about-info'>
    <div className='tab-content profile-tab' id="myTabContent">
      <div className='tab-pane fade show active'id=" home" role="tabpanel" aria-labelledby='home-tab'>
        <div className='row'>
          <div className='col-md-6'>
            <label >User ID</label>
          </div>

          <div className='col-md-6'>
            <p> 89353986498</p>
          </div>

        </div>


        <div className='row mt-3'>
          <div className='col-md-6'>
            <label >Name</label>
          </div>

          <div className='col-md-6'>
            <p> Krishna</p>
          </div>

        </div>


        <div className='row mt-3'>
          <div className='col-md-6'>
            <label >Name</label>
          </div>

          <div className='col-md-6'>
            <p> Krishna</p>
          </div>

        </div>
           


        <div className='row mt-3'>
          <div className='col-md-6'>
            <label >Total Hours</label>
          </div>

          <div className='col-md-6'>
            <p> Krishna</p>
          </div>

        </div>



        <div className='row mt-3'>
          <div className='col-md-6'>
            <label >Name</label>
          </div>

          <div className='col-md-6'>
            <p> Krishna</p>
          </div>

        </div>




      </div>
    </div>

  </div>
</div>




  </form>




  </div>
   






    </>
  )
}

export default About