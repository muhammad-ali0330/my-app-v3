import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#303030",
    backgroundColor: props.mode === "dark" ? "#303030" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About US</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Text Reformer </strong> is an advanced text utility
              designed to help you analyze and refine your text with ease.
              Whether you're looking to improve readability, check grammar, or
              simply reformat your content, Text Reformer has you covered. Our
              tool provides real-time analysis and suggestions to make your text
              clearer, more engaging, and error-free. Start transforming your
              text today!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Text Reformer</strong> is a powerful, free-to-use text
              utility that helps you analyze and enhance your writing
              effortlessly. Whether you're a student, writer, or professional,
              Text Reformer provides essential tools to improve your text,
              making it more clear, concise, and error-free. Best of all, it’s
              completely free—start refining your text today without any cost!{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Created with ReactJS by Muhammad Ali</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Text Reformer</strong> is a text utility app created with
              ReactJS by Muhammad Ali. It’s designed to help you analyze,
              refine, and enhance your text effortlessly. Whether you’re
              polishing your writing for clarity or checking for errors, Text
              Reformer provides the tools you need, all built with the power of
              ReactJS. Try it today and experience a smooth, intuitive text
              transformation!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
