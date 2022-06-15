import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/javka.css";
import { Container } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import teslaStation from "../data/stations.json";
import Footer from "./Footer";

export default function DeliveryZone() {
  return (
    <>
      <Container>
        <div className="d-block d-md-none">
          <div className="d-flex mb-2 mt-4 mb-4">
            <div className="square-point  me-2"></div>
            <p className="mb-0">ХҮРГЭЛТИЙН БҮС</p>
          </div>
          <div>
            <section className="">
              <h2 className="fs-2 fw-bold">"A"Бүс</h2>
              <ul className="list-unstyled shadow p-3 mb-2 bg-body rounded-3">
                <li className="d-flex mb-2 ">
                  <div className="pe-2 rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1 " alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
                <li className="d-flex mb-2 ">
                  <div className="pe-2  rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1" alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
                <li className="d-flex mb-2 ">
                  <div className="pe-2  rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1" alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
                <li className="d-flex mb-2 ">
                  <div className="pe-2  rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1" alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
                <li className="d-flex mb-2 ">
                  <div className="pe-2  rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1" alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
              </ul>
            </section>
            <section className="mt-4 mb-4">
              <h2 className="fs-2 fw-bold">"Б"Бүс</h2>
              <ul className="list-unstyled shadow p-3 mb-2 bg-body rounded-3">
                <li className="d-flex mb-2 ">
                  <div className="pe-2 rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1 " alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
                <li className="d-flex mb-2 ">
                  <div className="pe-2  rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1" alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
                <li className="d-flex mb-2 ">
                  <div className="pe-2  rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1" alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
                <li className="d-flex mb-2 ">
                  <div className="pe-2  rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1" alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
                <li className="d-flex mb-2 ">
                  <div className="pe-2  rounded clr-stl">
                    <img src="pin.png" className=" ps-2 pb-1 pt-1" alt="" />
                  </div>
                  <div className="ms-2 fw-light">Баянгол</div>
                </li>
                <div className="line-orange mb-2"></div>
              </ul>
            </section>
          </div>
        </div>
        <div className="mt-4 map-index">
          <MapContainer
            center={[47.917564, 106.917846]}
            zoom={15}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {teslaStation.map((tsla) => (
              <Marker
                key={tsla.id}
                position={[tsla.gps.latitude, tsla.gps.longitude]}
              ></Marker>
            ))}
          </MapContainer>
        </div>
        <div className="d-flex mb-2  mt-4 mb-4">
          <div className="square-point  me-2"></div>
          <p className="mb-0">Хүргэлтийн бүс дэх хаягууд</p>
        </div>
        <div className="d-flex row justify-content-around">
          <div className="d-none d-md-block minus-p d-flex shadow bg-body col-12 m-2 col-lg-5 rounded-3">
            <section className="d-flex p-4 text-orange ">
              <div className="col-4 d-flex  align-items-center justify-content-center">
                <span className="square-point me-2"></span>
                <h2 className="fs-5 fw-bold">"A"Бүс</h2>
              </div>
              <ul className="list-unstyled fs-6 fw-light col-4 p-2">
                <li>
                  <div>Баян Монгол</div>
                  <p>26-bair</p>
                </li>
              </ul>
              <ul className="list-unstyled fs-6 fw-light col-4 p-2 ">
                <li>
                  <div>Баян Монгол</div>
                  <p>26-bair</p>
                </li>
              </ul>
            </section>
          </div>
          <div className="d-none d-md-block d-flex minus-p shadow bg-body col-12 col-lg-5 m-2 rounded-3">
            <section className="d-flex p-4 text-orange ">
              <div className="col-4 d-flex  align-items-center justify-content-center">
                <span className="square-point me-2"></span>
                <h2 className="fs-5 fw-bold">"Б"Бүс</h2>
              </div>
              <ul className="list-unstyled fs-6 fw-light col-4  ">
                <li>
                  <div>Баян Монгол</div>
                  <p>26-bair</p>
                </li>
              </ul>
              <ul className="list-unstyled fs-6 fw-light col4 ">
                <li>
                  <div>Баян Монгол</div>
                  <p>26-bair</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
