import React, { useState } from "react";
import axios from "axios";
import "./SearchTranslate.css";
import config from "../../config";
const { SERVER_SITE } = config;

function SearchTranslate(props) {
  const [translate, setTranslate] = useState("");
  const server =
    props.type === "word"
      ? `${SERVER_SITE}/searchWord`
      : `${SERVER_SITE}/translatePhrase`;

  const fetchAPI = async (input) => {
    try {
      const response = await axios.post(server, { input });
      alert(response.data.msg);

      location.reload();
    } catch (err) {
      alert("Error 503, Service is Unavailable");
      console.log(err);
    }
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    await fetchAPI(translate);
  };

  const handlerKeyDown = (event) => {
    if (event.key === "Enter") {
      handlerSubmit(event);
    }
  };

  return (
    <>
      <div className="pageSpace boxForm">
        <form onSubmit={handlerSubmit} className="form-card">
          <label className="text-form">{`
            Write a ${props.type} to add in Anki
          `}</label>
          <div className="type-input">
            <input
              type="text"
              value={translate}
              onChange={(e) => setTranslate(e.target.value)}
              onKeyDown={handlerKeyDown}
            />
            <button type="submit" className="btn">
              Serach
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchTranslate;
