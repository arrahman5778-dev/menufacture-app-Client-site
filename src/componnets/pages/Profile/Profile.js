import React from "react";
import photo from "../../../assets/myphoto.jpg";

const Profile = () => {
  return (
    <div className="w-full ">
      <div className=" mt-12">
        <div className=" max-w-6xl mx-auto">
          <h1 className=" text-3xl font-semibold  ml-7 text-orange-400  uppercase">
            My Profile
          </h1>
          <hr className="h-[1px] w-5/12 border-orange-300 mt-3 mb-12 ml-7" />
        </div>
        <div>
          <div className=" max-w-7xl mx-auto ">
            <div className="w-10/12 mx-auto border border-orange-300 mb-12  text-center py-8 rounded-xl">
              <div className="avatar ">
                <div className="w-24 rounded-full ">
                  <img src={photo} alt="My images" />
                </div>
              </div>
              <br />
              <h1 className="text-gray-600 text-md mt-5 font-semibold uppercase">
                HM Abdur Rahman
              </h1>
              <p className=" text-gray-500 text-sm">arrahman5778@gmail.com</p>
              <br />
              <hr className=" mt-4 w-10/12 mx-auto" />
              <div className="mt-7">
                <h1 className="  font-mono">INFO</h1>
                <hr className=" w-2/12 mb-3 border-orange-300 mx-auto" />
                <div>
                  <h1 className=" text-sm font-semibold">
                    Education :{" "}
                    <span className=" text-orange-500 text-sm ml-2"> HSC</span>
                  </h1>
                  <h1 className=" text-sm font-semibold">
                    Address :{" "}
                    <span className=" text-orange-500 text-sm ml-2">
                      Kasba , Brahmanbaria
                    </span>
                  </h1>
                  <h1 className=" text-sm font-semibold">
                    Date-Of-Birth :{" "}
                    <span className="text-orange-500 text-sm ml-2">
                      01/01/1999
                    </span>{" "}
                  </h1>
                  <h1 className=" text-sm font-semibold">
                    Phone :{" "}
                    <span className=" text-orange-500 text-sm ml-2">
                      01760488528
                    </span>
                  </h1>
                </div>
              </div>

              <div className="mt-7">
                <h1 className="  font-mono">PROJECT LINK</h1>
                <hr className=" w-2/12 mb-3 border-orange-300 mx-auto" />
                <div>
                  <h1 className=" text-sm font-semibold">
                    1.{" "}
                    <span className=" text-purple-800 text-sm ml-2">
                      https://cycle-shop-85e03.web.app/{" "}
                    </span>
                  </h1>
                  <h1 className=" text-sm font-semibold">
                    2.{" "}
                    <span className=" text-purple-800 text-sm ml-2">
                    https://whimsical-conkies-d65785.netlify.app/
                    </span>{" "}
                  </h1>
                  <h1 className=" text-sm font-semibold">
                    3.{" "}
                    <span className=" text-purple-800 text-sm ml-2">
                    https://camera-world-ar.netlify.app/
                    </span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
