import Logo from "./Logo"
import Navbar from "./Navbar"
const Header = ()=>{
  return (
    <header className="header">
      <Logo/>
      <h2 className="header-title">&lt; header &gt;</h2>
      <Navbar/>
    </header>
  )
}

export default Header