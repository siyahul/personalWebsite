import React, { memo, useRef } from "react";
import "./ToolsUsed.css";
import AdobeXdLogo from "../../Assets/images/Tools/xd.png";
import ReactLogo from "../../Assets/images/Tools/react.png";
import ReduxLogo from "../../Assets/images/Tools/redux.png";
import MongoDBLogo from "../../Assets/images/Tools/Mongodb.png";
import ExpressLogo from "../../Assets/images/Tools/express.png";
import NodeJSLogo from "../../Assets/images/Tools/nodejs.png";
import GitLogo from "../../Assets/images/Tools/git.png";
import Mouse from "../../Assets/images/banner/mouse.png";
import { useIntersection } from "react-use";

function ToolsUsed() {
  const toolsUsed = useRef(null);
  const intersecting = useIntersection(toolsUsed, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });
  return (
    <div ref={toolsUsed} className="toolsUsed">
      <div className="toolsUsed__container">
        <p className={intersecting?.isIntersecting ? "para onView" : "para"}>
          Tools i am using
        </p>
        <div className="toolsUsed__banner">
          <img alt="" banner src={Mouse} />
        </div>
        <div
          className={
            intersecting?.isIntersecting
              ? "toolsUsed__section toolsUsed__sectionAnimate"
              : "toolsUsed__section"
          }
        >
          <div className="toolsUsed__tools">
            <img alt="tools" src={AdobeXdLogo} />
            <p>Adobe XD</p>
          </div>
          <div className="toolsUsed__tools">
            <img alt="tools" className="reactRotate" src={ReactLogo} />
            <p>React JS</p>
          </div>
          <div className="toolsUsed__tools">
            <img alt="tools" className="reactRotate" src={ReactLogo} />
            <p>React Native</p>
          </div>
          <div className="toolsUsed__tools">
            <img alt="tools" className="reduxUpDown" src={ReduxLogo} />
            <p>Redux</p>
          </div>
          <div className="toolsUsed__tools">
            <img alt="tools" src={MongoDBLogo} />
            <p>Mongo DB</p>
          </div>
          <div className="toolsUsed__tools">
            <img alt="tools" src={ExpressLogo} />
            <p>Express JS</p>
          </div>
          <div className="toolsUsed__tools">
            <img alt="tools" src={NodeJSLogo} />
            <p>Node JS</p>
          </div>
          <div className="toolsUsed__tools">
            <img alt="tools" src={GitLogo} />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ToolsUsed);
