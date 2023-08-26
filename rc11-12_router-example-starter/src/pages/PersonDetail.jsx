import { useLocation, useNavigate } from "react-router-dom"


const PersonDetail = () => {
  let {state : person} =useLocation();
  let navigate =useNavigate();

  console.log(person);
  return (
    <div className="container text-center">PersonDetail</div>
  )
}

export default PersonDetail