var mongoose=require('mongoose');


//  Genre Schema

var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  genre:{
    type: String,
    required:true
  },
  description:{
    type:String
  },
  author:{
    type: String,
    required:true
  },
  publisher:{
    type:String
  },
  pages:{
    type: String
  },
  create_date:{
    type: Date,
    default: Date.now
  }

});

var Book= module.exports = mongoose.model('Book',bookSchema);

// Get Books

module.exports.getBooks= function(callback, limit){
  Book.find(callback).limit(limit);
}
// get book by id
module.exports.getBookById= function(id,callback){
  Book.findById(id,callback);
}


// add books

module.exports.addBook= function(book,callback){
  Book.create(book,callback);
}
