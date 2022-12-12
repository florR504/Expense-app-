import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //obtengo un array de numeros en vez de objetos
  const totalMaximum = Math.max(...dataPointValues);//uso el spread operation para copiar solo los valores del array, pero no el array en sí
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
       return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
