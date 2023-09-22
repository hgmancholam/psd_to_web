export default function Schedule(props) {
  const fechas = Array.isArray(props.schedule) ? props.schedule : [];

  return (
    <div className="max-w-xs bg-white bg-opacity-50  absolute !left-1/4 items-start text-left p-3">
      <p className="title-schedule">SCHEDULE</p>
      <table className="px-3">
        <tbody>
          {fechas.map((fecha) => (
            <tr key={fecha.fecha}>
              <td className="text-climb">{fecha.fecha} </td>
              <td className="text-climb pl-4">{fecha.detalle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
