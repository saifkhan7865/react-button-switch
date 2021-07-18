#What is this?

This is a library for react-switch-button with a lot of customization
#how does it look like?

![Screenshot1](https://res.cloudinary.com/dzn1kqjmo/image/upload/v1626600670/switchNpmPackage_qvgdo5.png)

#How to install it?

`npm install react-switch-button --save`

#How to use it?

```
import Switch from "react-switch-button";

const [change,setchange] = useState(false);


//inside the function component

<Switch
    ballclass="circle"    //CSS class for circle ball in the switch, dont use the name of the class 'innercircle'
    outerdiv="outdiv"     // CSS class for the outer div where the circle will move
    change={change}       //change state from the useState
    setchange={setchange} // setchange state from the useState
    speed={"0.2s"}        // speed of the movement make sure to write 's' in the end
    ONCOLOR={"#002D6F"}   // ON color of the outer div
    OFFCOLOR={"grey"}     // OFF color of the outer div
    />

//for the height and width for the outer and inner div we have to write that in the CSS class and pass it in as a

//prop

.outdiv {
  height: 15px;
  width: 40px;
  border-radius: 40px;
}

.circle {
  background-color: #e4e4e7; //background color for the inner circle
  height: 21px;
  width: 21px;
  border-radius: 12px;
}

Implementation using Bootstrap

<div className="container row p-0 my-5 mx-5">
        <div className="col-sm-4 ">
          <Switch
            ballclass="circle"
            outerdiv="outdiv"
            change={change}
            setchange={setchange}
            speed={"0.2s"}
            ONCOLOR={"#002D6F"}
            OFFCOLOR={"grey"}
          />
        </div>
        <div className="col-sm-7 p-0">
          <span> Remote</span>
        </div>
      </div>

```

![Screenshot1](https://res.cloudinary.com/dzn1kqjmo/image/upload/v1626600573/bootstrapImplementationNpmpackage_iphva5.png)
