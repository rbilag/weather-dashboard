import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import { COLORS } from "../../data/constants";

export default {
    title: "Card",
    component: Card,
    decorators: [
        (story) => (
            <div
                style={{
                    maxWidth: "45rem",
                    backgroundColor: `rgba(${COLORS.FREEZING.r}, ${COLORS.FREEZING.g}, ${COLORS.FREEZING.b}, 1)`,
                    padding: "2rem",
                }}
            >
                {story()}
            </div>
        ),
    ],
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading, react/function-component-definition
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "13\u00B0",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    text: "50 km/h",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    text: "thunderstorm",
};

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
    ...Default.args,
    icon: "wi wi-thermometer",
};

export const SmallWithIcon = Template.bind({});
SmallWithIcon.args = {
    ...Small.args,
    icon: "wi wi-wind-beaufort-9",
};

export const LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
    ...Large.args,
    icon: "wi wi-thunderstorm",
};
