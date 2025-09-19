//1.Write a query to display all documents in the Restaurants collection.
db.restaurants.find({})

//2.Write a query to display the restaurant_id, name, borough, and cuisine for all documents in the Restaurants collection.
db.restaurants.find({}, {"restaurant_id" : 1 , "name" : 1, "borough" : 1, "cuisine" : 1})

//3.Write a query to display the restaurant_id, name, borough, and cuisine, but exclude the _id field for all documents in the Restaurants collection.
db.restaurants.find({}, {"_id" : 0, "restaurant_id" : 1 , "name" : 1, "borough" : 1, "cuisine" : 1})

//4.Write a query to display restaurant_id, name, borough, and zip code, but exclude the _id field for all documents in the Restaurants collection.
db.restaurants.find({}, {"_id" : 0, "address.zipcode" : 1, "borough" : 1, "name" : 1, "restaurant_id" : 1})

//5.Write a query to show all restaurants in the Bronx.
db.restaurants.find({"borough" : "Bronx"},    { "_id" : 0, "name" : 1, "borough" : 1})

//6.Write a query to show the top 5 restaurants in the Bronx.
db.restaurants.aggregate([ 
    {$match : {"borough" : "Bronx"}}, 
    {$limit : 5} 
])

//7.Write a query to show the next 5 restaurants after skipping the first 5 in the Bronx.
db.restaurants.aggregate([ 
    {$match : {"borough" : "Bronx"}} , 
    {$skip : 5}, {$limit : 5,}
])

//8.Write a query to find restaurants that have a score of more than 90.
db.restaurants.find({"grades.score" : { $gte : 90 } })

//9.Write a query to find restaurants that have a score of more than 80 but less than 100.
db.restaurants.aggregate([
    {$match : {"grades.score" : { $gte : 80, $lte : 100}}} , 
    {$project : {
        "_id" : 0, 
        "name" : 1, 
        "borough" : 1, 
        "cuisine" : 1, 
        "address" : 1, 
        "address" : 1, 
        "grades" : {
            $filter : {
                input : "$grades", 
                as : "grade", 
                cond : {
                    $and : [
                        {$gte : ["$$grade.score", 80]},
                         {$lte : ["$$grade.score", 100]} 
                    ]
                }
            }
         }
     }
    },
    {$match : {"grades.0" : {$exists : true}}}
])

//10.Write a query to find restaurants that are located at latitude values ​​less than -95.754168.
db.restaurants.find({"address.coord.0" : {$lt : -95.754168} })

//11.Write a MongoDB query to find restaurants that do not prepare any 'American' cuisine and have a rating greater than 70 and a longitude less than -65.754168.
db.restaurants.find({
    $and : [
        {"cuisine" : {$ne : "American"}},
        {"grades.score" : {$gt : 70}},
        {"address.coord.1" : {$lt : -65.754168}}
]})

//12.Write a query to find restaurants that do not serve any 'American' cuisine and have a score greater than 70 and are located at a longitude less than -65.754168. Note : Do this query without using the $and operator.
db.restaurants.aggregate([ 
    {$match : {
        "cuisine" : {$ne : "American"},
        "grades.score" : {$gt : 70},
        "address.coord.1" : {$lt : -65.754168}}}
])

//13.Write a query to find restaurants that do not serve any 'American' cuisine and received a grade point of 'A' that are not located in Brooklyn. The document should be displayed by cuisine in descending order.
db.restaurants.aggregate([
    {$match : {
            "cuisine" : {$ne : "American"},
            "grades.grade" : {$eq : "A"},
            "borough" : {$ne : "Brooklyn"}
        }
    },
    {$project : {
          _id : 0,
          name : 1,
          address : 1,
          borough : 1,
          cuisine : 1,
          restaurant_id : 1,
          grades : {
              $filter : {
                  input: "$grades",
                  as : "grade",
                  cond : {$eq : ["$$grade.grade", "A"]}
              }
          }
      }
    },
    {$sort : { "cuisine" : -1}}
])

//14.Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'Wil' as the first three letters in their name.
db.restaurants.find(
    {"name" : /^Wil/},
    {
        "_id" : 0,
        "restaurant_id" : 1,
        "name" : 1,
        "borough" : 1,
        "cuisine" : 1
    }
)

//15.Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'ces' as the last three letters in their name.
db.restaurants.aggregate(
    {$match : { "name" : {$regex : "ces$"}}},
    {$project : {
            "_id" : 0,
            "restaurant_id" : 1,
            "name" : 1,
            "borough" : 1,
            "cuisine" : 1
     }
    }
)

//16.Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'Reg' as three letters somewhere in their name.
db.restaurants.aggregate([
    {$match : {"name" : {$regex : "reg", $options: "i"}}
    },
    {$project : {
         "_id" : 0,
         "restaurant_id" : 1,
         "name" : 1,
         "borough" : 1,
         "cuisine" : 1   
     }
    }
])

//17.Type a query to find restaurants that belong to the Bronx and prepare any American or Chinese dish.
db.restaurants.find({
    "borough" : "Bronx",
    $or : [
        {"cuisine" : "American "},
        {"cuisine" : "Chinese"}
    ]
})

//18.Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that belong to Staten Island or Queens or Bronx or Brooklyn.
db.restaurants.aggregate([
    {$match : {"borough" : {$in : ["Staten Island", "Queens", "Brooklyn"]}}},
    {$project : {
        "_id" : 0,
        "restaurant_id" : 1,
        "name" : 1,
        "borough" : 1,
        "cuisine" : 1
    }}
])

//19.Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that are not in Staten Island or Queens or Bronx or Brooklyn.
db.restaurants.aggregate([
    {$match : {"borough" : {$nin : ["Staten Island", "Queens", "Brooklyn"]}}},
    {$project : {
        "_id" : 0,
        "restaurant_id" : 1,
        "name" : 1,
        "borough" : 1,
        "cuisine" : 1
    }}
])

//20.Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that achieve a score that is no more than 10.
db.restaurants.aggregate([
    {$match : {"grades.score" : {$lte : 10}}},
    {$project : {
        "_id" : 0,
        "name" : 1,
        "cuisine" : 1,
        "borough" : 1,
        "restaurant_id" : 1
     }
    }
])

//21.Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that prepare fish except 'American' and 'Chinese' or the restaurant name begins with the letters 'Wil'.
db.restaurants.find(
    {$or : [
        {"name" : /^Wil/i},
        {$and : [
            {"name" : /fish/i},
            {"cuisine" : {$nin : ["American ", "American", "Chinese"]}}
        ]}
    ]},
    {
        "_id" : 0,
        "restaurant_id" : 1,
        "name" : 1,
        "borough" : 1,
        "cuisine": 1,
    }
)

//22.Write a query to find the restaurant_id, name, and grades for those restaurants that achieve a grade of "A" and a score of 11 in study data ISODate "2014-08-11T00:00:00Z".
db.restaurants.aggregate([
    {$match : {
        "grades.grade" : {$eq : "A"},
        "grades.score" : {$eq : 11},
        "grades.date" : {$eq : ISODate("2014-08-11T00:00:00Z")}
    }},
    { $project : {
        "_id" : 0,
        "restaurant_id" : 1,
        "name" : 1,
        "grades" : {
            $filter : {
                input : "$grades",
                as : "grade",
                cond : {
                    $and : [
                        {$eq : ["$$grade.grade" , "A"]},
                        {$eq : ["$$grade.score" , 11]},
                        {$eq : ["$$grade.date" , ISODate("2014-08-11T00:00:00Z")]}
                    ]
                }
            }
        }
    }},
    {$match : { "grades.0" : { $exists : true}}}
])

//23.Write a query to find the restaurant_id, name, and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and marker 9 on an ISODate "2014-08-11T00:00:00Z".
db.restaurants.find(
    {$and : [
        {"grades.1.grade" : {$eq : "A"}},
        {"grades.1.score" : {$eq : 9}},
        {"grades.1.date" : {$eq : ISODate("2014-08-11T00:00:00Z")}}
    ]},
    {
        "_id": 0,
        "restaurant_id" : 1,
        "name" : 1,
        "grades" : 1
    }
)

//24.Write a query to find the restaurant_id, name, address, and geographic location for those restaurants where the second element of the array coord contains a value that is greater than 42 and up to 52.
db.restaurants.find(
    {$and : [
      {"address.coord.1" : {$gt : 42}},
      {"address.coord.1" : {$lte : 52}}
    ]},
    {
        "_id" : 0,
        "restaurant_id" : 1,
        "name" : 1,
        "address" : 1
    }
)

//25.Write a query to sort the restaurant names in ascending order along with all the columns.
db.restaurants.find({}).sort({"name" : 1}).collation({locale: "en", strength: 2})

//26.Write a query to sort the restaurant names in descending order along with all the columns.
db.restaurants.find({}).sort({"name" : -1}).collation({locale: "en", strength: 2})

//27.Write a query to sort the cuisine name in ascending order and by the same cuisine neighborhood. Descending order.
db.restaurants.find({}).sort({"cuisine": 1, "borough" : -1}).collation({locale: "en", strength :2})

//28.Write a query to find all addresses that do not contain the street.
db.restaurants.find({ "address.street" : {$exists : false}})

//29.Write a query that will select all documents in the restaurants collection where the value of the coord field is Double.
db.restaurants.find({ $and : [{"address.coord.0" : {$type : "double"}},{"address.coord.1" : {$type : "double"}}]})

//30.Write a query that will select the restaurant_id, name, and grade for those restaurants that return 0 as a remainder after dividing the score by 7.
db.restaurants.find(
    {"grades.score": { $mod : [7, 0]}},
    {
        "_id" : 0,
        "restaurant_id" : 1,
        "name" : 1,
        "grades" : 1 
    }
)

//31.Write a query to find the restaurant name, borough, longitude and altitude, and cuisine for those restaurants that contain 'mon' as three letters somewhere in their name.
db.restaurants.find(
    {"name": /mon/i},
    {
        "_id" : 0,
        "name" : 1,
        "borough" : 1,
        "address.coord" : 1,
        "cuisine" : 1,
    }
)

//32.Write a query to find the restaurant name, borough, longitude and latitude, and cuisine for those restaurants that contain 'Mad' as the first three letters of their name.
db.restaurants.find(
    {"name" : /^Mad/},
    {
        "_id" : 0,
        "name" : 1,
        "borough" : 1,
        "address.coord" : 1,
        "cuisine" : 1
    }
)
