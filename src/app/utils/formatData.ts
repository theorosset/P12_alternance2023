export default class FormatData {
    private formatedData = []
    private userPerformance = {}
    private userInfo = {}

    constructor(responseData: any) {
        // console.log(responseData)
        if (responseData.kind) {
            //sort data if data receive are not in good order
            responseData.data.sort((a: any, b: any) => a.kind - b.kind);

            //after sort data can set value of kind with index
            const objectValue = responseData.data.map((element: any, index: number) => {
                if (element.kind === index + 1) {
                    element.kind = responseData.kind[index + 1];
                }
                return element;
            });
      
          delete responseData.kind;
          delete responseData.data;
      
          responseData.performance = objectValue;
          this.userPerformance = responseData;
        }

        if(responseData.userInfos) {
           this.userInfo = responseData.userInfos
        }

        
      }

}
