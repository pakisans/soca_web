const PageHeader = ({ title, description }) => {
  return (
    <section className="w-full flex flex-col items-center py-8 md:py-16 px-[2rem] md:px-[4rem] bg-gradient-to-r from-gray-600 to-black text-white rounded-lg shadow-lg border-t border-t-white">
      <h1 className="text-4xl md:text-6xl text-center sm:text-left leading-[3.6rem] font-bold animate-fade-in">
        {title}
      </h1>
      {description ? (
        <p className="text-lg md:text-2xl mt-8 text-center animate-slide-down">
          {description}
        </p>
      ) : null}
    </section>
  );
};

export default PageHeader;
