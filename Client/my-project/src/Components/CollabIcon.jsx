const CollabIcon = (props) => {
  return (
    <>
      <div className="imgHolder flex flex-wrap justify-center items-center w-[85vw] h-[30vmin]  lg:w-[64vmin] 2xl:w-[45vmin] h-[25vmin] 2xl:w-[20vmin]">
        <img
          src={props.image}
          className="max-w-full max-h-full object-contain"
        ></img>
      </div>
    </>
  );
};
export default CollabIcon;
