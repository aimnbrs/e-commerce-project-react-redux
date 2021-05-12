import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { useDropzone } from "react-dropzone";
import { creatProduct } from "../../redux/products/productAction";

export default function AddProduct() {
  const dispatch = useDispatch();

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
  });
  let formData = new FormData();
  
  const files = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));
useEffect(() => {
    console.log("formdata");
    formData.append("file", acceptedFiles[0]);
    formData.append("model",model);
      formData.append('status',status);
      formData.append('category',category);
      formData.append('price',price);
      formData.append('style',style);
      formData.append('color',color);
    // formData.append("name", "productImage")

}, [acceptedFiles])
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("Popularity");
  const [category, setCategory] = useState("Women");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("Black");
  const [style, setStyle] = useState("Fashion");
  const submitHandler = (e) => {
      console.log(model);
      console.log(status);
      console.log(category);
      console.log(price);
      console.log(style);
      console.log(color);
      console.log(acceptedFiles, formData);
    e.preventDefault()
    dispatch(
      creatProduct(formData)
    );
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label for="fname">Model Name</label>
        <input
          onChange={(e) => setModel(e.target.value)}
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <label for="Color">Color</label>
        <select
          onChange={(e) => setColor(e.target.value)}
          id="Color"
          name="Color"
        >
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Grey">Grey</option>
          <option value="Green">Green</option>
          <option value="White">White</option>
        </select>

        <label for="Status">Status</label>
        <select
          onChange={(e) => setStatus(e.target.value)}
          id="Status"
          name="Status"
        >
          <option value="australia">Popularity</option>
          <option value="canada">Average rating</option>
          <option value="usa">Newness</option>
        </select>

        <label for="Style">Style</label>
        <select
          onChange={(e) => setStyle(e.target.value)}
          id="Style"
          name="Style"
        >
          <option value="Fashion">Fashion</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Denim">Denim</option>
          <option value="Streetstyle">Streetstyle</option>
        </select>

        <label for="Category">Category</label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          id="Category"
          name="country"
        >
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Bag">Bag</option>
          <option value="Shoes">Shoes</option>
          <option value="Watches">Watches</option>
        </select>

        <label for="price">Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="price"
          name="price"
        //   placeholder="Your name.."
        />
        <button type="submit">submit</button>
      </form>

      <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button type="button" onClick={open}>
            Open File Dialog
          </button>
        </div>
        <div>
          <h4>Files</h4>
          <ul>{files}</ul>
        </div>
      </div>
    </>
  );
}
