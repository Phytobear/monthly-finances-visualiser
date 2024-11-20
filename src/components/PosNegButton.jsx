export default function PosNegButton({
  text,
  onClickFunction,
  positive,
  conditionalCheck,
}) {
  return (
    <button
      className={`px-6 py-3 rounded-xl bg-white/90 transition-all duration-200
        ${
          conditionalCheck
            ? // If conditionalCheck is true (disabled state) ----------------------not 100 sure of this
              "opacity-50 cursor-not-allowed text-gray-400"
            : // If conditionalCheck is false, check if positive or negative
              `${
                positive
                  ? "text-neu-accent hover:bg-neu-accent hover:text-white"
                  : "text-red-500 hover:bg-red-500 hover:text-white"
              }
            shadow-neu-component hover:shadow-neu-pressed`
        }`}
      onClick={onClickFunction}
      disabled={conditionalCheck}
    >
      {text}
    </button>
  );
}
