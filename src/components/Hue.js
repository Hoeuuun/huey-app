import React, {useEffect, useState} from 'react';
import { ChromePicker } from 'react-color';



const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }
        fetchData();
    }, [url]);

    return data;
};

const Light = () => {
    const URL = 'http://localhost:5000/api/rooms/8/state/';
    const result = useFetch(URL);

    return (
        <div>
            <h1>{JSON.stringify(result)}</h1>
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
