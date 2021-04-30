import React, { useEffect, useState } from "react";
// import { Form, Button, Field, Checkbox } from "semantic-ui-react";
import Salons from "../pages/Salons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";


const ReservationFormComponent = () => {

  const history = useHistory();
  const [locations, setLocations] = useState(null);
  const [services, setServices] = useState(null);
  const [choosedDate, setChoosedDate] = useState({
    location: null,
    service: null,
  });


  useEffect(() => {
    fetch('http://localhost:3001/location')
      .then(Response => Response.json())
      .then(locations => setLocations(locations))

    console.log(locations);
  }, []);

  const handleLocationsChange = event => {
    event.preventDefault();
    setChoosedDate({ ...choosedDate, location: event.target.value });
  };

  const handleServiceChange = event => {
    event.preventDefault();
    setChoosedDate({ ...choosedDate, service: event.target.value });
  };

  useEffect(() => {
    fetch('http://localhost:3001/salon/service')
      .then(Response => Response.json())
      .then(services => setServices(services))
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/salons/${choosedDate.location}/${choosedDate.service}`)
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="flex align-center  justify-between tabs">
        <span className="flex flex-column justify-center">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span className="">Treatments</span>
        </span>

        <span className="flex flex-column justify-center">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <Link className="" to="/Salons">Salons</Link>
        </span>
      </div>
      <div className="form">

        <div className="drop-down">
          <select onChange={handleServiceChange}>
            <option value="">--Zgjedh Sherbim--</option>
            {
              services && services.map(service => <option value={service.id}>{service.name}</option>)
            }</select>
        </div>
        <div className="drop-down">
          <select onChange={handleLocationsChange}>
            <option value="">--Zgjedh Lokacion--</option>
            {
              locations && locations.map(location => <option value={location.id}>{location.location}</option>)
            }</select>
        </div>
        <button type="submit" className={`btn ${!choosedDate.location || !choosedDate.service ? 'btn-disabled' : 'btn-submit'}`} disabled={!choosedDate.location || !choosedDate.service}>FIND ON BEAUTY DATE</button>
      </div>
    </form>
  );
}
export default ReservationFormComponent;
