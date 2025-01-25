import React, { useState,useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function GetFashion() {

    const [news, setnews] = useState([]);
    useEffect(() => {
      axios
        .get("http://127.0.0.1:3000/getfashionitem")
        .then((res) => {
          // handle success
          console.log(res.data);
          setnews(res.data);
          //  console.log(res);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, []);
    return ( 
        <>
        <div className="container my-5">
          <div className="row text-center">
            {news.map((val) => {
              return (
                <div className="col my-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={val.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.name}</h5>
                      <p className="card-text">{val.prize}</p>
                      <p className="card-text">{val.size}</p>
                      <p className="card-text">{val.color}</p>
                      <p className="card-text">{val.occasion}</p>
                      {/* <p className="card-text">{val.rating}</p> */}
                      <a
                        href={val.rating}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
  )
}

export default GetFashion