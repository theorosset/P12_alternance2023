import { userPerformance } from "../models/userPerformance"
import { userInfos } from "../models/userInfos"

export default class FormatData {
    // public formatedData = [] as any[]
    public userPerformance = {} as userPerformance
    public userInfo = {} as userInfos
    // private userSession = {}

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

                delete response.kind;
                delete response.data;

                response.performance = objectValue;
                this.userPerformance = response
            }

            if (response.userInfos) {
                this.userInfo = response
            }

        });

        // if(sessions) {

        //     sessions.sort((a: any, b: any) => {
        //         const dateA = new Date(a.day);
        //         const dateB = new Date(b.day);
        //         return dateA.getTime() - dateB.getTime();
        //       });

        // }
        // this.formatedData = [this.userPerformance, this.userInfo]
        // return this.formatedData as any
    }
}
