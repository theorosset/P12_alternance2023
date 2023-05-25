import { userPerformance } from "../models/userPerformance"
import { userInfos } from "../models/userInfos" 

export default class FormatData {
    public formatedData = [] as any[]
    // private userPerformance = {} as userPerformance
    // private userInfo = {} as userInfos
    // private userSession = {}

    constructor(responseData: userInfos | userPerformance | any) {
        const { kind, data, sessions, userInfos } = responseData
        console.log(responseData)
        if (kind) {
            //sort data if data receive are not in good order
            data.sort((a: any, b: any) => a.kind - b.kind);

            //after sort data can set value of kind with index
            const objectValue = data.map((element: any, index: number) => {
                if (element.kind === index + 1) {
                    element.kind = kind[index + 1];
                }
                return element;
            });
      
          delete responseData.kind;
          delete responseData.data;
      
          responseData.performance = objectValue;
          this.formatedData.push(responseData)
        //   return this.userPerformance as any
        }

        if(userInfos) {
           this.formatedData.push(responseData)
        }

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
