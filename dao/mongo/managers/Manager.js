

export default class BaseManager {
    constructor(model) {
        this.model = model
    }

    get = () => this.model.find().lean();

    getById = id => this.model.findById(id);

    getBy = param => this.model.find(param).lean();
    
    create = (object) => this.model.create(object);

    update = (id, object) => this.model.findByIdAndUpdate({ _id:id }, object );

    delete = (param) => this.model.findByIdAndDelete(param);
};