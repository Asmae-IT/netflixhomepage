import React from "react";
import "./Home.css";
import NetflixTV from "./../../assets/tv.png";
import videoTV from "./../../assets/video-tv.mp4";
import mobile from "./../../assets/mobile-0819.jpg";
import videoDevices from "./../../assets/video-devices.mp4";
import poster from "./../../assets/boxshot.png";
import download from "./../../assets/download-icon.gif";
import device from "./../../assets/device-pile.png";
import kids from "./../../assets/kids.png";
import Button from "react-bootstrap/Button";
import { UilAngleRightB } from "@iconscout/react-unicons";
const Home = () => {
  return (
    <div className="home">
      <hr className="Line1" />
      <section className="section1 container-fluid">
        <div className="container">
          <div className="row text-white">
            <div className="col-sm-6">
              <h1 className="font-weight-bold ">Enjoy on your TV</h1>
              <h4>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h4>
            </div>
            <div className="col-sm-6">
              <img
                src={NetflixTV}
                className="netflixtv img-fluid"
                alt="NetflixTV"
              />
              <video className="video-tv w-75" controls autoPlay loop muted>
                <source src={videoTV} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <hr className="Line2" />
      <section className="section2 container-fluid">
        <div class="container">
          <div class="row text-white">
            <div className="col-sm-6">
              <img
                src={mobile}
                class="img-device img-fluid"
                alt="mobile"
                width="700"
                height="150"
              />
              <div className="box d-flex">
                <img
                  src={poster}
                  alt="download"
                  className="img-poster img-fluid"
                  width="70"
                />
                <p>
                  Stranger Things <br />
                  <span>Downloading ....</span>
                </p>

                <img
                  src={download}
                  alt="download"
                  className="download-icon img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <h1 className="font-weight-bold">
                Download your shows to watch offline
              </h1>
              <h4>
                Save your favorites easily and always have something to watch.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <hr className="Line3" />
      <section className="section3 container-fluid">
        <div class="container">
          <div class="row text-white">
            <div className="col-sm-6">
              <h1 className="font-weight-bold">Watch everywhere</h1>
              <h4>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </h4>
            </div>
            <div className="col-sm-6">
              <img src={device} className="device img-fluid" alt="device" />
              <video className="video-devices " controls autoPlay loop muted>
                <source src={videoDevices} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <hr className="Line4" />
      <section className="section4 container-fluid">
        <div class="container">
          <div class="row text-white">
            <div className="col-sm-6">
              <img
                src={kids}
                className="kids img-fluid"
                alt="kids"
                width="500"
              />
            </div>
            <div className="text-right col-sm-6">
              <h1 className="font-weight-bold">Create profiles for kids</h1>
              <h4>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <hr className="Line5" />
      <section className="section5 container-fluid">
        <div class="container ">
          <h1 className=" text-center text-white font-weight-bold">
            Frequently Asked Questions
          </h1>
          <div id="accordion">
            <div class="card text-white rounded-0">
              <div
                class="card-header"
                data-toggle="collapse"
                href="#collapseOne"
              >
                <h5>What is Netflix?</h5>
              </div>
              <div id="collapseOne" class="collapse" data-parent="#accordion">
                <h4 class="card-body">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                  <br /> <br />
                  You can watch as much as you want, whenever you want without a
                  single commercial – all for one low monthly price. There's
                  always something new to discover and new TV shows and movies
                  are added every week!
                </h4>
              </div>
            </div>

            <div class="card text-white rounded-0 mt-2">
              <div
                class="collapsed card-header"
                data-toggle="collapse"
                href="#collapseTwo"
              >
                <h5>How much does Netflix cost?</h5>
              </div>
              <div id="collapseTwo" class="collapse" data-parent="#accordion">
                <h4 class="card-body">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from MAD35 to MAD95 a month. No extra costs, no contracts.
                </h4>
              </div>
            </div>

            <div class="card text-white rounded-0 mt-2">
              <div
                class="collapsed card-header"
                data-toggle="collapse"
                href="#collapseThree"
              >
                <h5>Where can I watch?</h5>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <h4 class="card-body">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br /> <br />
                  You can also download your favorite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </h4>
              </div>
            </div>
            <div class="card text-white rounded-0 mt-2">
              <div
                class="collapsed card-header"
                data-toggle="collapse"
                href="#collapseFour"
              >
                <h5>How do I cancel?</h5>
              </div>
              <div id="collapseFour" class="collapse" data-parent="#accordion">
                <h4 class="card-body">
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </h4>
              </div>
            </div>
            <div class="card text-white rounded-0 mt-2">
              <div
                class="collapsed card-header"
                data-toggle="collapse"
                href="#collapseFive"
              >
                <h5>How do I watch on Netflix?</h5>
              </div>
              <div id="collapseFive" class="collapse" data-parent="#accordion">
                <h4 class="card-body">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </h4>
              </div>
            </div>
            <div class="card text-white rounded-0 mt-2">
              <div
                class="collapsed card-header"
                data-toggle="collapse"
                href="#collapseSix"
              >
                <h5>Is Netflix good for kids?</h5>
              </div>
              <div id="collapseSix" class="collapse" data-parent="#accordion">
                <h4 class="card-body">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space. <br />
                  <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </h4>
              </div>
            </div>
          </div>
          <div className="text-white mt-5 mb-5">
            <h5 className="text-center">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <div className="form-inline justify-content-center mt-4">
              <input
                type="email"
                className="form-control p-4"
                placeholder="Email address"
              />
              <Button
                type="submit"
                variant="danger"
                className="btn-email pt-2 ml-2"
              >
                <h4>
                  Get Started <UilAngleRightB />
                </h4>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <hr className="Line6" />
    </div>
  );
};
export default Home;
