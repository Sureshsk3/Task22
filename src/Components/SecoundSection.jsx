import React from 'react'

function SecoundSection() {
  return<>
   <section className="showcase">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{"backgroundImage": "url(https://images.pexels.com/photos/818043/pexels-photo-818043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}
          ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Fully Responsive Design</h2>
            <p className="lead mb-0">
              When you use a theme created by Start Bootstrap, you know that the
              theme will look great on any device, whether it's a phone, tablet,
              or desktop the page will behave responsively!
            </p>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-lg-6 text-white showcase-img"
            style={{"backgroundImage": "url('https://images.pexels.com/photos/196647/pexels-photo-196647.jpeg')"}}
          ></div>
          <div className="col-lg-6 my-auto showcase-text">
            <h2>Updated For Bootstrap 5</h2>
            <p className="lead mb-0">
              Newly improved, and full of great utility classNamees, Bootstrap 5 is
              leading the way in mobile responsive web development! All of the
              themes on Start Bootstrap are now using Bootstrap 5!
            </p>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{"backgroundImage": "url('https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
          ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Easy to Use & Customize</h2>
            <p className="lead mb-0">
              Landing Page is just HTML and CSS with a splash of SCSS for users
              who demand some deeper customization options. Out of the box, just
              add your content and images, and your new landing page will be
              ready to go!
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default SecoundSection