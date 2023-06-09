export type userInfos = {
    id: number,
    keyData: keyData
    todayScore: number
    userInfos: userInfo
}

type userInfo = {
    age: number
    firstName: string
    lastName: string
}

export type keyData = {
    calorieCount: number
    carbohydrateCount: number
    lipidCount: number
    proteinCount: number
}