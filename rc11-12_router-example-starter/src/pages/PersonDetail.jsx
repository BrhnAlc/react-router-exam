import { useLocation, useNavigate } from "react-router-dom"


const PersonDetail = () => {
  let {state : person} =useLocation();
  let navigate =useNavigate();

  console.log(person);
  return (
    <div className="container text-center">
      
      <h3>
        {person?.first_name } {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div>
        <button onClick={()=>navigate("/")} className="btn btn-success">
          Go Home
        </button>
        <button onClick={()=>navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
      </div>
  )
}

export default PersonDetail