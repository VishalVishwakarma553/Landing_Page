import React from "react";

const Testimonials = () => {
  return (
    <div className="my-6 max-w-5xl mx-auto space-y-10 px-4">
      <h1 className="text-5xl font-bold text-[#0E1F51]">
        Customer Testimonials
      </h1>
      <p className="text-xl font-medium text-[#0E1F51]">
        This tool has transformed my productivity and organization!
      </p>
      <div>
        <div className="sm:w-[450px] w-full  border-[16px] border-[#FF3E54] pl-2 pt-2 pb-2">
          <div className="p-4 sm:p-10 flex flex-wrap md:flex-nowrap sm:w-[70vw] bg-white">
            <div className="p-2 space-y-5">
              <h1 className="text-4xl font-bold text-[#202020]">
                Using this website has made my tasks so much easier! I can't
                imagine my day without it."
              </h1>
              <div className="flex gap-14 items-center">
                <div className="h-8 w-8 bg-[#FF3E54] relative">
                  <div className="w-15 absolute top-[50%] left-[50%] border border-[#202020]"></div>
                </div>
                <div>
                  <h3 className="text-[#202020] text-xl font-bold">
                    Sherri Cronin
                  </h3>
                  <p className="text-[#000000] font-medium text-lg">
                    Project Manager, TechCorp
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-3 border-2 border-[#FF3E54] rounded-full ">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.84568 8.50242L11.3286 4.19263C11.4521 4.07425 11.52 3.91597 11.52 3.7472C11.52 3.57833 11.4521 3.42014 11.3286 3.30157L10.9358 2.92412C10.8126 2.80536 10.6478 2.73999 10.4723 2.73999C10.2967 2.73999 10.1322 2.80536 10.0088 2.92412L4.67113 8.0553C4.5473 8.17424 4.47949 8.33318 4.47998 8.50214C4.47949 8.67185 4.54721 8.8306 4.67113 8.94964L10.0038 14.0759C10.1272 14.1946 10.2917 14.26 10.4674 14.26C10.643 14.26 10.8075 14.1946 10.9309 14.0759L11.3237 13.6984C11.5792 13.4527 11.5792 13.0528 11.3237 12.8073L6.84568 8.50242Z"
                      fill="#202020"
                    />
                  </svg>
                </div>
                <div className="p-3 border-2 border-[#FF3E54] bg-[#FF3E54] rounded-full">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.15432 8.50243L4.67137 4.19264C4.54793 4.07425 4.48002 3.91597 4.48002 3.7472C4.48002 3.57833 4.54793 3.42014 4.67136 3.30157L5.06419 2.92412C5.18743 2.80536 5.35218 2.73999 5.52774 2.73999C5.7033 2.73999 5.86785 2.80536 5.99119 2.92412L11.3289 8.0553C11.4527 8.17425 11.5205 8.33318 11.52 8.50214C11.5205 8.67185 11.4528 8.8306 11.3289 8.94964L5.99616 14.0759C5.87282 14.1946 5.70827 14.26 5.53261 14.26C5.35705 14.26 5.1925 14.1946 5.06906 14.0759L4.67633 13.6984C4.42079 13.4527 4.42079 13.0528 4.67633 12.8073L9.15432 8.50243Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="h-[350px] sm:w-[350px]  border-[14px]  border-[#FF3E54] relative sm:p-3 p-1">
                <img src="testinomials.jpg" alt="testinomials" className="w-full h-full object-cover" />
                <div className="h-[360px] border-l-[18px] border-[#FFFFFF] absolute top-[-18px] left-[-15px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
