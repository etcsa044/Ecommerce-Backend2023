

export default class BaseManager {
    constructor(model) {
        this.model = model
    }

    get = () => this.model.find().lean();

    getById = id => this.model.findById(id).lean();

    getBy = param => this.model.findOne(param).lean();
    
    create = (object) => this.model.create(object);

    update = (id, object) => this.model.findByIdAndUpdate(id, {$set: object} );

    delete = (param) => this.model.findByIdAndDelete(param);
};