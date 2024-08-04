class CallService {
    private diplomacyAndStrifeAPIRoot = 'https://diplomacyandstrifeapi.com/api/';

    public async makeCall(endpoint: string) {
        const res = await UrlFetchApp.fetch(this.diplomacyAndStrifeAPIRoot + endpoint)

        const resJSON = JSON.parse(res.getContentText());

        if (!resJSON)
            throw new Error(`GraphQLService: Recieved no data from API call, ${JSON.stringify(resJSON)}`);

        return resJSON;
    }

}

export default new CallService();