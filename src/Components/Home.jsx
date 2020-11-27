import React from 'react'



function Home() {
  return (
      <>
        <section id='header'>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className='col-10 mx-auto'>
                      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                    <h1>
                      Grow Your Business with <strong className='brand-name'>Web Zilla</strong>
                    </h1>
                    <h2 className="my-3">
                      We are the team of talented web developers
                    </h2>
                    <div className="mt-3">
                      <a href="" className='btn-get-started'>Get Started</a>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={} alt="home img" className='img-fluid animated'/>
                  </div>

                </div>
            </div>

      </div>
        </section>
      </>
  )
}

export default Home;
