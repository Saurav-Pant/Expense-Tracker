import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";

const EditExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState(null);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [description, setDescription] = useState("");

  const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const BACKEND_URL= "https://expense-087x.onrender.com/"


  useEffect(() => {
    fetch(`${BACKEND_URL}/edit/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setExpense(data);
        setTitle(data.title);
        setAmount(data.amount);
        setSelectedDate(new Date(data.date));
        setDescription(data.description);
      })
      .catch((error) => console.log("Error:", error));
  }, [id]);
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          amount,
          date: selectedDate.toISOString(),
          description,
        }),
      });
      if (response.ok) {
        navigate("/dashboard", { state: { saved: true } }); 
      } else {
        // Failed to update the expense
        console.log("Failed to update the expense");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
  const handleDelete = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/edit/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/dashboard", { state: { deleted: true } }); 
      } else {
        // Failed to delete the expense
        console.log("Failed to delete the expense");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  

  if (!expense) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute top-5 left-5 mt-4 mr-4 bg-blue-400 rounded-full">
        <span>
          <Link to="/dashboard">
            <GrFormPreviousLink size={60} color="#4FD1C5" />
          </Link>
        </span>
      </div>
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 w-96"
        initial={{ scale: 0 }}
        animate={{ scale: 1, delay: 0.5, easing: "ease-in-out" }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleUpdate}>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-600">Title:</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500
                text-amber-950

                 "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600">Amount:</label>
              <input
                type="number"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500
                text-amber-950

                 "
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600">Date:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500
                text-amber-950
                 "
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600">Description:</label>
              <textarea
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none
                text-amber-950

                 "
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              type="submit"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Save
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group ml-36"
              onClick={handleDelete}
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Delete
              </span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditExpense;
