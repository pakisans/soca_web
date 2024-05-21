"use client";
import { capitalizeFirstLetter } from "@/utils/textUtil";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";
import PhoneComponent from "../phone/PhoneComponent";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Compute the breadcrumbs based on the pathname
  const breadcrumbs = useMemo(() => {
    const pathArray = pathname.split("/").filter(Boolean);
    return pathArray.map((path, index) => {
      // Remove hyphens and capitalize each word in the path
      const formattedPath = path
        .split("-")
        .map((word) => capitalizeFirstLetter(decodeURIComponent(word)))
        .join(" ");

      // Construct the breadcrumb path incrementally
      const url = `/${pathArray.slice(0, index + 1).join("/")}`;
      const isLast = index === pathArray.length - 1;
      return { name: formattedPath, url, isLast };
    });
  }, [pathname]);

  // Do not display breadcrumbs on the root path
  if (pathname === "/" || breadcrumbs.length === 0) return null;

  return (
    <nav
      aria-label="breadcrumbs"
      className="px-[4rem] py-[2rem] bg-gradient-to-r from-gray-700 to-gray-900 flex flex-col sm:flex-row justify-between items-center"
    >
      <ol className="list-none p-0 flex flex-wrap items-center">
        <li className="inline">
          <Link href={"/"} passHref legacyBehavior>
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
                <Link href={url} passHref legacyBehavior>
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

      <div className="flex flex-col xsm:flex-row items-center mt-4 xsm:mt-0">
        <PhoneComponent
          phoneNumber={"(+381) 063 444 085"}
          Icon={<PhoneIcon color={"#fff"} />}
        />
        <a
          href="mailto:servis@soca.rs"
          className="flex items-center gap-2 ml-0 xsm:ml-4 mt-2 xsm:mt-0"
        >
          <MailIcon width={30} height={30} color={"#F7F7FF"} />
          <p className="text-mintCream text-[1.4rem] font-bold hover:text-offRed">
            servis@soca.rs
          </p>
        </a>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
