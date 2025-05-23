import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-5xl p-5 mx-auto">
      <div className="flex gap-10 pb-10 flex-wrap sm:flex-nowrap">
        <div className="flex flex-col space-y-2    w-full ">
          <img src="./logo.png" alt="logo" className="w-[170px] object-fill" />
          <p className="text-sm font-medium">
            Subscribe to our newsletter for the latest features and updates
            delivered to you.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Your email here"
              className="p-3 outline outline-[#FF3E54] w-full"
            />
            <button className="p-3 px-7 rounded-md bg-[#FF3E54] text-white">
              Join
            </button>
          </div>
          <p className="text-sm font-medium">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full sm:flex-nowrap">
          <div className="flex flex-col space-y-3">
            <h2 className="text-[17px] font-semibold ">Useful Links</h2>
            <ul className="text-sm space-y-2">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="text-[17px] font-semibold ">Resources</h2>
            <ul className="text-sm space-y-2">
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="text-[17px] font-semibold ">Connect With Us</h2>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2917 10.3077C18.2917 5.79297 14.6541 2.13306 10.1667 2.13306C5.67943 2.13306 2.04175 5.79297 2.04175 10.3077C2.04175 14.3878 5.01293 17.7698 8.89722 18.3831V12.6707H6.83423V10.3077H8.89722V8.50673C8.89722 6.45796 10.1103 5.32628 11.9661 5.32628C12.8551 5.32628 13.7849 5.48594 13.7849 5.48594V7.49768H12.7604C11.7511 7.49768 11.4363 8.12786 11.4363 8.77435V10.3077H13.6897L13.3295 12.6707H11.4363V18.3831C15.3206 17.7698 18.2917 14.388 18.2917 10.3077Z"
                    fill="#FF3E54"
                  />
                </svg>
                <p>Facebook</p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4167 3.44556H6.91675C4.67309 3.44556 2.85425 5.2644 2.85425 7.50806V14.0081C2.85425 16.2517 4.67309 18.0706 6.91675 18.0706H13.4167C15.6604 18.0706 17.4792 16.2517 17.4792 14.0081V7.50806C17.4792 5.2644 15.6604 3.44556 13.4167 3.44556ZM16.0574 14.0081C16.0529 15.4645 14.8732 16.6442 13.4167 16.6487H6.91675C5.46022 16.6442 4.28058 15.4645 4.27612 14.0081V7.50806C4.28058 6.05153 5.46022 4.87189 6.91675 4.86743H13.4167C14.8732 4.87189 16.0529 6.05153 16.0574 7.50806V14.0081ZM14.0261 7.71118C14.4749 7.71118 14.8386 7.34741 14.8386 6.89868C14.8386 6.44995 14.4749 6.08618 14.0261 6.08618C13.5774 6.08618 13.2136 6.44995 13.2136 6.89868C13.2136 7.34741 13.5774 7.71118 14.0261 7.71118ZM10.1667 7.10181C8.14746 7.10181 6.5105 8.73877 6.5105 10.7581C6.5105 12.7774 8.14746 14.4143 10.1667 14.4143C12.1861 14.4143 13.823 12.7774 13.823 10.7581C13.8252 9.78769 13.4406 8.85646 12.7545 8.17031C12.0683 7.48416 11.1371 7.09965 10.1667 7.10181ZM7.93237 10.7581C7.93237 11.9921 8.93272 12.9924 10.1667 12.9924C11.4008 12.9924 12.4011 11.9921 12.4011 10.7581C12.4011 9.52403 11.4008 8.52368 10.1667 8.52368C8.93272 8.52368 7.93237 9.52403 7.93237 10.7581Z"
                    fill="#FF3E54"
                  />
                </svg>
                <p>Instagram</p>{" "}
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3723 3.75806H16.6149L11.7155 9.26469L17.4792 16.7581H12.9663L9.43152 12.2134L5.387 16.7581H3.14304L8.38345 10.8681L2.85425 3.75806H7.4818L10.6769 7.91206L14.3723 3.75806ZM13.5852 15.4381H14.8279L6.80658 5.00872H5.4731L13.5852 15.4381Z"
                    fill="#FF3E54"
                  />
                </svg>
                <p>X</p>{" "}
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.073 0.445557C1.3999 0.445557 0.854248 0.991207 0.854248 1.66431V13.8518C0.854248 14.5249 1.3999 15.0706 2.073 15.0706H14.2605C14.9336 15.0706 15.4792 14.5249 15.4792 13.8518V1.66431C15.4792 0.991207 14.9336 0.445557 14.2605 0.445557H2.073ZM5.33987 3.69777C5.34444 4.47472 4.76287 4.95346 4.07275 4.95003C3.42262 4.9466 2.8559 4.42902 2.85933 3.69891C2.86276 3.01222 3.40548 2.46035 4.11046 2.47635C4.82571 2.49235 5.34444 3.01679 5.33987 3.69777ZM8.394 5.93949H6.34651H6.34537V12.8944H8.50938V12.7321C8.50938 12.4234 8.50914 12.1147 8.50889 11.8058C8.50824 10.9821 8.50751 10.1575 8.51174 9.33406C8.51287 9.13411 8.52197 8.92619 8.5734 8.73533C8.76645 8.02236 9.40752 7.56192 10.1228 7.6751C10.5821 7.74701 10.8859 8.01326 11.0139 8.44633C11.0928 8.71705 11.1282 9.00841 11.1316 9.29068C11.1409 10.1419 11.1396 10.993 11.1383 11.8443C11.1378 12.1447 11.1373 12.4454 11.1373 12.7458V12.8932H13.3082V12.7264C13.3082 12.3592 13.3081 11.992 13.3078 11.6248C13.3074 10.7071 13.3069 9.78939 13.3094 8.87134C13.3105 8.45656 13.266 8.04755 13.1643 7.6465C13.0123 7.05004 12.6981 6.55645 12.1874 6.20001C11.8252 5.94634 11.4276 5.78295 10.9831 5.76467C10.9325 5.76257 10.8815 5.75981 10.8302 5.75704C10.6029 5.74476 10.372 5.73228 10.1547 5.77609C9.53313 5.90063 8.98705 6.18514 8.57454 6.68669C8.5266 6.74422 8.47972 6.80264 8.40977 6.88982L8.394 6.90956V5.93949ZM3.03308 12.8966H5.18684V5.94401H3.03308V12.8966Z"
                    fill="#FF3E54"
                  />
                </svg>
                <p>LinkedIn</p>{" "}
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9612 2.16323C15.8687 1.81987 15.6878 1.50674 15.4366 1.255C15.1855 1.00325 14.8727 0.821684 14.5296 0.72836C13.2572 0.378985 8.16689 0.373297 8.16689 0.373297C8.16689 0.373297 3.07739 0.36761 1.80421 0.701547C1.46127 0.799166 1.14919 0.983303 0.897916 1.23628C0.646645 1.48926 0.464626 1.80258 0.369331 2.14617C0.0337689 3.41855 0.0305188 6.05755 0.0305188 6.05755C0.0305188 6.05755 0.0272688 8.70955 0.360394 9.96892C0.547269 10.6652 1.09571 11.2153 1.79283 11.403C3.07821 11.7524 8.15471 11.758 8.15471 11.758C8.15471 11.758 13.245 11.7637 14.5174 11.4306C14.8607 11.3374 15.1737 11.1563 15.4255 10.9051C15.6773 10.6538 15.8591 10.3412 15.9531 9.99817C16.2895 8.72661 16.2919 6.08842 16.2919 6.08842C16.2919 6.08842 16.3081 3.43561 15.9612 2.16323ZM6.53864 8.50236L6.54271 3.62736L10.7734 6.06892L6.53864 8.50236Z"
                    fill="#FF3E54"
                  />
                </svg>
                <p>YouTube</p>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className=" h-[1px] bg-black my-6"></div>
        <div className="flex justify-between">
            <p className="text-sm font-medium">© 2024 Osumare. All rights reserved.</p>
            <ul className="flex gap-2 text-sm font-medium underline">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Settings</li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
