import { useState } from "react";
import { Drawer } from "@mui/material";
import { FaCloudRain } from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { TbWind } from "react-icons/tb";
import { TbTemperatureCelsius } from "react-icons/tb";
import { BsFillLayersFill } from "react-icons/bs";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

export const menuOptions = [
  { title: "CLOUD", icon: <AiFillCloud />, layer: "clouds_new" },
  { title: "PRECIPITATION", icon: <FaCloudRain />, layer: "precipitation_new" },
  { title: "PRESSURE", icon: <MdTimelapse />, layer: "pressure_new" },
  { title: "TEMPERATURE", icon: <TbTemperatureCelsius />, layer: "temp_new" },
  { title: "WIND", icon: <TbWind />, layer: "wind_new" },
];

export default function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [{ mapMode }, dispatch] = useStateValue();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpenMenu(open);
  };

  const handleChangeMode = (mode) => () => {
    if (mapMode.title === mode.title)
      dispatch({ type: actionType.SET_MAP_MODE, mapMode: {} });
    else dispatch({ type: actionType.SET_MAP_MODE, mapMode: mode });
  };

  return (
    <>
      <button
        className="absolute topmost left-32 bottom-20 rounded-3xl bg-black bg-opacity-60 p-4 w-56"
        onClick={toggleDrawer(true)}
      >
        <div className="flex items-center justify-center gap-4">
          <div className="text-3xl text-white absolute -left-2 h-16 w-16 flex items-center justify-center rounded-full bg-active">
            {mapMode.icon ? mapMode.icon : <BsFillLayersFill />}
          </div>
          <p className="text-active font-bold text-xl ml-10">
            {mapMode.title ? mapMode.title : "Choose layer"}
            <br />
          </p>
        </div>
      </button>
      <Drawer anchor="left" open={isOpenMenu} onClose={toggleDrawer(false)}>
        <div
          className="w-80 flex flex-col p-3 gap-5 capitalize"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuOptions.map((item) => (
            <button
              className={`flex items-center justify-start gap-3 font-bold ${
                mapMode.title === item.title
                  ? "text-active font-extrabold"
                  : "text-base"
              }`}
              key={item.layer}
              onClick={handleChangeMode(item)}
            >
              <div
                className={` p-3 rounded-full ${
                  mapMode.title === item.title
                    ? "bg-active text-white"
                    : "text-primary"
                }`}
              >
                <p className="text-2xl">{item.icon}</p>
              </div>
              <p className="capitalize">{item.title}</p>
            </button>
          ))}
        </div>
      </Drawer>
    </>
  );
}
