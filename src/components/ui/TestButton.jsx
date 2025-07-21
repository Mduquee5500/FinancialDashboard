const TestButton = ({ text, onClick, color }) => {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-700",
    red: "bg-red-500 hover:bg-red-700",
    green: "bg-green-500 hover:bg-green-700",
    yellow: "bg-yellow-500 hover:bg-yellow-700",
  };

  return (
    <div className="flex w-max gap-4">
      <button
        onClick={onClick}
        className={`${colorClasses[color]} text-white font-bold py-2 px-4 rounded`}
      >
        {text}
      </button>
    </div>
  );
};

export default TestButton;
