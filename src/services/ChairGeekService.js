export default class ChairGeekService {
    static myInstance = null;

    static getInstance() {
        if(ChairGeekService.myInstance == null) {
            ChairGeekService.myInstance = new ChairGeekService();
        }
        return this.myInstance;
    }

    findAllTables(fid, callback) {
        fetch(`https://9dtxykqj77.execute-api.us-east-1.amazonaws.com/beta_floors_api/floors/${fid}/tables`)
            .then(response => response.json())
            .then(callback)
    }

    findFloorDetail(fid, callback) {
        fetch(`https://9dtxykqj77.execute-api.us-east-1.amazonaws.com/beta_floors_api/floors/${fid}`)
            .then(response => response.json())
            .then(callback)
    }

}