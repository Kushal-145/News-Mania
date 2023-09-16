
import React from "react";
const Newsitem=(props)=>{

  const  { title, description, imageUrl, newsUrl, author, date, source } = props; // -->> destructuring syntax of an object
    return (
      <div className="my-3">
        This is a - News item
        <div className="card">
         <div className ="via">
         <span
            className=" badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: 1 }}
          >
            {source}{" "}
          </span></div> 
          <img src={imageUrl} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              {" "}
              Explore more{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
