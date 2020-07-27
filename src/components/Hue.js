import React, {useEffect, useState} from 'react';
import { ChromePicker } from 'react-color';
import styled from "styled-components";
import {PortfolioButton} from "./Header";

const RoomButton = styled(PortfolioButton)`
  padding: 1em;
  margin: 1em;
  width: 200px;
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
    // const anyOn = JSON.stringify(result.data['any_on'])

    const livingRoom = JSON.stringify(result.data['1']['state']['any_on'])
    const bathroom = JSON.stringify(result.data['2']['state']['any_on'])
    const kitchen = JSON.stringify(result.data['3']['state']['any_on'])
    const closet = JSON.stringify(result.data['8']['state']['any_on'])

    return (
        <div>
            <li>Living room = {livingRoom}</li>
            <li>Bathroom = {bathroom}</li>
            <li>Kitchen = {kitchen}</li>
            <li>Closet = {closet}</li>


          {/*<RoomButton>Lights are {anyOn === 'true' ? 'on' : 'off'}</RoomButton>*/}
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
                <Light></Light>
                <ChromePicker
                    color={ this.state.background }
                    onChangeComplete={ this.handleChange }
                />

            <p>{this.state.background}</p>
            </div>
        );
    }
}
