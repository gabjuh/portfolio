import react from "react";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import Certificates from "./components/Certificates"
import Demos from "./components/Demos";
import Footer from "./components/Footer";
import GetCv from "./components/GetCv";

export default App = () => {
  return (
    <div className="container-md bg-light p-0 mt-md-5 shadow-lg" id="rounded-bg">
      <Header />
      <GetCv/>
      <Experiences />
      <Certificates />
      <Demos />
      <Footer />
    </div>
  )
}