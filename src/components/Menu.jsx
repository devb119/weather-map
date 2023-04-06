import { useState } from "react";
import { Drawer } from "@mui/material";

export default function TemporaryDrawer() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpenMenu(open);
  };

  return (
    <div>
      <button
        className="absolute topmost left-32 bottom-20 rounded bg-primary"
        onClick={toggleDrawer(true)}
      >
        Hello
      </button>
      <Drawer anchor="left" open={isOpenMenu} onClose={toggleDrawer(false)}>
        <div
          className="w-80"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        ></div>
      </Drawer>
    </div>
  );
}
