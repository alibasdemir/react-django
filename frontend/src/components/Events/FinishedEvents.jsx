import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

function FinishedEvents() {
  return (
    <div className="text-center mb-6 mx-12 lg:mx-24">
      <div
        className="eventHeader bg-gray-100 rounded-full flex items-center lg:justify-start justify-center py-3 lg:px-10 content-center"
        style={{ boxShadow: "0 4px 8px #cbd5e1" }}
      >
        <RiArrowRightSLine className="text-2xl mr-2 lg:mr-3 text-indigo-500" />
        <Link
          to="/finishedevents"
          className="font-bold text-rose-500 lg:text-xl text-sm no-underline hover:scale-105"
        >
          Süresi Geçen Etkinlikler
        </Link>
      </div>
    </div>
  );
}

export default FinishedEvents;
