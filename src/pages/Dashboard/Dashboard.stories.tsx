import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dashboard from "./Dashboard";
import handlers from "../../mocks/handlers";

export default {
    title: "Dashboard",
    component: Dashboard,
} as ComponentMeta<typeof Dashboard>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Dashboard> = () => <Dashboard />;

export const Default = Template.bind({});
Default.parameters = {
    msw: {
        handlers,
    },
};
