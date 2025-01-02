import Details from "./Components/Details"
import Header from "./Components/Header"

const App = () => {
  return (
    <div className="p-5 bg-sky-50 w-full h-screen poppins mobile:p-3 tablet:p-4 laptop:p-5">
      <Header />
      <Details />
    </div>
  )
}

export default App