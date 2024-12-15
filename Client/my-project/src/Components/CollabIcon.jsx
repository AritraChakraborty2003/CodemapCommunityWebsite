/* eslint-disable react/prop-types */
const CollabIcon = (props) => {
  return (
    <>
      <div className="imgHolder flex flex-wrap justify-center items-center w-[85vw] h-[30vmin] md:h-[25vmin]  lg:w-[65vmin] 2xl:w-[56vmin] h-[25vmin] pb-6">
        <img
          src={props.image}
          className="max-w-full max-h-full object-contain"
        ></img>
      </div>
    </>
  );
};
export default CollabIcon;
