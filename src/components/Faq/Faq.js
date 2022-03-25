import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Faq.css";

const Faq = ({ faq }) => {
  const { question, answer, propsDef, states } = faq;
  const [show, setShow] = useState([]);

  return (
    <div>
      <div className="faq">
        <div className="faq-header" onClick={() => setShow(!show)}>
          <h4>{question}</h4>
          <div className="icon">
            {!show ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </div>
        </div>
        <div className={!show ? "open answer " : "answer"}>
          <p>{answer ? answer : ""}</p>
          <p>{propsDef}</p>
          <p>{states}</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
