import React from "react";
import {InnerText} from "./Header";
import {PortfolioButton} from "./Header";
import styled from "styled-components";

import { SketchPicker } from 'react-color';
import {View} from "react-native-web";
import Hue from "./Hue";
import {HueApp} from "./HueApp";


// const Labels = styled(InnerText)`
//   padding: 1em;
//   margin: 1em;
//
// `;

export function Rooms() {
    return (
        <div>
            {/*<Hue></Hue>*/}
            <HueApp></HueApp>
        </div>);
}