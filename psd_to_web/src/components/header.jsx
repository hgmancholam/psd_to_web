import NavComponent from "./nav-bar";

import DefaultNavbar from "./nav-bar2";
export default function Header() {
  return (
    <div
      className="bg-cover bg-no-repeat min-h-[100vh] min-w-full max-h-screen sm:!max-h-[30vh] md:!max-h-[50vh] "
      style={{
        backgroundImage: `url('./images/fondo_header.png')`,
      }}
    >
      <DefaultNavbar />
      {/* <NavComponent /> */}
      <div className=" z-[1] w-full min-h-[calc(100vh-400px)] min-w-max flex items-center justify-center h-screen overflow-hidden ">
        <img
          alt="text header"
          src="./images/text-header.png"
          className="w-50vw max-w-screen-xl mx-auto   "
        />
      </div>
    </div>
  );
}
