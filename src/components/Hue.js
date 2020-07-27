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
    const URL = 'http://localhost:5000/api/rooms/';
    const result = useFetch(URL);

    // if no data yet, display "Loading..."
    if (!result.data) {
        return <div>Loading...</div>
    }

    // if any light is on; display "Lights are on" for that room
    // otherwise, "Lights are off"
    const livingRoomOn = JSON.stringify(result.data['1']['state']['any_on'])
    const bathroomOn = JSON.stringify(result.data['2']['state']['any_on'])
    const kitchenOn = JSON.stringify(result.data['3']['state']['any_on'])
    const closetOn = JSON.stringify(result.data['8']['state']['any_on'])

    return (
        <div>
            <RoomButton>Living Room <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {livingRoomOn === 'true' ? 'on' : 'off'}</p></RoomButton>
            <RoomButton>Bathroom <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {bathroomOn === 'true' ? 'on' : 'off'}</p></RoomButton>
            <RoomButton>Kitchen <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {kitchenOn === 'true' ? 'on' : 'off'}</p></RoomButton>
            <RoomButton>Closet <p style={{whiteSpace: 'pre', color: 'grey'}}>Lights are {closetOn === 'true' ? 'on' : 'off'}</p></RoomButton>
        </div>
    );

}

export default class Hue extends React.Component {
    state = {
        background: '#fff', // TODO: set to previous lights/' state instead

    };

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
