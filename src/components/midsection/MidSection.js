import "./style.css";

function MidSection() {
  return (
    <>
      <div className="div_mid_top">
        <span className="mid_top_head">Advanced Statistics</span>

        <br></br>
        <br></br>

        <span className="mid_top_subtext">
          Track how your links are performing across the web with <br></br>
          our advanced statistics dashboard.
        </span>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="d-flex-3cards">
        <div className="p-2 flex-fill">
          <div className="card_mid1">
            <img
              className="img_card_mid"
              src="images/icon-brand-recognition.svg"
              alt="small_svg"
            />
            <div className="card_mid_container">
              <h4>
                <b className="top_text_card">Brand Recognition</b>
              </h4>
              <p className="card_subtext">
                Boost your brand recognition with <br></br>
                each click. Generic links don't mean a <br></br>
                thing. Branded links help instil <br></br>
                confidence in your content.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 flex-fill">
          <hr className="hr_mid_between_card" />
        </div>
        <div className="p-2 flex-fill">
          <div className="card_mid2">
            <img
              className="img_card_mid"
              src="images/icon-detailed-records.svg"
              alt="small_svg"
            />
            <div className="card_mid_container">
              <h4>
                <b className="top_text_card">Detailed Records</b>
              </h4>
              <p className="card_subtext">
                Gain insights into who is clicking your <br></br>
                links. Knowing when and where <br></br>
                people engage with your content <br></br>
                helps inform better decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 flex-fill">
          <hr className="hr_mid_between_card" />
        </div>
        <div className="p-2 flex-fill">
          <div className="card_mid3">
            <img
              className="img_card_mid"
              src="images/icon-fully-customizable.svg"
              alt="small_svg"
            />
            <div className="card_mid_container">
              <h4>
                <b className="top_text_card">Fully Customizable</b>
              </h4>
              <p className="card_subtext">
                Improve brand awareness and <br></br>
                content discoverability through <br></br>
                customizable links, supercharging <br></br>
                audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default MidSection;
