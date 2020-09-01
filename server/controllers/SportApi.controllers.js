const Sport = require('../models/SportApi.models');

class SportController{
    getAll(req, res){
        Sport.find({}).sort("-date").exec()
            .then(sports => res.json(sports))
            .catch(err => res.json(err));
    }

    // create(req, res){
    //     const newWall = new Wall(req.body);
    //     newWall.save()
    //         .then(() => res.json({msg: "wall added"}))
    //         .catch(err => res.json(err));
    // }
    // getOne(req, res){
    //     Wall.findOne({_id: req.params._id})
    //         .then(post => res.json(post))
    //         .catch(err => res.json(err));
    // }
    // delete(req, res){
    //     Wall.findOneAndDelete({_id: req.params._id})
    //         .then(() => res.json({msg: "Deleted "}))
    //         .catch(err => res.json(err));
    // }
    // update(req, res){
    //     Wall.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true, context: 'query'})
    //         .then( () => res.json({msg: "Updated "}))
    //         .catch(err => res.json(err));
    // }
}

module.exports = new SportController();