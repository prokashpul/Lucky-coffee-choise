import { useEffect, useState } from "react";
import Faq from "../Faq/Faq";
import "./Questionandans.css";
const Questionandans = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetch("questionans.json")
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, []);
  return (
    <div className="faqs">
      <h3>Question And Answer </h3>
      {faq.map((faq) => (
        <Faq faq={faq} key={faq.id}></Faq>
      ))}
    </div>
  );
};

export default Questionandans;
