export interface PageInfo {
    PageSize: number;
    PageIndex: number;
    TotalRecord: number;
}

export interface User {
    ID: string;
    UserName: string;
    NickName?: string;
    Password?: string;
    Sex?: string;
    Age?: number;
}


export interface Weekplan {
    ID: string;
    TaskName: string;
    AcceptanceCriteria: string;
    User: User;
    PlanResourcePercent: number;
    ResourcePercent: number;
    PlanPercentComplete: number;
    PercentComplete: number;
    Note?: string;
    UnCompleteDeclare: string;
    Measure: string;
    PlanProgress?: number;
    Progress?: number;
    StartDate: string;
    FinishDate: string;
}
