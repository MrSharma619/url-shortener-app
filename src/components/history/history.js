import { useLayoutEffect, useState } from "react";
import "./style.css";

function History(props) {
  //console.log("g", history);

  useLayoutEffect(() => {
    if (props.data.isCopied === true) {
      setCopyTxt("Copied!");
      setCopyClass("button_copied");
    } else {
      setCopyTxt("Copy");
      setCopyClass("button_copy");
    }
  }, [props.data.isCopied]);

  const [copyTxt, setCopyTxt] = useState("Copy");
  const [copyClass, setCopyClass] = useState("button_copy");

  return (
    <div className="history_div">
      <div className="d-flex_history">
        <div className="p-2 flex-fill original_link_div">
          <span className="span_originallink">{props.data.originalLink}</span>
        </div>
        <div className="p-2 flex-fill short_link_div">
          <span className="span_shortlink">{props.data.shortLink}</span>
        </div>
        <div className="p-2 flex-fill link_button_div">
          <button
            type="submit"
            onClick={() => {
              props.handleCopy(props.data.id);
            }}
            className={copyClass}
          >
            {copyTxt}
          </button>
        </div>
      </div>
    </div>
  );
}

export default History;
