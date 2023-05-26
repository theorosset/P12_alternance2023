import { userInfos } from "./userInfos";
import { userPerformance } from "./userPerformance";
import { userSessionsLength } from "./userSessionLength";
import { userSessionsKiloAndCalories } from "./userSessionKiloAndCalories";

export type formatedData = {
    userPerformance: userPerformance
    userInfo: userInfos
    userSessionsLength: userSessionsLength
    userSessionsKiloAndCalories: userSessionsKiloAndCalories
}