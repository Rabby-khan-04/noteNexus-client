import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-6xl mx-auto bg-primary px-12 py-9 grid grid-cols-5 rounded-xl">
      <div className="col-span-2 self-center">
        <p className="text-lg font-extrabold text-white">
          Want to know Latest News?
        </p>
        <h2 className="text-4xl font-bold text-accent">Subscribe</h2>
      </div>
      <div className="col-span-3 self-center">
        <div className="form-control w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Your email address"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-secondary text-xl font-bold text-white absolute top-0 right-0 rounded-l-none hover:bg-accent">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
