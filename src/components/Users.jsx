import React, { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Users() {
  const [user, setUser] = useState([]);

  //   console.log(user[1]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <>
      <div className="container" >
        <div className="card" style={{margin:"auto"}}>
          <LazyLoadImage
            placeholderSrc="https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
            threshold="10"
            src="https://images.unsplash.com/photo-1647933611937-448a601c59eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            style={{ width: "250px", height: "200px" }}
          />
          <p style={{ fontWeight:"bold" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta itaque animi.</p>
        </div>
        <div className="card" style={{margin:"auto"}}>
          <LazyLoadImage
            placeholderSrc="https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
            threshold="10"
            src="https://images.unsplash.com/photo-1639501295122-28c362f2a571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            style={{ width: "250px", height: "200px" }}
          />
           <p style={{ fontWeight: "bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio explicabo cupiditate.
               
           </p>
        </div>
        {user.map((data) => {
          return (
            <>
              <div className="card" style={{margin:"auto"}}>
                <LazyLoadImage
                  effect="black-and-white"
                  threshold="10"
                  src={data.url}
                  alt=""
                  style={{ width: "250px", height: "200px" }}
                />
                <h4>{data.title}</h4>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
