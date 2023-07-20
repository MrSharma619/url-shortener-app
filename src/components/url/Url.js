import React, { useState } from "react";
import "./style.css";
import History from "../history/history";

function Url() {
  const [errorMsg, setErrorMsg] = useState("");
  const [inputMissing, setInputMissing] = useState(false);
  const [historyArr, setHistoryArr] = useState([]);
  //  useState([
  //   {
  //     id: 1,
  //     originalLink: "https://www.twitter.com",
  //     shortLink: "https://www.relink/ffYooP",
  //     isCopied: false,
  //   },
  //   {
  //     id: 2,
  //     originalLink: "https://www.twitter.com",
  //     shortLink: "https://www.relink/ffYooP",
  //     isCopied: false,
  //   },
  //   {
  //     id: 3,
  //     originalLink: "https://www.twitter.com",
  //     shortLink: "https://www.relink/ffYooP",
  //     isCopied: false,
  //   },
  // ]);

  const handleCopy = (id) => {
    setHistoryArr((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          return { ...h, isCopied: true };
        } else {
          return { ...h, isCopied: false };
        }
      })
    );
  };

  return (
    <div className="url_parent">
      <div className="url_section">
        <div className="d-flex-url">
          <div className="p-2 flex-fill">
            <div className="d-flex-url2 flex-column mb-3">
              <div className="p-2">
                <input
                  type="text"
                  className={inputMissing ? "input_url_error" : "input_url"}
                  placeholder="Shorten a link here..."
                />
              </div>
              <div className="p-2">
                <span className="error_url_input">{errorMsg}</span>
              </div>
            </div>
          </div>
          <div className="p-2 flex-fill">
            <button className="button_shorten">Shorten It!</button>
          </div>
        </div>
      </div>

      {historyArr?.map((h, index) => {
        return (
          <React.Fragment key={index}>
            <History data={h} handleCopy={handleCopy} />
            <br></br>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Url;
