export type userSessionsLength = {
    userId: number,
    sessions: session[]
}

type session = {
    day: number,
    sessionLength: number
}