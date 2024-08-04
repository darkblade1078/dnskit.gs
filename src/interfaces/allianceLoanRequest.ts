export interface AllianceLoanRequest {
    LoanId: number,
    GiverId: number,
    ReciverId: number,
    ReciverName: string
    GiverName: string,        
    GiverType: number,
    ReciverType: number,
    LoanType: string,
    LoanResourceType: string,
    InitialAmount: number,
    UpfrontFee: number,
    InterestType: string,
    InterestRate: number,
    ForcedInterest: number,
    MinimumPayment: number,
    RequestedDate: Date,
    PaymentDuration: number,
    PaymentDurationType: string,
    RequestText: string
}