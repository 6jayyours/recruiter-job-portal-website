import React from 'react'

const Landing = () => {
  return (
    <section className="py-36 md:h-screen h-auto items-center flex relative overflow-hidden" id="home">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          {/* Left side content */}
          <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
            <div className="lg:me-8">
              <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">
                Find the 
                <span className="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-sky-600 relative inline-block">
                  <span className="relative text-white font-bold">
                    Best Job
                  </span>
                </span> <br/> offer for you.
              </h4>
              
              <p className="text-slate-400 text-lg max-w-xl">
                Find Jobs, Employment &amp; Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.
              </p>
              {/* Form goes here */}
            </div>
          </div>

          {/* Right side content */}
          <div className="lg:col-span-5 md:col-span-6">
            {/* Image and other elements go here */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing