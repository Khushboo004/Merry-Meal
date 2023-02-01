import React from "react";

type Props = {
  title: string;
  result: string;
  color: string;
};

const TotalData = (props: Props) => {
  const { title, result, color } = props;
  const borderColor = `border-l-green-400`;
  return (
    <div
      className={
        "p-5 border-2 border-l-4 hover:-translate-y-6 transition duration-700 " +
        borderColor +
        " mt-2 mr-5 rounded-md shadow-lg"
      }
    >
      <h1 className="font-bold">{title}</h1>
      <p className="text-2xl">{result}</p>
    </div>
  );
};

export default TotalData;
