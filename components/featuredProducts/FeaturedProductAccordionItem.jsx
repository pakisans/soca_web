import Link from "next/link";
import FeaturedProductAccordion from "./FeaturedProductAccordion";
import Image from "next/image";

const FeatureProductAccordionItem = ({
  title,
  titleDescription,
  table,
  imageUrl,
  dimensionListUrl,
  technicalListUrl,
  description,
  dimennsionImageUrl,
}) => {
  return (
    <FeaturedProductAccordion
      title={title}
      titleDescription={titleDescription}
      imageUrl={imageUrl}
    >
      <div className="flex flex-col items-center gap-6 justify-center">
        <p className="text-sm md:text-lg mb-[1rem] md:pl-[14.5rem]">
          {description}
        </p>
        {table ? (
          <div className="w-full md:w-1/2 overflow-x-auto">
            <table className="w-full border-collapse border bg-mintCream border-gray-200 text-sm md:text-base">
              <tbody>
                {table.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 p-4 text-sm md:text-xl font-semibold">
                      {row[0]}
                    </td>
                    <td className="border border-gray-200 p-4 text-sm md:text-xl">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        <Image
          width={700}
          height={700}
          src={dimennsionImageUrl}
          alt={`${title} dimenzije`}
          objectFit="fill"
          className="mt-5"
        />

        <div className="flex-1 mt-5">
          {dimensionListUrl ? (
            <Link
              className="inline-block mb-4 text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md"
              href={dimensionListUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Dimenzije
            </Link>
          ) : null}
          {technicalListUrl ? (
            <Link
              className="inline-block mb-4 ml-4 text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md"
              href={technicalListUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Tehnički podaci
            </Link>
          ) : null}
        </div>
      </div>
    </FeaturedProductAccordion>
  );
};

export default FeatureProductAccordionItem;
