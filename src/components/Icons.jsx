import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiTestTubeFill } from 'react-icons/ri';
import {
  SiSass,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiMaterialui,
  SiBootstrap,
  SiGit,
  SiDigitalocean,
  SiAmazonaws,
  SiPhp,
  SiLaravel,
  SiVuedotjs,
  SiMysql,
  SiMongodb,
  SiRedis,
} from 'react-icons/si';

export function Technologies() {
  return (
    <div className='icons grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 text-secondary'>
      <div>
        <AiFillHtml5 />
        <span>HTML5</span>
      </div>
      <div>
        <IoLogoCss3 />
        <span>CSS3</span>
      </div>
      <div>
        <SiSass />
        <span>SASS</span>
      </div>
      <div>
        <SiMaterialui />
        <span>Material UI</span>
      </div>
      <div>
        <SiBootstrap />
        <span>Bootstrap</span>
      </div>
      <div>
        <SiJavascript />
        <span>Javascript</span>
      </div>
      <div>
        <SiTypescript />
        <span>Typescript</span>
      </div>
      <div>
        <FaReact />
        <span>ReactJS</span>
      </div>
      <div>
        <SiNextdotjs />
        <span>NextJs</span>
      </div>
      <div>
        <SiExpress />
        <span>ExpressJs</span>
      </div>
      <div>
        <SiNodedotjs />
        <span>NodeJs</span>
      </div>
      <div>
        <SiMongodb />
        <span>MongoDB</span>
      </div>
      <div>
        <SiGit />
        <span>Git</span>
      </div>
      <div>
        <SiDigitalocean />
        <span>Digital Ocean</span>
      </div>
    </div>
  );
}
export function LearningTechnologies() {
  return (
    <div className='icons grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 text-secondary'>
      <div>
        <SiPhp />
        <span>PHP</span>
      </div>
      <div>
        <SiLaravel />
        <span>Laravel</span>
      </div>
      <div>
        <SiVuedotjs />
        <span>VueJs</span>
      </div>
      <div>
        <SiAmazonaws />
        <span>AWS</span>
      </div>
      <div>
        <SiMysql />
        <span>MySQL</span>
      </div>
      <div>
        <SiRedis />
        <span>Redis</span>
      </div>
      <div>
        <RiTestTubeFill />
        <span>E2E - Unit Testing</span>
      </div>
    </div>
  );
}
