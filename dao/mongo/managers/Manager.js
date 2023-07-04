

export default class BaseManager {
    constructor(model) {
        this.model = model
    }

    get = () => this.model.find().lean();

    getById = (id) =>  this.model.findBy(id) ;
    
    getBy = (param) => { this.model.findOne(param) };
    create = (object) => { this.model.create(object) };
    update = (param, object) => { this.model.findOneAndUpdate({param},{object} )};
    delete = (param) => { this.model.findOneAndDelete({param})};
};