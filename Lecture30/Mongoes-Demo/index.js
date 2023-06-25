const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
// .then(()=> console.log("Connection Open"))
// .catch(()=> console.log("error connecting with the database"))

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name bhu dalo!"]
    },
    rating: {type:Number,
        min :1,
        max : [10, "Ess se jyada nahi meri jaan"]
    },
    year: {
        type :Number,
        default : 0
    },
    isWathched: Boolean

})

Movie =mongoose.model("Movie",movieSchema);
// Movie.create([{name: "Avengers1", year: 2015, rating: 10, isWathched : false},
// {name: "Avengers2", year: 2016, rating: 10, isWathched : false},
// {name: "Avengers3", year: 2017, rating: 10, isWathched : false}])
// .then(()=> console.log("Movie saved successfully"))




// const Movie = mongoose.model("Movie", movieSchema);
// const Avengers = new Movie({name: "Avengers", year: 2015, rating: 10, isWathched : false});

// Avengers.save()
// .then(()=> console.log("Movie saved successfully"))
// .catch(()=> console.log("Movie save nai hui hai "))


// console.log(Avengers)


// find movie by findById
// async function print(){
//     const movieName  = await Movie.findById("6497caf2ef1de06d8b033a97");
//     console.log(movieName)


// }

async function print(){
    const movieName = await Movie.insertMany([{name: "Avengers-1", rating: 1, isWathched : false},
     {name: "Avengers-2", year: 2016, rating: 10, isWathched : false},
     {name: "Avengers-3", year: 2017, rating: 10, isWathched : false}]);

    console.log(movieName)
}
print()
