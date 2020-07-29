import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {InnerText, PortfolioButton} from "./Header";
import {View} from "react-native-web";
import {Nav, Navbar} from "react-bootstrap";
import {BrandText} from "./NavBar";
import Switch from "@material-ui/core/Switch";
import {BASE_URL, hueyFetch} from "../client";

const RoomButton = styled(PortfolioButton)`
  padding: 1em;
  margin: 1em;
  width: 250px;
  height: 150px;
`;


const useFetch = (url) => {
    const [data, setData] = useState(true);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setData(await hueyFetch(url));
            } catch (error) {
                setError(error);
            }
        }

        fetchData();
    }, [url]);

    return {data, error, isLoading};
};

export function Light(props) {
    const id = props.id;
    const isGroup = props.isGroup;
    const url_infix = isGroup ? 'rooms' : 'lights';
    const data = useFetch(`${BASE_URL}/api/${url_infix}/${id}/`).data;

    const [jsonData, setJsonData] = useState(data)
    console.log(JSON.stringify(jsonData))
    const isOn = jsonData instanceof Object && jsonData['state'] ? (isGroup ? jsonData['state']['any_on'] : jsonData['state']['on']) : false;


    const onSwitchToggle = function () {
        const action_or_state = isGroup ? 'action':'state';
        hueyFetch(`${BASE_URL}/api/${url_infix}/${id}/${action_or_state}/`,
            'PUT',
            {
                on: !isOn
            }).then(() => {
            // Group turned on.  Now we need to update state.
            hueyFetch(`${BASE_URL}/api/${url_infix}/${id}/`).then(json => {
                setJsonData(json);
            })
        });
    }

    if (isGroup) {

        const lightComponents = [];

        for (var light_id in data['lights']) {
            lightComponents.push(<Light id={data['lights'][light_id]} isGroup={false}></Light>);
        }

        return (<div>{data['name']} <Switch size="small" checked={isOn} onChange={onSwitchToggle}/><br/>{lightComponents}</div>)
    } else {
        return (<div>Light #{id} <Switch size="small" checked={isOn} onChange={onSwitchToggle}/></div>)
    }
}


export function HueApp() {
    const URL = `${BASE_URL}/api/rooms/`;
    const result = useFetch(URL);

    const groupComponents = []

    for (const [key, value] of Object.entries(result.data)) {
        groupComponents.push(<Light id={key} data={value} isGroup={true}></Light>)
    }

    return (
        <div>{groupComponents}</div>
    );
}
