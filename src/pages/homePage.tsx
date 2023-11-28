import React, { FC } from "react";
import { Link } from "react-router-dom";

type Props = {};

const demo: { name: string; imageUrl: string; href: string }[] = [
  {
    name: "resturants",
    imageUrl: "",
    href: "/menu"
  },
  {
    name: "beauty salon",
    imageUrl: "",
    href: "/menu"
  },
  {
    name: "spa",
    imageUrl: "",
    href: "/menu"
  },
  {
    name: "laundry list",
    imageUrl: "",
    href: "/menu"
  },
  {
    name: "facilities",
    imageUrl: "",
    href: "/menu"
  },
  {
    name: "gallery",
    imageUrl: "",
    href: "/menu"
  },
  {
    name: "insta",
    imageUrl: "",
    href: "/menu"
  },
  {
    name: "facebook",
    imageUrl: "",
    href: "/menu"
  }
];

const HomePage: FC<Props> = (props: Props): JSX.Element => {
  return (
    <main className="d-flex flex-column align-items-center w-100">
      <section className="container pt-5">
        <div className="d-flex flex-row w-100 justify-content-center flex-wrap gap-4">
          {demo.map(
            (
              {
                name,
                imageUrl,
                href
              }: { name: string; imageUrl: string; href: string },
              i: number
            ): JSX.Element => {
              return (
                <Link
                  to={href}
                  className="d-flex flex-column justify-content-center align-items-center text-decoration-none"
                  style={{ width: "8rem" }}
                >
                  <div
                    className="bg-secondary w-100 rounded-circle shadow-sm"
                    style={{ height: "130px" }}
                  ></div>
                  <p className="fs-5 fw-bold text-black text-capitalize pt-2">
                    {name}
                  </p>
                </Link>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
