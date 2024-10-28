"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider);
  };
  if (session.status === "authenticated") {
    router.push("/");
  }


  return (
    <div>
      <div className="py-2">
        <p className="my-3"> Or sign In with </p>

        <div className="flex gap-8 justify-center">
          <Image
            className="rounded-full cursor-pointer hover:animate-bounce	"
            height={55}
            width={55}
            src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"
            onClick={() => handleSocialLogin("google")}
          />

          {/* <Image
            className="rounded-full"
            height={55}
            width={55}
            src="https://e7.pngegg.com/pngimages/174/233/png-clipart-computer-icons-facebook-inc-social-media-logo-facebook-rectangle-logo-thumbnail.png"
            onClick={() => handleSocialLogin("facebook")}
          /> */}

          {/* <Image
            className="rounded-full"
            height={55}
            width={55}
            src="https://e7.pngegg.com/pngimages/602/665/png-clipart-linkedin-linkedin-thumbnail.png"
          /> */}

          <Image
            className="rounded-full cursor-pointer hover:animate-bounce"
            height={55}
            width={55}
            src="https://e7.pngegg.com/pngimages/646/324/png-clipart-github-computer-icons-github-logo-monochrome-thumbnail.png"
            onClick={() => handleSocialLogin("github")}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
