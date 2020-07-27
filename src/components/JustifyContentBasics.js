import React from 'react';
import {View} from 'react-native-web';
import {InnerText, PortfolioButton} from "./Header";
import wheel from "../wheel.png";
import styled from "styled-components";
import {ChromePicker, HuePicker} from 'react-color';
import Hue from "./Hue";
import Light from "./Hue";

const RoomButton = styled(PortfolioButton)`
  padding: 1em;
  margin: 1em;
  width: 200px;
  height: 150px;
  // alignSelf: 'center'
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
        <div>
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
                    <RoomButton>
                        Living Room
                        <Light/>
                    </RoomButton>
                    <div style={{marginTop: '-4.5em'}}>
                        <Hue/>
                    </div>

                </View>
            </View>

        </div>

        // <View style={{
        //     padding: '100px',
        //     flex: 1,
        //     flexDirection: 'column',
        //     justifyContent: 'space-around',
        //
        //
        // }}>
        //     <View style={{
        //         flexDirection: 'row',
        //         justifyContent: 'space-around',
        //         marginRight: '50px',
        //         columnGap: '5em'
        //     }}>
        //
        //         <RoomButton href="#rooms">
        //             Bathroom
        //         </RoomButton>
        //         <Hue/>
        //     </View>

        //     <View style={{
        //         flexDirection: 'row',
        //         justifyContent: 'space-between',
        //         marginRight: '50px'
        //     }}>
        //         <RoomButton href="#rooms">
        //             Bedroom
        //         </RoomButton>
        //         <Hue/>
        //     </View>
        //
        //     <View style={{
        //         flexDirection: 'row',
        //         justifyContent: 'space-between',
        //         marginRight: '50px'
        //     }}>
        //         <RoomButton href="#rooms">
        //             Closet
        //         </RoomButton>
        //         <Hue/>
        //     </View>
        //
        //     <View style={{
        //         flexDirection: 'row',
        //         justifyContent: 'space-between',
        //         marginRight: '50px'
        //     }}>
        //         <RoomButton href="#rooms">
        //             Kitchen
        //         </RoomButton>
        //         <Hue/>
        //     </View>
        //
        //     <View style={{
        //         flexDirection: 'row',
        //         justifyContent: 'space-between',
        //         marginRight: '50px'
        //     }}>
        //         <RoomButton href="#rooms">
        //             Living Room
        //         </RoomButton>
        //         <Hue/>
        //     </View>
        //
        // </View>
    );
};

export default JustifyContentBasics;
