function SkillBoard({ Icon, title, contents }) {
  return (
    <div className="flex font-apple flex-row items-center h-1/4 text-stone-300">
      <div className="w-1/4 pl-28 flex font-apple flex-row ">
        <Icon className="w-[5vw] h-[5vw] font-apple " />
        <div className="flex items-center text-3xl font-apple font-semibold ">
          {title}
        </div>
      </div>
      <div className="w-3/4 ml-16 flex flex-row font-apple font-semibold text-3xl">
        {contents.map((item, idx) => (
          <div
            key={idx}
            className={`px-3 mx-2 h-[4vh] flex flex-row whitespace-nowrap rounded-2xl border isolate aspect-video bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-lg
                ${
                  ["Swift", "SwiftUI", "CoreData"].includes(item)
                    ? "gradient-text"
                    : "text-stone-300"
                }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
export default SkillBoard;
