function ProjectTitle({ title, subTitle }) {
  return (
    <button className="w-[25vw] h-[10vh] flex flex-row  ">
      <div className="w-3/4 h-[10vh] flex flex-col justify-center ml-8 py-4">
        <div className="w-full h-fit text-myDark flex font-bold ">{title}</div>
        <div className="w-full h-full text-myDark flex ">{subTitle}</div>
      </div>
    </button>
  );
}

export default ProjectTitle;
