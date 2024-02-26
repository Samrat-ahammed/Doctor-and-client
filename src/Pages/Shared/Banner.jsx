const Banner = ({
  backgroundImg,
  title,
  headline,
  subheadline1,
  subheadline2,
  buttons,
  opacityClass,
}) => {
  return (
    <div>
      <div
        className="container min-h-screen mx-auto hero"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className={`${opacityClass}`}></div>
        <div className="flex items-center justify-between px-4 py-5">
          <div className="text-center text-neutral-content">
            <div className="">
              {title && (
                <h1 className="text-2xl font-bold text-black">{title}</h1>
              )}
              {headline && (
                <p className="mb-5 text-4xl font-bold leading-tight">
                  {headline}
                </p>
              )}
              {subheadline1 && (
                <p className="mb-5 text-4xl font-bold leading-tight">
                  <span className="text-blue-900 underline">
                    {subheadline1}
                  </span>{" "}
                  Elevating <br /> Lives Personalized
                  <br />
                  <span className="text-blue-900 underline">Excellence</span>
                </p>
              )}
              {subheadline2 && (
                <p className="mb-5 text-4xl font-bold leading-tight">
                  {subheadline2}
                </p>
              )}
              {buttons && buttons.length > 0 && (
                <div className="flex justify-center gap-4">
                  {buttons.map((button, index) => (
                    <button
                      key={index}
                      className={button.className}
                      onClick={button.onClick}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
