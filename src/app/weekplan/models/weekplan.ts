export interface PageInfo {
    pageSize: number;
    pageIndex: number;
    totalRecord: number;
}

export interface User {
    id: string;
    userName: string;
    nickName?: string;
    password?: string;
    sex?: string;
    age?: number;
}


export interface Weekplan {
    id: string;
    taskName: string;
    acceptanceCriteria?: string;
    userID: string;
    planResourcePercent: number;
    resourcePercent: number;
    planPercentComplete: number;
    percentComplete: number;
    note?: string;
    unCompleteDeclare?: string;
    measure?: string;
    planProgress?: number;
    progress?: number;
    startDate: string;
    finishDate: string;
}
