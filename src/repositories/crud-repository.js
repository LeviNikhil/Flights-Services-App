const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  
  

  async create(data) {
      const response = await this.model.create(data);
      return response;
   
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in Crude Repo : DESTROY");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in Crude Repo : GET");
      throw error;
    }
  }

  async get() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in Crude Repo : GETALL");
      throw error;
    }
  }

  async update(id, data) {
    //data -> {}
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in Crude Repo : UPDATE");
      throw error;
    }
  }
}

module.exports = CrudRepository;
