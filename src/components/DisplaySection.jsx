export default function DisplaySection({ definition }) {
  return (
    // what is {`user-${definition}`}> doing? im keeping it in as i dont want to brake anything //
    <div
      className={`user-${definition} bg-neu-base shadow-neu-flat rounded-xl p-6`}
    >
      <h2 className="text-4xl text-gray-700">
        {definition.charAt(0).toUpperCase() + definition.slice(1)}
      </h2>
    </div>
  );
}
