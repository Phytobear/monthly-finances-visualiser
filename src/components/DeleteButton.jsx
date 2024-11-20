export default function DeleteButton({
  onClickFunction,
  text,
  conditionalCheck,
}) {
  return (
    <button
      className={`rounded-xl p-3 transition-all duration-200 w-2/12
        ${
          conditionalCheck
            ? "bg-neu-dark/50 text-neu-light/50 cursor-not-allowed"
            : "bg-neu-base text-gray-600 shadow-neu-flat hover:shadow-neu-pressed active:shadow-neu-pressed"
        }`}
      disabled={conditionalCheck}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
}
