"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const LoginPage = () => {

  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(resp);
    if ( resp.status == 200 ){
      router.push('/')
    }
    
  };

  return (
    <div>
      <div className="flex justify-center gap-10 py-10">
        <div className="py-3">
          <Image
            height={500}
            width={450}
            alt="Login_IMG"
            src="assets/images/login/login.svg"
          />
        </div>

        <div className="border-2 border-gray-400 px-20 py-3">
          <h1 className="text-3xl font-bold text-center my-6"> Login </h1>
          <form onSubmit={loginHandler}>
          <div className="font-bold my-5">
            <label> Email </label> <br />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="font-bold">
            <label> Password </label> <br />
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          
            <div className="flex justify-center mt-10">
              <div className="text-center">
                <button className="btn btn-primary w-full"> Sign In </button>
                <p className="my-3"> Or sign In with </p>
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

                <p>
                  New User ? Please
                  <Link className="text-primary font-bold" href="/signup">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
