import Image from "next/image";
import Link from "next/link";
import React from "react";

const signupPage = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-10 py-10">

        <div className="py-10">
          <Image height={500} width={450} src="assets/images/login/login.svg" />
        </div>

        <div className="border-2 border-gray-400 px-10 py-10 w-1/3">
          <h1 className="text-3xl font-bold text-center my-6"> Sign Up </h1>

          <div className="font-bold">
            <label> Name </label> <br />
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="font-bold my-5">
            <label> Email </label> <br />
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="font-bold">
            <label> Password </label> <br />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex justify-center mt-6">
            <div className="text-center">
              <button className="btn btn-primary w-full"> Sign up </button>
              <p className="my-3"> Or sign Up with </p>
              <div className="flex gap-3">
                <Image
                  className="rounded-full"
                  height={55}
                  width={55}
                  src="https://e7.pngegg.com/pngimages/174/233/png-clipart-computer-icons-facebook-inc-social-media-logo-facebook-rectangle-logo-thumbnail.png"
                />

                <Image
                  className="rounded-full"
                  height={55}
                  width={55}
                  src="https://e7.pngegg.com/pngimages/602/665/png-clipart-linkedin-linkedin-thumbnail.png"
                />

                <Image
                  className="rounded-full"
                  height={55}
                  width={55}
                  src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"
                />
              </div>

                <p> Already have an account ? <Link className="text-primary font-bold" href="/login"> Login </Link> </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signupPage;
