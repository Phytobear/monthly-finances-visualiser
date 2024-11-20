export default function AddNewButton({ onClickFunction, text, disabled }) {
  return (
    <button
      className={`rounded-xl p-4 w-48 text-center transition-all duration-300
        ${
          disabled
            ? "bg-neu-dark/50 text-neu-light/50 cursor-not-allowed"
            : "bg-neu-base text-gray-700 shadow-neu-flat hover:shadow-neu-pressed active:shadow-neu-pressed"
        }`}
      onClick={onClickFunction}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// text-white bg-green-600 px-3 py-1 rounded-lg shadow shadow-black cursor-pointer hover:shadow-md hover:shadow-black hover:bg-green-500  hover:text-green-900 hover:-translate-y-1 transition-all active:bg-green-600  border-b-4 border-x-2 border-green-800
