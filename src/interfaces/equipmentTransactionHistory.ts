export interface EquipmentTransactionHistory {
    TransactionId: number,
    Quantity: number,
    Quality: number,
    MessageTxt: string,
    TypeTxt: string,
    NationId: number,
    NationName: string,
    NationId2: number,
    NationName2: string,
    AllianceId: number,
    AllianceName: string,
    AllianceId2: number,
    AllianceName2: string,
    TimeStampTxt: Date,
    EquipmentType: string
}