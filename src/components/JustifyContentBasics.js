import React from 'react';
import {View} from 'react-native-web';
import {InnerText, PortfolioButton} from "./Header";
import wheel from "../wheel.png";
import styled from "styled-components";
import { HuePicker } from 'react-color';

const RoomButton = styled(PortfolioButton)`
  padding: 1em;
  margin: 1em;
  width: 200px;
  height: 100px
`;

// render: function() {
//     const rooms = ['Bathroom', 'Bedroom', 'Closet', 'Kitchen', 'Living Room'];
//     return (
//         <ul>
//             {elements.map((value, index) => {
//                 return <li key={index}>{value}</li>
//             })}
//         </ul>
//     )
// }

const JustifyContentBasics = () => {
    return (
        // Try setting `justifyContent` to `center`.
        // Try setting `flexDirection` to `row`.
        <View style={{
            padding: '100px',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',

        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginRight: '50px',
                columnGap: '5em'
            }}>

                <RoomButton href="#rooms">
                    Bathroom
                </RoomButton>
                <HuePicker/>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: '50px'
            }}>
                <RoomButton href="#rooms">
                    Bedroom
                </RoomButton>
                <HuePicker/>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: '50px'
            }}>
                <RoomButton href="#rooms">
                    Closet
                </RoomButton>
                <HuePicker/>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: '50px'
            }}>
                <RoomButton href="#rooms">
                    Kitchen
                </RoomButton>
                <HuePicker/>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: '50px'
            }}>
                <RoomButton href="#rooms">
                    Living Room
                </RoomButton>
                <HuePicker/>
            </View>

        </View>
    );
};

export default JustifyContentBasics;
