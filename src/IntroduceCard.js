function IntroduceCard({ Icon, label, value }) {
  return (
    <div className="flex flex-row  ">
      <div className="w-1/4" />
      <div className="flex flex-row items-center">
        <Icon className="w-20 h-20 pr-5" />
        <div className="flex flex-col ">
          <div className="text-myDark text-xl font-extrabold font-apple">
            {label}
          </div>
          <div className="text-myDark text-xl font-thin font-apple ">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroduceCard;
