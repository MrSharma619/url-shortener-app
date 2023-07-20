import "./style.css";

function TopSection() {
  return (
    <div className="d-flex-topsection">
      <div className="p-2 flex-fill left_flex">
        <div className="d-flex-topsection2 flex-column mb-3">
          <div className="p-2">
            <span className="top_span_1">
              More than just <br></br> shorter links
            </span>
          </div>
          <br></br>
          <div className="p-2">
            <span className="top_span_2">
              Build your brand's recognition and get detailed <br></br>
              insights on how your links are performing.
            </span>
          </div>
          <br></br>
          <br></br>

          <div className="p-2">
            <button className="button_get_started">Get Started</button>
          </div>
        </div>
      </div>
      <div className="p-2 flex-fill right_flex">
        <img
          className="img_top_1"
          src="images/illustration-working.svg"
          alt="working person here"
        />
      </div>
    </div>
  );
}

export default TopSection;
