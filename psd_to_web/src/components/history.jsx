import Carrusel from "./carrusel";

export default function History() {
  return (
    <div
      className="bg-cover bg-no-repeat md:min-h-[90vh] min-w-full flex flex-col justify-evenly items-center"
      style={{
        backgroundImage: `url('./images/bg-history.png')`,
      }}
    >
      <div className="flex-grow flex flex-col  justify-start ">
        <div className=" bg-transparent relative w-screen">
          <div className="numero-titulo">
            <span className="oswald-big">01.</span>
            <div className="titulo">
              <span className="oswald-small">HISTORY.</span>
            </div>
          </div>
          <div className="history-content">
            <span className="text-history">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
              est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt
              quam. Cras scelerisque id quam sed dignissim Pellentesque urna
              nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus
              suscipit dignissim tortor nec congue. .
            </span>
          </div>
        </div>
      </div>
      <div className="relative h-50 py-20">
        <Carrusel className="bg-transparent   align-baseline m-20" />
      </div>
    </div>
  );
}
