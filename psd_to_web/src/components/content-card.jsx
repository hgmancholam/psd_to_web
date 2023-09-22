import Schedule from "./text-schedule";
export default function ContentCard(props) {
  const contenido = props.contenido;
  const fondo =
    contenido === "1" ? "./images/fondo_tab1.png" : "./images/fondo_tab2.png";

  const fechas1 = [
    { fecha: "25 Nov 2016", detalle: "Vestibulum viera" },
    { fecha: "28 Nov 2016", detalle: "Vestibulum viera" },
    { fecha: "18 Dec 2016", detalle: "Vestibulum viera" },
    { fecha: "07 Jan 20176", detalle: "Vestibulum viera" },
  ];

  const fechas2 = [
    { fecha: "17 Nov 2016", detalle: "Vestibulum viera" },
    { fecha: "13 Dec 2016", detalle: "Vestibulum viera" },
    { fecha: "28 Dec 2016", detalle: "Vestibulum viera" },
    { fecha: "09 Feb 20176", detalle: "Vestibulum viera" },
  ];
  return (
    <div
      className="bg-cover bg-no-repeat min-h-[60vh] min-w-full max-h-[60vh] sm:!max-h-[30vh] md:!max-h-[60vh] "
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <br />
      <br />
      <br />
      <Schedule schedule={contenido === "1" ? fechas1 : fechas2} />
    </div>
  );
}
