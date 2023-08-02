import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./Action";

const Add = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = () => {
    dispatch(addProduct(formData));
    onClose();
  };

  return (
    isOpen && (
      <div className="absolute h-full w-full top-0 left-0 bg-[rgb(0,0,0,0.5)] flex justify-center items-center flex-col">
        <div className="bg-slate-200 p-4 flex flex-col">
          <h3>Add Product</h3>
          {Object.entries(formData).map(([field, value]) => (
            <div key={field} className="flex flex-col m-2">
              {field === "image" ? (
                <input
                  type="file"
                  className="p-2"
                  name={field}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={field === "price" ? "number" : "text"}
                  step={field === "price" ? "0.01" : undefined}
                  className="p-2 border-none w-[300px] h-[30px] rounded-xl"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={value}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <div className="flex justify-between">
            <button
              className="p-2 m-2 border-none w-[70px] h-[30px] rounded-xl bg-black text-white"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              className="p-2 m-2 border-none w-[70px] h-[30px] rounded-xl bg-black text-white"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Add;
