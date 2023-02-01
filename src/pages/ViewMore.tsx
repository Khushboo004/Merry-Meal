import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

type Props = {};

const ViewMore = (props: Props) => {
  return (
    <div className="flex justify-center">
      <button className="font-bold p-3 bg-green-400 text-white rounded-lg shadow-md shadow-green-300">
        View More
        <KeyboardDoubleArrowDownIcon />
      </button>
    </div>
  );
};

export default ViewMore;
