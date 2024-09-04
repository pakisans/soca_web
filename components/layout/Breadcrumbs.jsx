"use client";
import {
  capitalizeFirstLetter,
  replaceUnderscoreWithSlash,
} from "@/utils/textUtil";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const pathArray = pathname.split("/").filter(Boolean);
    return pathArray.map((path, index) => {
      const formattedPath = path
        .split("-")
        .map((word) => capitalizeFirstLetter(decodeURIComponent(word)))
        .join(" ");

      const url = `/${pathArray.slice(0, index + 1).join("/")}`;
      const isLast = index === pathArray.length - 1;
      return { name: formattedPath, url, isLast };
    });
  }, [pathname]);

  if (pathname === "/" || breadcrumbs.length === 0) return null;

  const generateStructuredData = () => {
    const items = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`,
          name: item.name,
        },
      })),
    };
    return JSON.stringify(items);
  };

  return (
    <>
      <script
        id="application/ld+json-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateStructuredData() }}
      />
      <nav
        aria-label="breadcrumb"
        className="px-[2rem] sm:px-[4rem] py-[2rem] bg-gradient-to-r from-gray-700 to-black flex flex-col sm:flex-row justify-between items-center"
      >
        <ol className="list-none p-0 flex flex-wrap items-center">
          <li className="inline">
            <Link href={"/"} passHref legacyBehavior>
              <a className="text-[#66B2FF] und text-[1.8rem] hover:text-offRed">
                Početna
              </a>
            </Link>
            {breadcrumbs.length > 0 && (
              <span className="mx-2 text-mintCream text-[1.8rem]">/</span>
            )}
          </li>

          {breadcrumbs.map(({ name, url, isLast }, index) => (
            <li key={url} className="inline">
              {!isLast ? (
                <>
                  <Link href={url} passHref legacyBehavior>
                    <a className="text-[#66B2FF] text-[1.6rem] hover:text-offRed">
                      {name}
                    </a>
                  </Link>
                  <span className="mx-2 text-mintCream text-[1.8rem]">/</span>
                </>
              ) : (
                <span className="text-mintCream text-[1.6rem]">
                  {replaceUnderscoreWithSlash(name)}
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="flex flex-col xsm:flex-row items-center lg:gap-x-8 mt-8 sm:mt-0 gap-y-5">
          <a
            href={`tel:(+381) 063 444 085`}
            className="flex items-center gap-2 group"
          >
            <PhoneIcon
              width={20}
              height={20}
              color={"#fff"}
              styles={"group-hover:fill-offRed"}
            />
            <p className="text-mintCream text-[1.4rem] font-bold group-hover:text-offRed">
              (+381) 063 444 085
            </p>
          </a>
          <a
            href="mailto:servis@soca.rs"
            className="flex items-center gap-2 ml-0 xsm:ml-4 mt-2 xsm:mt-0 group"
          >
            <MailIcon
              width={30}
              height={30}
              color={"#F7F7FF"}
              styles={"group-hover:fill-offRed"}
            />
            <p className="text-mintCream text-[1.4rem] font-bold group-hover:text-offRed">
              servis@soca.rs
            </p>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
