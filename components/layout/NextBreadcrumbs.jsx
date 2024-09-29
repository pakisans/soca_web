"use client";
import Link from "next/link";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";

const NextBreadcrumbs = ({ breadcrumbs }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  return (
    <nav
      aria-label="breadcrumbs"
      className="px-[2rem] sm:px-[4rem] py-[2rem] bg-gradient-to-r from-gray-700 to-black flex flex-col sm:flex-row justify-between items-center"
    >
      <ol className="list-none p-0 flex flex-wrap items-center">
        <li className="inline">
          <Link href="/" passHref>
            <a className="text-mintCream text-[1.8rem] hover:text-offRed">
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
                <Link href={url} passHref>
                  <a className="text-blue-600 text-[1.6rem] hover:text-offRed">
                    {name}
                  </a>
                </Link>
                <span className="mx-2 text-mintCream text-[1.8rem]">/</span>
              </>
            ) : (
              <span className="text-mintCream text-[1.6rem]">{name}</span>
            )}
          </li>
        ))}
      </ol>

      <div className="flex flex-col xsm:flex-row items-center lg:gap-x-8 mt-4 xsm:mt-0">
        <a
          href={`tel:(+381) 63 444 085`}
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
          target="_blank"
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
  );
};

export default NextBreadcrumbs;
