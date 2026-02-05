import Aside from "./Aside";
import Main from "./Main";
const Body = () => {
  return (
    <div className="body">
      <Aside />
      <Main/>
      <Aside/>  
    </div>
  )
}

export default Body