import TabAccordion from "./tabs-acordeon";

export default function Climb() {
  return (
    <div className="bg-cover bg-no-repeat md:min-h-[80vh] min-w-full flex flex-col">
      <div>
        <div className=" bg-transparent relative flex flex-wrap ">
          <div className="numero-titulo flex-none w-60">
            <span className="oswald-big-02">02.</span>
            <div className="titulo">
              <span className="oswald-small">CLIMB.</span>
            </div>
          </div>
          <div className="history-content text-justify flex flex-col justify-center !w-5/12">
            <span className="text-climb !w-full">
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
      <TabAccordion />
    </div>
  );
}
