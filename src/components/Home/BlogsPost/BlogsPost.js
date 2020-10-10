import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogsPost = ({ blog }) => {
  const { title, description, author, authorImg, date, icon } = blog;
  return (
    <div className="card shadow-sm bg-white border-0 ">
      <div className="card-header bg-transparent border-0 d-flex align-items-center">
        <img src={authorImg} className="mx-3" alt="" width="60" />
        <div className="p-2">
          <h6 style={{ color: "#1CC7C1" }}>{author}</h6>
          <p className="text-secondary m-0">{date}</p>
        </div>
      </div>
      <div className="card-body">
        <h4>{title}</h4>
        <p className="card-text mt-4 text-secondary hover-none">
          {description}
        </p>
        <div className="arrow-icon d-none mt-4 pt-5" >
          <FontAwesomeIcon style={{fontSize: '35px'}} icon={icon} />
        </div>
      </div>
    </div>
  );
};

export default BlogsPost;
