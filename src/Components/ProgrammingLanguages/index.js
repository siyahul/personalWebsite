import React, { useRef } from 'react';
import './ProgrammingLanguages.css';
import Code from "../../Assets/images/banner/code.png"
import { useIntersection } from 'react-use';

function ProgrammingLanguages() {
    const programmingLanguages = useRef(null);
  const intersecting = useIntersection(programmingLanguages, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  })
    return (
        <div ref={programmingLanguages} className="programmingLanguages">
            <div className="programmingLanguages__container">
                <p className={intersecting?.isIntersecting?"programmingLanguages__header programmingLanguages__headerAnimation":"programmingLanguages__header"}>Programming Languages I Know</p>
                <div className={intersecting?.isIntersecting?"programmingLanguages__box programmingLanguages__boxAnimation":"programmingLanguages__box"}>
                    <img src={Code} alt="code" className="programmingLanguages__boxImage"/>
                    <ul>
                        <li>C Language</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>Java Script</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ProgrammingLanguages
