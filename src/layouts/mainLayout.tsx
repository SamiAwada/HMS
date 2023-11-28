import { Fragment, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

type Props = {};

const MainLayout: (props: Props) => JSX.Element = (
  props: Props
): JSX.Element => {
  const [language, setLanguage] = useState("EN");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const memoSubHeader: JSX.Element = useMemo((): JSX.Element => {
    return pathname === "/" ? (
      <div className="d-flex w-100">
        <div className="ms-auto">
          <Button variant="transparent" size="lg" className=" py-1">
            <i
              className="bi bi-cart-fill text-black"
              style={{ width: "30px", height: "30px" }}
            ></i>
          </Button>
        </div>
      </div>
    ) : (
      <div className="d-flex flex-row justify-content-between align-items-center w-100 pt-1">
        <div className="d-flex flex-row gap-1">
          <Button variant="transparent" className="px-2">
            <i className="bi bi-grid-fill fs-4"></i>
          </Button>
          <Button variant="transparent" className="px-2">
            <i className="bi bi-sort-up-alt fs-4"></i>
          </Button>
        </div>
        <div className="">
          <Button variant="transparent">
            <i className="bi bi-search fs-4"></i>
          </Button>
        </div>
      </div>
    );
  }, [pathname]);

  return (
    <Fragment>
      <header className="container  shadow-sm">
        <div className="d-flex flex-column w-100 py-1">
          <nav className="d-flex flex-row w-100 justify-content-between align-items-center">
            <div>
              <Button
                className="bg-transparent text-black border-0"
                type="button"
                onClick={(e: any): void => {
                  e.preventDefault();
                  if (pathname !== "/") navigate("/");
                }}
              >
                {pathname === "/" ? (
                  <i className="bi bi-list fs-4"></i>
                ) : (
                  <i className="bi bi-arrow-left fs-4"></i>
                )}
              </Button>
            </div>
            <div>
              <DropdownButton
                id="dropdown-basic-button"
                title={language}
                className="bg-transparent"
                variant={"transparent"}
              >
                <Dropdown.Item onSelect={(e: any) => setLanguage(e)}>
                  EN
                </Dropdown.Item>
                <Dropdown.Item onSelect={(e: any) => setLanguage(e)}>
                  AR
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </nav>
          <div className="d-flex justify-content-center w-100">
            <div
              className="bg-secondary mr-1"
              style={{ width: "90px", height: "45px" }}
            ></div>
            <div
              className="bg-secondary"
              style={{ width: "90px", height: "45px" }}
            ></div>
          </div>
          {memoSubHeader}
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </Fragment>
  );
};

export default MainLayout;
