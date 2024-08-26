import Link from "next/link";
import InfiniteScroll from "../global/InfinitiveScroll";

const CardSection = ({ cards }) => {
  return (
    <div className="w-full pt-16 px-[2rem] sm:px-[4rem] overflow-hidden">
      <InfiniteScroll>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gray-100 shadow-lg rounded-lg p-6 w-[280px] sm:w-[300px] md:w-[350px] flex-shrink-0 mb-8 transition-transform transform hover:scale-105 overflow-hidden`}
          >
            <h2 className="text-2xl font-bold mb-4 text-night md:text-3xl">
              {card.title}
            </h2>
            <p className="mb-4 text-lg md:text-xl text-wrap">
              {card.content}{" "}
              {card.link && (
                <Link
                  href={card.link.href}
                  className="text-offRed hover:underline"
                >
                  {card.link.text}
                </Link>
              )}
            </p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default CardSection;
