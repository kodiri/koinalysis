import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.div`
font-size: 1.9em;
`

const Bar = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 90px 75px 50px;
margin-bottom: 40px;
`

const ControlButtonElem = styled.div`
cursor: pointer;
${props => props.active && css`
text-shadow: 0px 0px 60px #03ff03;
`}
`

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name, active }) {
    return (
        <ControlButtonElem active={active}>
            {toProperCase(name)}
        </ControlButtonElem>
    )
}

export default function () {
    return (
        <Bar>
            <Logo>Welcome to Koinalysis </Logo>
            <div />
            <ControlButton active name="dashBoard" />
            <ControlButton name="settings" />
            <ControlButton name="about" />
        </Bar>
    )
}