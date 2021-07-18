import react from "react"
import "./newstyles.css";

function Switch(props) {
  const {
    ballclass,
    outerdiv,
    change,
    setchange,
    speed,
    ONCOLOR,
    OFFCOLOR
  } = props;

  // const [change, setchange] = useState(false);
  return (
    <>
      <div
        className={outerdiv}
        style={{
          backgroundColor: change ? ONCOLOR : OFFCOLOR
        }}
        onClick={() => {
          setchange(!change);
        }}
      >
        <div
          onClick={() => {
            setchange(!change);
          }}
          style={{
            left: change ? "50%" : "-2%",
            transition: `left ${speed} linear`
          }}
          class={ballclass + " innercirle"}
        ></div>
      </div>
    </>
  );
}
export default Switch;