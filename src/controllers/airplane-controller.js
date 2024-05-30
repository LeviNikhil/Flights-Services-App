const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

/*
 * POST : /airplanes
 * req-body {modelNumber:'airbus', capacity:200}
 */
async function createAirplane(req, res) {
  try {
    console.log("Inside Controller")
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res.status(StatusCodes.ACCEPTED).json({
      success: true,
      message: "Airplane created successfully",
      error: {},
      data: airplane,
    });
  }
  catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something Went wrong when creating Airplane",
      error: error,
      data: {},
    });
  }
}

module.exports = {
  createAirplane,
};
