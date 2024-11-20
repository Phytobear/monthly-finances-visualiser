export default function MainHeading({ onClickFunction, text, visibility }) {
  return (
    <button
      onClick={onClickFunction}
      className="w-full flex items-center justify-between p-4 rounded-2xl
        bg-neu-base text-gray-700 font-medium text-xl
        shadow-neu-flat hover:shadow-neu-pressed
        transition-all duration-200"
    >
      {text}
      <span className="ml-4 bg-neu-base rounded-full p-2 shadow-neu-flat flex items-center">
        {visibility ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
