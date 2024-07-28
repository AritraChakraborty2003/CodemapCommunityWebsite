const SyllabusDisplay = (props) => {
  return (
    <>
      {props.data.map((val,ind) => (
        <>
          <div className="ml-3 pb-5">
            <p className="text-5xl font-bold pb-2">{ind+1}{" "+val.name}</p>
            <p className="text-2xl font-medium">Role: {val.role}</p>
            <p className="text-2xl ">Topic 1: {val.topic1}</p>
            <p className="text-2xl ">Topic 2: {val.topic2}</p>
            <p className="text-2xl">Topic 3: {val.topic3}</p>
            <p className="text-2xl ">Topic 4: {val.topic4}</p>
          </div>
        </>
      ))}
    </>
  );
};
export { SyllabusDisplay };
