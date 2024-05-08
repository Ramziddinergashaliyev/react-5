import React from "react";
import "./modal.scss";

function Modal({ data, close }) {
  return (
    <div>
      <div>
        <div onClick={() => close(null)} className="modal__overly"></div>;
        <div className="modal__cards">
          <div className="modal__card__img">
            <img src={data.url} alt="" />
          </div>
          <div className="modal__card__info">
            <h2 className="modal__card__title">{data.fname}</h2>
            <p className="modal__card__desc">
              <span>LastName: </span>
              {data.lname}
            </p>
            <p className="modal__card__desc">
              <span>BirthData: </span>
              {data.birth}
            </p>
            <p className="modal__card__desc">
              <span>Number: </span>
              {data.number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
