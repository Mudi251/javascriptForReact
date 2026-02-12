import { useParams } from "react-router-dom";


const New = () =>{
 const param = useParams();
 
  return<>
  <h1>{param.id}New</h1>
  </>
}
export default New;