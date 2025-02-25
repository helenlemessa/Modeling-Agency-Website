// ModelsPage.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Models from "./Models";

const ModelsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
       
      <div className="flex-grow">
        <Models />
      </div>
     
    </div>
  );
};

export default ModelsPage;