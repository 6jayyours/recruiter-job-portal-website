import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Landing from "./pages/commonpages/Landing";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
