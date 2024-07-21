const FirstReachComponent = () => {
  return (
    <>
      <div className="about-area flex justify-center items-center flex-wrap-reverse ml-[-2vmin]">
        {(screen.width <= 900 && (
          <>
            <div className="text-area w-[95vw] border-2 h-[50vh]"></div>
            <div className="photo-area w-[95vw] border-2 h-[50vh]"></div>
          </>
        )) ||
          (screen.width > 900 &&
            screen.width <= 1280 &&
            screen.height >= 780 && (
              <>
                <div className="text-area w-[81vmin] border-2 h-[80vh]"></div>
                <div className="photo-area w-[75vmin] border-2 h-[80vh]"></div>
              </>
            )) ||
          (screen.width >= 1280 && screen.width < 1400 && (
            <>
              <div className="text-area w-[100vmin] border-2 h-[75vh]"></div>
              <div className="photo-area w-[110vmin] border-2 h-[75vh]"></div>
            </>
          )) ||
          (screen.width >= 1400 && screen.width <= 2047 && (
            <>
              <div className="text-area w-[90vmin] border-2 h-[80vh]"></div>
              <div className="photo-area w-[90vmin]  border-2 h-[80vh]"></div>
            </>
          )) ||
          (screen.width >= 2048 && (
            <>
              <div className="text-area w-[87vmin] border-2 h-[80vh]"></div>
              <div className="photo-area w-[87vmin]   border-2 h-[80vh]"></div>
            </>
          ))}
      </div>
      <div className="w-[90vw] ml-2  h-[8vmin] flex justify-center items-center gap-x-4">
        <div className="ml-9 flex justify-center items-center gap-x-4 w-[10vmin]">
          <div className="dot1 h-[2vmin] w-[2vmin] rounded-[1vmin] border-[1px]"></div>
          <div className="dot2 h-[2vmin] w-[2vmin] rounded-[1vmin] border-[1px]"></div>
        </div>
      </div>
    </>
  );
};
export default FirstReachComponent;
