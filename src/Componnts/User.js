import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Action";
import { Link } from "react-router-dom";
import AddUserForm from "./AddUserForm";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div className="relative">
      <h1 className="text-center mb-0">All User details</h1>
      <div>
        <Link to="/home">
          <button className="p-3 rounded-3xl flex ml-5">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </Link>
        <hr />
        <div className="mr-8 flex justify-end">
          <button
            className="border-none bg-blue-800 text-white h-[30px] "
            onClick={handleAdd}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 m-5">
          {users.map((items) => {
            return (
              <div
                className="border-solid border-2 m-5 p-3 rounded-lg border-gray-300"
                key={items.id}
              >
                <p className="text-left pl-4">
                  <strong>Name :</strong> {items.name["firstname"]}{" "}
                  {items.name["lastname"]}
                </p>
                <p className="text-left pl-4">
                  <strong>Phone :</strong> {items.phone} $
                </p>
                <p className="text-left pl-4">
                  <strong>Email :</strong> {items.email} $
                </p>
                <p className="text-left pl-4">
                  <strong>Address :</strong> {items.address["number"]},{" "}
                  {items.address["street"]}, {items.address["city"]},{" "}
                  {items.address["zipcode"]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <AddUserForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default User;
