export interface GrantHistory {
    MemberId: number,
    MemberNationName: string,
    EditorId: number,
    EditorNationName: string,
    AllianceId: number,
    ApprovedDate: Date,
    CashAmount: number,
    TechAmount: number,
    MineralsAmount: number,
    UraniumAmount: number,
    RareMetalsAmount: number,
    FuelAmount: number,
    approvalText: string,
    requestText: string,
    RequestedDate: Date
}