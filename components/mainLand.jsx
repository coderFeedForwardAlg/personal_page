import React, { Component } from 'react'

export default class mainLand extends Component {
  render() {
    return (
      
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-6 ic">
                <img className="myImg" src="images/imangeOfSelf.jpeg" alt="happy" />
              </div>
              <div className="col-6">
                <img className="textImg" src="images/text.png" alt="happy" />
                <h5>
                Hi, my name is max. I am a software developer, data scientist,
                 and cross country runner. In my free time I have worked on many personal projects,
                 most of them are silly and fun.  I have worked as a statistical consultant for a
                 psychiatry professor at juniata college, and help anlyis data on what bariors exist for people how need
                 to access mental health services in Huntingdon PA. This gave me the opportunity to work with parametric and nonparametric
                 statistical tests, and experiment with simple ML such as desishion trees, all while using R.
                </h5>
              </div>
            </div>
          </div>
        </section>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> achivments </a>
          </li>
        </ul>
      </div>
      
    )
  }
}