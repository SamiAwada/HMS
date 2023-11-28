import { FC, useState } from "react";
import { Button } from "react-bootstrap";

type Props = {};

const menuCategories: {
  label: string;
}[] = [
  {
    label: "Cold Drinks"
  },
  {
    label: "Hot Drinks"
  },
  {
    label: "Alcohol Drinks"
  },
  {
    label: "Burgers"
  },
  {
    label: "Sandwich"
  }
];
const items: {
  label: string;
  price: number;
}[] = [
  {
    label: "small water",
    price: 1.5
  },
  {
    label: "large water",
    price: 2.5
  },
  {
    label: "boom boom",
    price: 3
  },
  {
    label: "dark blue",
    price: 3.5
  },
  {
    label: "Sandwich",
    price: 4
  }
];

const MenuPage: FC<Props> = (props: Props): JSX.Element => {
  const [category, setCategory] = useState("Cold Drinks");
  return (
    <main className="d-flex flex-column align-items-center w-100">
      <section className="container  px-0">
        <div
          id="hide-scroll"
          className="d-flex flex-nowrap w-100 overflow-x-auto  gap-2 shadow py-3 px-2"
        >
          {menuCategories.map(({ label }: { label: string }): JSX.Element => {
            return (
              <Button
                key={label}
                variant="transparent"
                size="sm"
                className={
                  category === label
                    ? "border border-3 border-danger bg-danger px-2 py-2 rounded-pill w-fit text-nowrap text-white"
                    : "border border-3 border-danger px-2 py-2 rounded-pill w-fit text-nowrap text-danger"
                }
                style={{ width: "fit-content" }}
                onClick={(e: any): void => {
                  e.preventDefault();
                  setCategory(label);
                }}
              >
                {label}
              </Button>
            );
          })}
        </div>
      </section>
      <section className="container mt-2 shadow px-3">
        <div className="d-flex flex-column mt-2">
          <h1 className="w-100 bg-danger-subtle text-danger fs-2 fw-bolder px-3 rounded text-center py-2 mt-3">
            {category}
          </h1>
          <p className="fs-6 text-center">
            Note: All prices include VAT-7% ROOM SERVICE CHARGE
          </p>
          <p className="fs-6">Ice Charge 2$</p>
        </div>
        <div className="d-flex flex-column mt-3 w-100">
          {items.map(
            (
              {
                label,
                price
              }: {
                label: string;
                price: number;
              },
              i: number
            ): JSX.Element => {
              return (
                <div key={"item" + i} className="d-flex flex-column w-100">
                  <h2 className="fs-5 fw-bold mb-3 mt-3">{label}</h2>
                  <p className="fs-5 text-danger mb-5">$ {price}</p>
                  <div className="w-100 border-bottom border-secondary-subtle" />
                </div>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
