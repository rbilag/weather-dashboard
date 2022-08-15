/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DataGrid from "./DataGrid";
import background from "../../assets/background.jpg";

export default {
    title: "DataGrid",
    component: DataGrid,
    decorators: [
        (story) => (
            <div
                style={{
                    maxWidth: "68rem",
                    backgroundImage: `url(${background})`,
                    backgroundPosition: "0% 100% ",
                }}
            >
                {story()}
            </div>
        ),
    ],
} as ComponentMeta<typeof DataGrid>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DataGrid> = (args) => (
    <DataGrid {...args} />
);
const baseData = {
    name: "Madrid",
    weather: {
        iconId: 201,
        desc: "thunderstorm",
    },
    humidity: 74,
    windSpeed: 50,
};
export const Freezing = Template.bind({});
Freezing.args = {
    data: {
        ...baseData,
        temp: -15,
    },
};
export const Cold = Template.bind({});
Cold.args = {
    data: {
        ...baseData,
        temp: 5,
    },
};
export const Cool = Template.bind({});
Cool.args = {
    data: {
        ...baseData,
        temp: 13,
    },
};
export const Normal = Template.bind({});
Normal.args = {
    data: {
        ...baseData,
        temp: 23,
    },
};
export const Warm = Template.bind({});
Warm.args = {
    data: {
        ...baseData,
        temp: 30,
    },
};
export const Hot = Template.bind({});
Hot.args = {
    data: {
        ...baseData,
        temp: 43,
    },
};
