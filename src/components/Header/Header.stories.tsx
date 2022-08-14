import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Header";
import { COLORS } from "../../data/constants";

export default {
    title: "Header",
    component: Header,
    decorators: [
        (story) => (
            <div
                style={{
                    backgroundColor: `rgba(${COLORS.FREEZING.r}, ${COLORS.FREEZING.g}, ${COLORS.FREEZING.b}, 1)`,
                }}
            >
                {story()}
            </div>
        ),
    ],
} as ComponentMeta<typeof Header>;

// eslint-disable-next-line react/jsx-props-no-spreading, react/function-component-definition
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    city: "Madrid",
};
