import Header from "./components/header/Header"
import Body from "./components/ui/Body";
import Footer from "./components/footer/Footer"
import "../src/App.css"
const App = () => {
  return (
    <div className="main-body">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App