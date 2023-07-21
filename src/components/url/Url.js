import React, { useEffect, useState } from "react";
import "./style.css";
import History from "../history/history";
import { v4 as uuidv4 } from "uuid";

function Url() {
  const [url, setUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [inputMissing, setInputMissing] = useState(false);
  const [historyArr, setHistoryArr] = useState(() => {
    return JSON.parse(localStorage.getItem("shortened-urls")) || [];
  });

  const handleCopy = (id) => {
    setHistoryArr((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          navigator.clipboard.writeText(h.shortLink);
          return { ...h, isCopied: true };
        } else {
          return { ...h, isCopied: false };
        }
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (url.length === 0) {
      //console.log("hi");

      setInputMissing(true);
      setErrorMsg("Please add a link");
    } else {
      setInputMissing(false);
      setErrorMsg("");

      const apiUrl = "https://api.shrtco.de/v2/shorten?url=" + url;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);

          if (data.ok) {
            const historyObj = {
              id: uuidv4(),
              originalLink: url,
              shortLink: data.result.full_short_link,
              isCopied: false,
            };

            setHistoryArr((prev) => [...prev, historyObj]);
          }
        });
    }

    //console.log("hi2");
  };

  useEffect(() => {
    localStorage.setItem("shortened-urls", JSON.stringify(historyArr));
  }, [historyArr]);

  useEffect(() => {
    setHistoryArr((prev) =>
      prev.map((h) => {
        return { ...h, isCopied: false };
      })
    );
  }, []);

  return (
    <div className="url_parent">
      <div className="url_section">
        <div className="d-flex-url">
          <div className="p-2 flex-fill">
            <div className="d-flex-url2 flex-column mb-3">
              <div className="p-2">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
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
            <button onClick={handleSubmit} className="button_shorten">
              Shorten It!
            </button>
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
