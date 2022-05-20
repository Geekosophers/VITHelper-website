import React from "react";

const LoadingPage = () => (
  <>
    <div className="loader">
      <iframe
        src="/images/loader.html"
        height="90%"
        width="90%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  </>
);

export default LoadingPage;
