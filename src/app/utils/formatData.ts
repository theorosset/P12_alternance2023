import { userPerformance } from "../models/userPerformance"
import { userInfos } from "../models/userInfos"

export default class FormatData {
    public userPerformance = {} as userPerformance
    public userInfo = {} as userInfos
    public userSessionsLength = {}
    public userSessionsKiloAndCalories = {} 

    constructor(responsesData: any) {

        responsesData.forEach((response: any) => {
            if (response.kind) {
                //sort data if data receive are not in good order
                response.data.sort((a: any, b: any) => a.kind - b.kind);

                //after sort data can set value of kind with index
                const objectValue = response.data.map((element: any, index: number) => {
                    if (element.kind === index + 1) {
                        element.kind = response.kind[index + 1];
                    }
                    return element;
                });
                //change name of key
                delete response.kind;
                delete response.data;

                response.performance = objectValue;
                this.userPerformance = response
            }

            // get userInfos
            if (response.userInfos) {
                this.userInfo = response
            }

            //get session 
            if(response.sessions) {
              response.sessions.forEach((session: any) => {
                    if(session.sessionLength) {
                        return this.userSessionsLength = response
                    } else if (session.kilogram) {
                        return this.userSessionsKiloAndCalories = response
                    }
                })  
            }
        });

    }
}
