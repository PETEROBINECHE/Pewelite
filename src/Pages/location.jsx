import "../css/Pawcss.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaStreetView } from "react-icons/fa";
// import DelivBtn from "../Delivery_Locations/DelivBtn";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IoMdCloseCircle } from "react-icons/io";

const Location_Modal = ({ toclose }) => {
  const [locationValue, SetLocationValue] = useState("");
  const [modalState, SetModalState] = useState(false);

  const AddressValidation = () => {
    if (locationValue == "") {
      // console.log("user didn't input location");
      toast.error("Please input your location");
    } else {
      console.log("location was inputed");
      toclose(false)
    }
  };



  return (
    <div className="Location_modal_bg">
      {/* main */}

      <div className="Location_modal_cont">
        <div className="Location_modal_child">
          {/* Location input */}
          <div className="location_modal_input_cont">
            <h3 className="font-semibold text-xl text-[#252839]">Enter your State</h3>

            {/* input */}
            <div className="location_modal_input">
              <FaLocationDot style={{ fontSize: "1.5rem" }} />
              <input
                type="text"
                // onClick={() => toast.error("on input")}
                value={locationValue}
                onChange={(e) => SetLocationValue(e.target.value)}
                placeholder="Type in your state"
                className="text-xl"
              />
              <ToastContainer position="bottom-right" />
            </div>
          </div>

          {/* icon */}
          <div
            style={{
            //   border: "2px solid pink",
              width: "60%",
              height: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <FaStreetView
              style={{
                
                fontSize: "5.5rem",
                color: "gray",
                marginBottom: "1rem",
              }}
            />
           <button className='px-15 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' onClick={AddressValidation}>Confirm State</button>
          </div>
        </div>
       
        <span className='p-3 bg-[#252839] rounded text-[#F2B632] absolute right-3 top-3 cursor-pointer hover:bg-red-600 hover:text-white' onClick={() => toclose(false)}>
            X
        </span>
      </div>
    </div>
  );
};

export default Location_Modal;
