import React from "react";
import {InnerText} from "./Header";
import {PortfolioButton} from "./Header";
import styled from "styled-components";

const Labels = styled(InnerText)`
  padding: 1em;
  margin: 1em;
`;

export function Rooms() {
    return (
        <div>
            {/*<Labels>Living Room</Labels>*/}
            {/*<Labels>Bedroom</Labels>*/}
            <PortfolioButton href="#page-portfolio">
                Bathroom
            </PortfolioButton>
            <PortfolioButton href="#page-portfolio">
                Bedroom
            </PortfolioButton>
            <PortfolioButton href="#page-portfolio">
                Closet
            </PortfolioButton>
            <PortfolioButton href="#page-portfolio">
                Kitchen
            </PortfolioButton>
            <PortfolioButton href="#page-portfolio">
                Living room
            </PortfolioButton>
        </div>
    );
}