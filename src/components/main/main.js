import BottomSection from "../bottomsection/BottomSection";
import Footer from "../footer/footer";
import MidSection from "../midsection/MidSection";
import Navbar from "../navbar/navbar";
import TopSection from "../topsection/TopSection";
import Url from "../url/Url";
import "./style.css";

function Main() {
  return (
    <>
      <Navbar />

      <br></br>
      <br></br>
      <br></br>

      <TopSection />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="features_grey_bg" className="grey_bg">
        <Url />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <MidSection />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <BottomSection />

      <Footer />
    </>
  );
}

export default Main;
