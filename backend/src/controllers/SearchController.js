const Dev = require('../models/Devs');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
  async index(req,res){
    const { latitude , longitude , techs } = req.query;
    console.log(techs);
    const techsArray = parseStringAsArray(techs)
    // buscar todos os devs numa regiao de 10km
    //filtrando por tecnologias
    // DRY Don't repeat yourself

    const devs = await Dev.find({
      techs:{
        $in:techsArray,// deves que trabalham com aquelas tecnologias
      },
      location:{
        $near:{
          $geometry:{
            type: 'Point',
            coordinates: [longitude,latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({devs});
  }
}