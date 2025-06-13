/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { sidebarStructure } from "./structure";

interface SidemenuProps {
  isExpand?: boolean;
  isExpandOnHover?: boolean;
}

const Sidemenu: FC<SidemenuProps> = ({
  isExpand = true,
  isExpandOnHover = false
}) => {
  const username = "Miles Heizer";
  const company = "Unilever";
  const profilePic =
    "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";
  const link = "/";

  const [openedMenu, setOpenedMenu] = useState<Record<string, any>>({});
  const [activeName, setActiveName] = useState("");
  const activeLink = window.location.pathname;

  const listRef = useRef<Record<string, HTMLUListElement | null>>({});

  const handleNavigate = (path: string) => {
    setActiveName(path);
  };

  const handleToggle = (name: string) => {
    const rootEl = name.split(".")[0];

    if (openedMenu[name]?.open === true) {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: false,
          height: "0px"
        },
        [rootEl]: {
          open: rootEl === name ? false : true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) -
            (listRef.current[name]?.scrollHeight || 0)
          }px`
        }
      }));
    } else {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: true,
          height: `${listRef.current[name]?.scrollHeight || 0}px`
        },
        [rootEl]: {
          open: true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) +
            (listRef.current[name]?.scrollHeight || 0)
          }px`
        }
      }));
    }
  };

  const generateIcon = (icon: string) => {
    var icons_map: Record<string, JSX.Element> = {};

    icons_map["dasbor"] = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-current"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <g
          id="ic_kanban"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M20,3 C21.1045695,3 22,3.8954305 22,5 L22,15 C22,16.1045695 21.1045695,17 20,17 L4,17 C2.8954305,17 2,16.1045695 2,15 L2,5 C2,3.8954305 2.8954305,3 4,3 L20,3 Z M11.5,6 L6.5,6 C5.67157288,6 5,6.67157288 5,7.5 L5,7.5 L5,9.5 C5,10.3284271 5.67157288,11 6.5,11 L6.5,11 L11.5,11 C12.3284271,11 13,10.3284271 13,9.5 L13,9.5 L13,7.5 C13,6.67157288 12.3284271,6 11.5,6 L11.5,6 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
          <path
            d="M8,21 L16,21 M12,17 L12,21"
            id="Combined-Shape"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
    icons_map["transaksi"] = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-current"
        viewBox="0 0 24 24"
      >
        <path
          d="m20.247634 1c1.0125221 0 1.8333334.82081129 1.8333334 1.83333333s-.8208113 1.83333334-1.8333334 1.83333334c-.3158442 0-.6130339-.07986936-.8724738-.22051281l-3.0249251 3.47961717c.1346337.25513483.2108509.5458717.2108509.85441003 0 1.01252204-.8208113 1.83333334-1.8333334 1.83333334-.9820883 0-1.7838173-.7722101-1.8311257-1.74256896l-2.2033918-.75849737c-.336256.40778098-.84535009.66773299-1.41515923.66773299-.32712483 0-.63423886-.08567643-.90012689-.2358141l-2.87560465 2.41277624c.05416355.1730906.08335496.3572185.08335496.5481644 0 1.012522-.8208113 1.8333333-1.83333334 1.8333333s-1.83333333-.8208113-1.83333333-1.8333333c0-1.0125221.82081129-1.83333335 1.83333333-1.83333335.33090488 0 .64133381.08766791.90932763.24104456l2.86960725-2.40787374c-.05621505-.1760311-.0865583-.3636207-.0865583-.55829735 0-1.01252204.8208113-1.83333333 1.83333334-1.83333333.97577423 0 1.77350093.76231258 1.83011983 1.7238777l2.2160025.76325559c.336304-.39976002.8402621-.65379996 1.4035544-.65379996.2130474 0 .4176071.03634016.6078186.10315996l3.1693503-3.64581344c-.0588143-.17965899-.0906208-.37154554-.0906208-.57086091 0-1.01252204.8208113-1.83333333 1.8333333-1.83333333z"
          opacity=".48"
          fill="currentColor"
        />
        <path
          d="m21.1666667 9.60855714c.506261 0 .9166666.41040566.9166666.91666666v10.7540685c0 .2761423-.2238576.5-.5.5h-2.6666666c-.2761424 0-.5-.2238577-.5-.5v-10.7540685c0-.506261.4104056-.91666666.9166666-.91666666zm-5.5 6.42549146c.506261 0 .9166666.4104057.9166666.9166667v4.328577c0 .2761423-.2238576.5-.5.5h-2.6666666c-.2761424 0-.5-.2238577-.5-.5v-4.328577c0-.506261.4104056-.9166667.9166666-.9166667zm-5.5-1.8405511c.506261 0 .9166666.4104057.9166666.9166667v6.1691281c0 .2761423-.2238576.5-.5.5h-2.66666663c-.27614238 0-.5-.2238577-.5-.5v-6.1691281c0-.506261.41040564-.9166667.91666666-.9166667zm-5.50000003 4.7135227c.50626102 0 .91666666.4104057.91666666.9166667v1.4556054c0 .2761423-.22385762.5-.5.5h-2.66666666c-.27614238 0-.5-.2238577-.5-.5v-1.4556054c0-.506261.41040564-.9166667.91666666-.9166667z"
          fill="currentColor"
        />
      </svg>
    );
    icons_map["perusahaan"] = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-current"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.5367 20.5812H2.45436C1.92714 20.5812 1.5 21.0083 1.5 21.536C1.5 22.0628 1.92714 22.4899 2.45436 22.4899H21.5362C22.0635 22.4899 22.4906 22.0628 22.4906 21.536C22.4902 21.0083 22.063 20.5812 21.5367 20.5812Z"
          fill="currentColor"
        />
        <path
          d="M3.64772 18.1001C3.1205 18.1001 2.69336 18.5273 2.69336 19.0545C2.69336 19.5817 3.1205 20.0093 3.64772 20.0093H20.3446C20.8718 20.0093 21.2989 19.5817 21.2989 19.0545C21.2989 18.5273 20.8718 18.1001 20.3446 18.1001H20.1064V9.51266H20.3446C20.6086 9.51266 20.8213 9.29909 20.8213 9.03592C20.8213 8.77276 20.6077 8.55919 20.3446 8.55919H3.64772C3.38411 8.55919 3.17099 8.77276 3.17099 9.03592C3.17099 9.29909 3.38456 9.51266 3.64772 9.51266H3.88631V18.0997H3.64772V18.1001ZM18.1977 9.51266V18.0997H15.3355V9.51266H18.1977ZM13.4268 9.51266V18.0997H10.5646V9.51266H13.4268ZM5.79414 9.51266H8.65633V18.0997H5.79414V9.51266Z"
          fill="currentColor"
        />
        <path
          opacity="0.48"
          d="M2.45438 7.70134H21.5363C21.5394 7.70134 21.543 7.70134 21.5456 7.70134C22.0733 7.70134 22.5 7.2742 22.5 6.74698C22.5 6.32788 22.2301 5.97268 21.8553 5.844L12.3876 1.58377C12.1387 1.47208 11.8541 1.47208 11.6048 1.58377L2.06298 5.87706C1.65238 6.06204 1.42674 6.50794 1.52146 6.94759C1.61574 7.38724 2.00445 7.70134 2.45438 7.70134Z"
          fill="currentColor"
        />
      </svg>
    );
    icons_map["mou"] = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <g transform="translate(5 3)">
          <path
            d="m7 8c2.209139 0 4-1.790861 4-4s-1.790861-4-4-4-4 1.790861-4 4 1.790861 4 4 4z"
            opacity=".48"
          />
          <path d="m13 18.0000001c.5522847 0 1-.4477154 1-1 0-3.8659933-3.1340068-7-7-7-3.86599321 0-7 3.1340067-7 7 0 .5522846.44771525 1 1 1z" />
        </g>
      </svg>
    );
    icons_map["pusatunduhdata"] = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z"
        />
      </svg>
    );
    return icons_map[icon];
  };

  const generateMenu = (item: any, index: number, recursive: number = 0) => {
    if (activeName === "" && activeLink.includes(item.link)) {
      setActiveName(item.name);
    }
    const classesActive = activeName === item.name ? "active" : "";

    return (
      <li key={index}>
        <a
          role="button"
          tabIndex={0}
          id={item.id}
          onClick={() => {
            if ("child" in item) {
              handleToggle(item.name);
            } else if ("link" in item) {
              handleNavigate(item.name);
            }
          }}
          onKeyDown={(event) => {
            const { code } = event;
            if (code === "Space") {
              if ("child" in item) {
                handleToggle(item.name);
              } else if ("link" in item) {
                handleNavigate(item.name);
              }
            }
          }}
          className={[
            "group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none",
            recursive === 0 ? "pl-4" : recursive === 1 ? "pl-11" : "pl-16",
            activeName === item.name || activeName.split(".")[0] === item.name
              ? `text-blue-600 font-semibold ${
                  item.parent ? "bg-blue-200/20 " : "bg-transparent"
                }`
              : `text-gray-500 ${item.parent && ""}`,
            "hover:bg-gray-300/20",
            classesActive
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            {item.icon ? (
              item.icon === "dot" ? (
                <div className="h-3 w-3 flex items-center justify-center">
                  <div
                    className={[
                      `${classesActive ? "h-2 w-2" : "h-1 w-1"}`,
                      "bg-current rounded-full transition duration-200"
                    ].join(" ")}
                  ></div>
                </div>
              ) : (
                generateIcon(item.icon)
              )
            ) : null}
            <div
              className={`truncate ${
                isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              {item.title}
            </div>
          </div>
          {"child" in item ? (
            <div
              className={`${
                isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            false
          )}
        </a>
        {"child" in item ? (
          <ul
            ref={(el) => (listRef.current[item.name] = el)}
            className={[
              "transition-max-height overflow-hidden duration-300 ease-in-out",
              isExpand ? "" : isExpandOnHover ? "" : "h-0"
            ].join(" ")}
            style={{ maxHeight: `${openedMenu[item.name]?.height || "0px"}` }}
            key={item.name}
          >
            {item.child.map((value: any, idx: number) =>
              generateMenu(value, idx, recursive + 1)
            )}
          </ul>
        ) : (
          false
        )}
      </li>
    );
  };

  return (
    <SimpleBar style={{ height: "100%" }} autoHide timeout={100}>
      <div className="mb-0 list-none text-gray-500">
        <div
          className={`my-8 flex flex-col items-center overflow-x-hidden duration-300 ${
            isExpand ? "px-3" : isExpandOnHover ? "px-3" : "px-5"
          }`}
        >
          <a
            href={link}
            className={`flex items-center rounded-lg w-full h-20 duration-300 ${
              isExpand
                ? "bg-gray-300/25 px-4 gap-3"
                : isExpandOnHover
                ? "bg-gray-300/25 px-4 gap-3"
                : ""
            }`}
          >
            <div
              className={`rounded-full overflow-hidden duration-300 h-10 w-10 shrink-0`}
            >
              <img src={profilePic} className="block" alt="" />
            </div>
            <div
              className={`flex flex-col ${
                isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              <div
                className={`text-base font-semibold text-gray-700 truncate duration-300`}
              >
                {username}
              </div>
              <div className={`text-sm text-gray-500 truncate`}>{company}</div>
            </div>
          </a>
        </div>

        <div className="mt-3 mb-10 p-0 leading-10">
          <ul className="list-none text-sm font-normal px-3">
            {sidebarStructure.map((item, index) => generateMenu(item, index))}
          </ul>
        </div>
      </div>
    </SimpleBar>
  );
};

export default Sidemenu;
