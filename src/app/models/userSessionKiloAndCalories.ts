export type userSessionsKiloAndCalories = {
    userId: number
    sessions: session[]
}

type session = {
    day: Date,
    kilogram: number,
    calories: number,
    dayNumber: number
}