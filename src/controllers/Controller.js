
export default class BaseController {
    constructor(manager) {
        this.manager = manager
    }


    getObjects = async (req, res) => {

        try {
            const result = await this.manager.get();
            if (!result) return res.sendNotFound();
            res.sendSuccessWithPayload(result);
        } catch (error) {
            res.sendInternalError(error);
        }

    }

    // Search by ID
    getObjectById = async (req, res) => {
        const { id } = req.params;
        try {
            const result = await this.manager.getById({ _id: id })
            if (!result) return res.sendNotFound();
            res.sendSuccessWithPayload(result)
        } catch (error) {
            res.sendInternalError(error);
        }
    }

    //search by custom param
    getObjectBy = async (req, res) => {
        const { attribute, value } = req.params;
        const query = {};
        query[attribute] = value;
        try {
            const result = await this.manager.getBy(query);
            if(result.length === 0) return res.sendSuccess("Sorry, there are no carts with those specifications.")
            res.sendSuccessWithPayload(result);
        } catch (error) {
            res.sendInternalError(error);
        }
    }

    //Object Update
    updateObject = async (req, res) => {
        const { id } = req.params;
        try {
            const result = await this.manager.update(id, req.body)
            if(!result) return res.sendNotFound()
            res.sendSuccess("Updated");
        } catch (error) {
            res.sendInternalError(error);
        }
    }

    deleteObject = async (req, res) => {
        const {id} = req.params;
        try {
            const result = await this.manager.delete(id)
            if(!result) return res.sendNotFound()
            res.sendSuccess("Deleted");
        } catch (error) {
            res.sendInternalError(error);
        }
        
    }

}