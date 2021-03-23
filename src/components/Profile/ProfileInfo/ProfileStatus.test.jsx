// npm i react-test-renderer --save-dev
// 17.0.1
// "react": "^17.0.1",


import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the props)", () => {
        const component = create(<ProfileStatus status='Gurman'/>);
        const instance = component.getInstance();
        expect(instance.state.text).toBe('Gurman');
    });
});