import React, { Component } from "react";
import ReservationFormComponent from "../components/ReservationFormComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Grid, Container } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <section id="main-slider">
          <div class="container flex justify-between">
            <div class="flex flex-column justify-center align-center">
              <h2>BeatyDate</h2>
              <p>YOU DESERVE THE BEST EXPERIENCE</p>
              <button>MAKE AN APPOINTMENT</button>
            </div>
            <div>
              <img
                class="slider-img"
                src="../assets/images/salon.png"
                alt="Melhores tecnologias"
              />
            </div>
          </div>


        </section>

        <section id="booking-section">
          <div className="container">
            <div className="flex  align-center">
              <ReservationFormComponent />
              <div className="reservation-section-text">
                <h2>
                  Simply
                <br />
                book <br />
                hairdresser & beaty <br />
                more beautifully
              </h2>
              </div>
            </div>
          </div>

        </section>

        <section>
          <div class="container">
            <div class="section-title">
              <h1>Services</h1>
            </div>
            <div class="flex justify-between">
              <a class="service-box link" href="">
                <img
                  class="service-image"
                  src="../assets/images/1.jpg"
                  alt=""
                />
                <span class="service-title">Hairdresser</span>
              </a>
              <a class="service-box link" href="">
                <img
                  class="service-image"
                  src="../assets/images/4.jpg"
                  alt=""
                />
                <span class="service-title">Hair Removal</span>
              </a>
              <a class="service-box link" href="">
                <img
                  class="service-image"
                  src="../assets/images/2.jpg"
                  alt=""
                />
                <span class="service-title">Nails</span>
              </a>
              <a class="service-box link" href="">
                <img
                  class="service-image"
                  src="../assets/images/3.jpg"
                  alt=""
                />
                <span class="service-title">Men</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
export default Home;
