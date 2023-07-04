

export default class BaseController {
    constructor(manager) {
        this.manager = manager
    }

    getObjects = async (req, res) => {
        const result = await this.manager.get();
        res.sendSuccessWithPayload(result);
    }

}