import React, { useState } from "react";
import "./form.scss";
import Modal from "../modal/Modal";

let formCard = [
  {
    id: 1,
    fname: "Ferran",
    lname: "Torres",
    birth: "2000-12-09",
    number: 9989891829,
    gender: "male",
    url: "https://st.depositphotos.com/1005251/1960/i/950/depositphotos_19602321-stock-photo-black-man.jpg",
  },
  {
    id: 2,
    fname: "Alia",
    lname: "Marias",
    birth: "1998-11-10",
    number: 9989891829,
    gender: "female",
    url: "https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg",
  },
];

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [birth, setBirth] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState(formCard);
  const [edit, setEdit] = useState(null);

  const hundleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      let index = data.findIndex((el) => el.id === edit.id);
      let updeteData = {
        id: edit.id,
        fname: fname,
        lname: lname,
        url: url,
        birth: birth,
        number: +number,
        gender: gender,
      };
      let updete = data;
      updete.splice(index, 1, updeteData);
      setData(updete);
      setEdit(null);
    } else {
      const users = {
        id: new Date().getTime(),
        fname: fname,
        lname: lname,
        birth: birth,
        url: url,
        number: +number,
        gender: gender,
      };
      setData((prev) => [...prev, users]);
    }
    setFname("");
    setLname("");
    setBirth("");
    setUrl("");
    setNumber("");
    setGender("");
  };
  console.log(data);

  const cardDelete = (id) => {
    setEdit(null);
    if (confirm("O'chirishga tayyormisiz")) {
      let filterCard = data.filter((el) => el.id !== id);
      setData(filterCard);
    }
  };

  const cardEdit = (el) => {
    setEdit(el);
    setFname(el.fname);
    setLname(el.lname);
    setUrl(el.url);
    setBirth(el.birth);
    setNumber(el.number);
    setGender(el.gender);
  };

  const [product, setProduct] = useState(null);
  const userData = data?.map((el) => (
    <div key={el.id} className="form__card">
      <div className="form__card__img">
        <img src={el.url} alt="" onClick={() => setProduct(el)} />
      </div>
      <div className="form__card__info">
        <h3 className="form__card__title">
          {el.fname} {el.lname}
        </h3>
        <p className="form__card__desc">
          <span>birth:</span>
          {el.birth}
        </p>
        <p className="form__card__desc">
          <span>gender: </span>
          {el.gender}
        </p>
        <p className="form__card__desc">
          <span>number:</span> {el.number}
        </p>
        <div className="form__card__btns">
          <button
            className="form__card__btn form__delete"
            onClick={() => cardDelete(el.id)}
          >
            Delete
          </button>
          <button
            className="form__card__btn form__edit"
            onClick={() => cardEdit(el)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="container">
      <div className="forms">
        <form onSubmit={hundleSubmit} className="form" action="">
          <h1 className="form__title">Form</h1>
          <div>
            <label htmlFor="">Full name</label>
            <input
              required
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="fullName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input
              required
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="lastName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Url</label>
            <input
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="url"
              type="url"
            />
          </div>
          <div>
            <label htmlFor="">BirthDate</label>
            <input
              required
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              placeholder="birthdate"
              type="date"
            />
          </div>
          <div>
            <label htmlFor="">Phone number</label>
            <input
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="tel"
              type="number"
            />
          </div>
          <div>
            <label htmlFor="Gender">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              name=""
              id=""
            >
              <option value="gender">Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div className="form__btn">
            <button className="form__submit">{edit ? "Save" : "Create"}</button>
          </div>
        </form>
        <div className="form__cards">{userData}</div>
        {product ? <Modal data={product} close={setProduct} /> : <></>}
      </div>
    </section>
  );
}

export default Form;
