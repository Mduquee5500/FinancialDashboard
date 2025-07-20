const ButtonColors = ({ text, onClick }) => {
  return (
    <div className="flex w-max gap-4">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonColors;
