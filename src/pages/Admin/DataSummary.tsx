import TotalData from "./TotalData";

type Props = {};

const DataSummary = (props: Props) => {
  return (
    <div className="px-20 py-5">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        Data Summary
      </h1>
      <div className="px-20 pt-10">
        <div className="grid grid-cols-2">
          <TotalData title="Total Funds" result="$ 200" color="blue" />
          <TotalData title="Total Partners" result="200" color="green" />
          <TotalData
            title="Total User Registered"
            result="400"
            color="yellow"
          />
          <TotalData title="Total Delivered Meal" result="100" color="red" />
          <TotalData title="Total Volunteers" result="60" color="pink" />
          <TotalData title="Total Riders" result="50" color="purple" />
        </div>
      </div>
    </div>
  );
};

export default DataSummary;
