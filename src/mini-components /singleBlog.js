import React from "react";

const singleBlog = props => {
  
    return (

        <div className="box">
        <div className="media-content">
         <div className="content">
           <h2> {props.title }</h2>
           <small>{props.author }</small> <small>31m</small>
           <p>{props.briefBlog}</p>
          
          </div>
        
          </div>
      </div>


    );


}


export default singleBlog ;