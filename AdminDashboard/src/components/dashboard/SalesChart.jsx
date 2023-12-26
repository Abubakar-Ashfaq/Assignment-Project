import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
function SalesChart(rooms) {
  var roomsarray = [];
  roomsarray = Array.from(rooms.rooms);

  const chartoptions = {
    series: [
      {
        name: "Rent",
        data: roomsarray.map((item) => {
          return item.roomprice;
        }),
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "straight",
        width: 2,
      },
      xaxis: {
        categories: roomsarray.map((item) => {
          return item.roomtype + " " + item.roomno;
        }),
      },
    },
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Rooms Rent Report
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
}

export default SalesChart;
