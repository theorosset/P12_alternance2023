import { userPerformance } from '../models/userPerformance'
import { userInfos } from '../models/userInfos'
import { userSessionsKiloAndCalories } from '../models/userSessionKiloAndCalories'
import { userSessionsLength } from '../models/userSessionLength'
export default class FormatData {
  public userPerformance = {} as userPerformance
  public userInfo = {} as userInfos
  public userSessionsLength = {} as userSessionsLength
  public userSessionsKiloAndCalories = {} as userSessionsKiloAndCalories

  constructor(responsesData: any) {
    if (responsesData.kind) {
      //sort data if data receive are not in good order
      responsesData.data.sort((a: any, b: any) => a.kind - b.kind)

      //after sort data can set value of kind with index
      const objectValue = responsesData.data.map(
        (element: any, index: number) => {
          if (element.kind === index + 1) {
            element.kind = responsesData.kind[index + 1]
          }
          return element
        },
      )
      //change name of key
      delete responsesData.kind
      delete responsesData.data

      responsesData.performance = objectValue
      this.userPerformance = responsesData
    }

    // get userInfos
    if (responsesData.userInfos) {
      this.userInfo = responsesData
    }

    //get session
    if (responsesData.sessions) {

      responsesData.sessions.forEach((session: any) => {
        if (session.sessionLength) {
          return (this.userSessionsLength = responsesData)
        } else if (session.kilogram) {
          return (this.userSessionsKiloAndCalories = responsesData)
        }
      })
    }
  }
}
