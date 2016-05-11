var express = require("express");
var router = express.Router();

router.param("collection", function(req,res,next,collection){
    req.c = req.db.collection(collection);
    next();
});

router.get("/:collection", function(req, res, next){
  req.c.find().toArray(function(err, results){
    res.send(results);  
  });
});



module.exports = router;
