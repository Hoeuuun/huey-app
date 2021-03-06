import React, {useEffect, useState} from 'react';
import { ChromePicker } from 'react-color';
import styled from "styled-components";
import {InnerText, PortfolioButton} from "./Header";
import {View} from "react-native-web";

const RoomButton = styled(PortfolioButton)`
  padding: 1em;
  margin: 1em;
  width: 250px;
  height: 150px;
  // alignSelf: 'center'
`;

const BASE_URL = 'http://localhost:5000'


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, [url]);  // dependency array; ensures useEffect runs only once when component is mounted

    return {data, error, isLoading};
};

// Uses above useFetch() function to request data about given light
// Displays whether light is on or off
export const Light = () => {
    const URL = `${BASE_URL}/api/rooms/`;
    const result = useFetch(URL);

    // const [isOn, setIsOn] = useState(true);
    const [isOn, setIsOn] = useState([]);

    // if no data yet, display "Loading..."
    if (!result.data) {
        return <div>Loading...</div>
    }

    // if any light is on; display "Lights are on" for that room
    // otherwise, "Lights are off"
    const livingRoomOn = JSON.stringify(result.data['1']['state']['any_on'])    // 1
    const bathroomOn = JSON.stringify(result.data['2']['state']['any_on'])      // 2
    const kitchenOn = JSON.stringify(result.data['3']['state']['any_on'])       // 3
    const closetOn = JSON.stringify(result.data['8']['state']['any_on'])        // 8


    // toggles room lights on and off when on button click
    const onGroupToggle = async function(groupNumber) {
        const putUrl = `${URL}${groupNumber}/action/`;
        const data = {
           "on": !isOn
        }
        setIsOn(!isOn)
        const response = await fetch(putUrl,{
            headers: { 'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(data)}
            )
    }

    return (
        <div>
            <RoomButton onClick={e => onGroupToggle(1)}>Living Room <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {isOn === true ? 'on' : 'off'}</p></RoomButton>
            {/*<RoomButton onClick={e => onGroupToggle(2)}>Bathroom <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {isOn === true ? 'on' : 'off'}</p></RoomButton>*/}
            {/*<RoomButton onClick={e => onGroupToggle(3)}>Kitchen <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {isOn === true ? 'on' : 'off'}</p></RoomButton>*/}
            <RoomButton onClick={e => onGroupToggle(8)}>Closet <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {isOn === true ? 'on' : 'off'}</p></RoomButton>

            <RoomButton>Bathroom <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {bathroomOn === 'true' ? 'on' : 'off'}</p></RoomButton>
            <RoomButton>Kitchen <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {kitchenOn === 'true' ? 'on' : 'off'}</p></RoomButton>
            {/*<RoomButton>Closet <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {closetOn === 'true' ? 'on' : 'off'}</p></RoomButton>*/}
        </div>
    );

}

export default class Hue extends React.Component {
    // state = {
    //     background: '#fff', // TODO: set to previous lights/' state instead
    //
    // };

    handleChange = (color) => {
        this.setState({ background: color.hex });
    };

    render() {
        return (
            <div>
                <View style={{
                    padding: '100px',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }}>
                <Light></Light>
            {/*    <ChromePicker*/}
            {/*        color={ this.state.background }*/}
            {/*        onChangeComplete={ this.handleChange }*/}
            {/*    />*/}

            {/*<p>{this.state.background}</p>*/}
                </View>
            </div>
        );
    }
}
