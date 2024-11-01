import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="">
      <div className="bg-gradient-to-br from-[#F2C8FF] to-[#E6E6FA] h-screen">
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
