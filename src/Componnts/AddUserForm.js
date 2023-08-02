import React, { useState } from "react";
import { addUser } from "./Action";
import { useDispatch } from "react-redux";

const AddUserForm = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    street: "",
    number: 0,
    zipcode: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(formData));
    console.log(formData);
    onClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const fields = [
    { name: "firstname", placeholder: "First Name" },
    { name: "lastname", placeholder: "Last Name" },
    { name: "username", placeholder: "Username" },
    { name: "email", placeholder: "Email" },
    { name: "phone", placeholder: "Phone" },
    { name: "password", placeholder: "Password" },
    { name: "number", placeholder: "home Number" },
    { name: "street", placeholder: "street" },
    { name: "city", placeholder: "city" },
    { name: "zipcode", placeholder: "zipcode" },
  ];

  return (
    isOpen && (
      <div className="absolute h-full w-full top-0 left-0 bg-[rgb(0,0,0,0.5)] flex justify-center items-center flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col bg-white">
          <h3>Add User Deatil..</h3>
          <div className="flex flex-col mx-10 mb-5">
            {fields.map((field) => (
              <input
                key={field.name}
                type="text"
                className="m-3 w-[250px] h-[30px] rounded-lg pl-2"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
              />
            ))}
            <button
              type="submit"
              className="p-2 m-2 border-none w-[70px] h-[30px] rounded-xl bg-black text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default AddUserForm;
