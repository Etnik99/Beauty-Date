import React, { useEffect, useState } from "react";
import SalonCardComponent from "../components/SalonCardComponent";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Salons = () => {
  const [salons, setSalons] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const params = useParams();

  console.log(params);
  useEffect(() => {
    setIsLoaded(Object.keys(params).length === 0);
    // if (!params.id) {
    //   fetch('http://localhost:3001/salons')
    //     .then(Response => Response.json())
    //     .then(salons => {
    //       setSalons(salons);
    //       setIsLoaded(true);
    //     })
    // } else {
    fetch(`http://localhost:3001/salons/${params.serviceId ? params.serviceId : ''}${params.locationId ? `/${params.locationId}` : ''}`)
      .then(Response => Response.json())
      .then(salons => {
        console.log(salons)
        setSalons(Object.prototype.toString.call(salons) === '[object Array]' ? salons : null);
        setIsLoaded(true);
      })
    console.log(salons);
    // }
  }, []);

  if (!isLoaded) {
    return (
      <h1 >Loading...</h1>
    )
  } else {
    return (
      <div>
        <Header />
        <div className="container">
          {
            salons ? (
              salons.map(salon => (
                <SalonCardComponent key={salon.id} location={salon.location} name={salon.name} description={salon.description} />
              ))
            ) : (
              <>
                <h1>NUk ka sallone.</h1>
              </>
            )
          }
        </div>
        <Footer />
      </div>

    );
  }

}
export default Salons;

