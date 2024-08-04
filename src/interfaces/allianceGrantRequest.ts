export interface AllianceGrantRequest {
    grantId: number,
    MemberId: number,
    MemberNationName: string,
    CashAmount: number,
    TechAmount: number,
    MineralsAmount: number,
    UraniumAmount: number,
    RareMetalsAmount: number,
    FuelAmount: number,
    requestText: string,
    RequestedDate: Date
}