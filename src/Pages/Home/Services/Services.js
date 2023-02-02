import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&order=${
        isAsc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc, search]);

  return (
    <div className="mb-20">
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>

        <input
          ref={searchRef}
          type="text"
          placeholder="Search here"
          className="input input-sm"
        />
        <button className="btn btn-sm" onClick={handleSearch}>
          Search
        </button>

        <button onClick={() => setIsAsc(!isAsc)} className="btn  btn-ghost">
          {isAsc ? "Desc" : "Asc"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
