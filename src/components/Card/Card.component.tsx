import React, { Fragment, FC } from "react";
import "./Card.css";

export interface CardProps {}

const Card: FC<CardProps> = () => {
  //work in progress
  return (
    <Fragment>
      <div>
        <h3>NEW</h3>
        <div className="card-container">
          <div className="child-width">
            <div>
              <b>Patient: </b>
              Patient Name{" "}
            </div>
            <div>
              <img width="100px" src="/charmander.png" alt="charmander" />{" "}
            </div>
          </div>
          <div className="child-width">
            <div>
              <b>Date: </b>
              {new Date().toDateString()}
            </div>
            <div className="pt-5">
              <b>Reason: </b>
              <br />
              Reason Here
            </div>
            <div className="pt-5 pb-5">
              <b>Actions: </b>
              <button
                onClick={() =>
                  console.log("%cClicked", "color:green;font-size:30px;")
                }
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="child-width">
            <b>Doctor: </b>
            Doctor Name
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default Card;
