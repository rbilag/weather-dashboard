import { COLORS } from "../../data/constants";

export default (temp: number) => {
    if (temp <= -10) return COLORS.FREEZING;
    if (temp >= -10 && temp <= 8) return COLORS.COLD;
    if (temp >= 8 && temp <= 15) return COLORS.COOL;
    if (temp >= 15 && temp <= 28) return COLORS.NORMAL;
    if (temp >= 28 && temp <= 40) return COLORS.WARM;
    return COLORS.HOT;
};
