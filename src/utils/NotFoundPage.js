import React from "react";
import "./notFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Halaman tidak ditemukan</p>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmt_MymTXxgJCp_ViO7Hpr-y1v4EynKU-krg&usqp=CAU"} alt="Not Found" className="not-found-image" />
    </div>
  );
};

export default NotFoundPage;
