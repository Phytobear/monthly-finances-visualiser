export default function StatsWrapper({ stats }) {
  return (
    <div className="bg-neu-base p-6 flex flex-col gap-6 rounded-xl w-10/12 shadow-neu-pressed">
      {stats.map((stat, index) => (
        <p key={index} className="flex justify-between gap-8 text-gray-700">
          <span className="font-light">{stat.text}</span>
          <span className="text-xl font-medium">
            {stat.percentTrue ? stat.figure + "%" : "£" + stat.figure}
          </span>
        </p>
      ))}
    </div>
  );
}
