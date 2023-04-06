import { Tabs, Tab } from "@mui/material";
import { BsStack } from "react-icons/bs";
import "./InfoBox.styles.css";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const InfoBox = () => {
  const [{ isOpenInfo, address, latlng }, dispatch] = useStateValue();

  const handleToggleInfo = () => {
    dispatch({ type: actionType.SET_IS_OPEN_INFO, isOpenInfo: !isOpenInfo });
  };

  return (
    <div className="info-box" style={{ maxHeight: isOpenInfo ? "28rem" : 0 }}>
      <Tabs value={0} variant="fullWidth" className="fixed-tab">
        <Tab
          icon={<BsStack />}
          iconPosition="start"
          label="Information"
          onClick={handleToggleInfo}
        />
      </Tabs>
      <div className="p-3 mt-fixed relative">
        <button onClick={handleToggleInfo} className="toggle-info-btn">
          {isOpenInfo ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
        <h4 className="mb-0 text-primary">
          <b>{address?.split(",")[0]}</b>
        </h4>
        <h5>{address?.split(",").slice(1).join(", ")}</h5>
        <p className="mt-0 h6 text-muted mb-3">
          {" "}
          {`Latitude: ${latlng.lat.toFixed(3)}, Longitude: ${latlng.lng.toFixed(
            3
          )}`}
        </p>
        {/* <AnalysisTab temperatureChartData={temperatureChartData} /> */}
      </div>
    </div>
  );
};

export default InfoBox;
