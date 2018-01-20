var movies=require('./movieData');

exports.getAllMovies=function(req,res){
  return res.json(movies);
}
