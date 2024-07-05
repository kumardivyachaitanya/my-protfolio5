import React from 'react';
import './About.scss';
import about from '../../data/about';

const leetcodeImage = "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
const geeksforgeeksImage = "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg";
const codechefImage = "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg";


const About = () => {
  return (
    <section className="about py-5" id="about">
      <div className="container">
        <h2 className="section__heading text-center py-5">About Me</h2>
        <div className="row justify-content-center">
          {
            React.Children.toArray(
              about.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                  <div className="about__item mx-2 py-4 px-2">
                    <div className="about__item-img">
                      <img className="img-fluid" src={item.img} alt="" />
                    </div>
                    <div className="about__item-content">
                      <div className="about__item-heading">
                        <h3>{item.name}</h3>
                        <div className="about__item-para">
                          <p>{item.description}</p>
                        </div>
                        <div className="about__item-details">
                          <div className="about__item-section-1 text-center">
                            <h5>{item.h1}</h5>
                            <p>{item.h1Array.join(', ')}</p>
                          </div>
                          <div className="about__item-section-2 text-center">
                            <h5>{item.h2}</h5>
                            <ul>
                              {
                                React.Children.toArray(
                                  item.h2Array.map((item2) => (
                                    <li>{item2}</li>
                                  ))
                                )
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
        <div className="venture">
          <h3 className="venture__heading text-center py-5">My Coding Profiles</h3>
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-4 col-12 py-3">
                <div className="venture__item">
                  <div className="venture__item-logo">
                    <img className="img-fluid" src={leetcodeImage} alt="LeetCode" />
                  </div>
                  <div className="venture__item-about">
                    <span><a href="https://leetcode.com/u/divyachaitanya/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i> LeetCode Profile</a></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 py-3">
                <div className="venture__item">
                  <div className="venture__item-logo">
                    <img className="img-fluid" src={geeksforgeeksImage} alt="GeeksforGeeks" />
                  </div>
                  <div className="venture__item-about">
                    <span><a href="https://www.geeksforgeeks.org/user/uthenstar/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i> GeeksforGeeks Profile</a></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 py-3">
                <div className="venture__item">
                  <div className="venture__item-logo">
                    <img className="img-fluid" src={codechefImage} alt="CodeChef" />
                  </div>
                  <div className="venture__item-about">
                    <span><a href="https://www.codechef.com/users/uthenstar" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i> CodeChef Profile</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
