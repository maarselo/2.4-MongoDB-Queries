# 🍃 2.4-MongoDB-Queries

This project contains MongoDB query exercises based on the **Restaurants** dataset.  
The dataset is provided in a `.json` file inside the `schema` folder, which must be imported into a MongoDB collection named `restaurants`.  

The goal is to practice querying document-oriented databases using MongoDB.

---

## 📄 Description - Exercise Statement
This project is a collection of MongoDB query exercises designed to practice real-world database operations.  

We work with a dataset of **Restaurants in New York City**, and the exercises focus on retrieving and filtering information using MongoDB queries.

Queries are provided in a `.json` file inside the `queries` folder. Each query can be opened and executed directly in a MongoDB GUI or shell.

---

## 💁‍♂️ Queries

We work with a single collection:  

`restaurants`  

The queries to solve include:

1. Show all documents in the `restaurants` collection.  
2. Show `restaurant_id`, `name`, `borough`, and `cuisine` for all documents.  
3. Show `restaurant_id`, `name`, `borough`, and `cuisine`, but exclude the `_id` field.  
4. Show `restaurant_id`, `name`, `borough`, and `zipcode`, but exclude the `_id` field.  
5. Show all restaurants located in the Bronx.  
6. Show the first 5 restaurants located in the Bronx.  
7. Show the next 5 restaurants after skipping the first 5 in the Bronx.  
8. Find restaurants with a score higher than 90.  
9. Find restaurants with a score greater than 80 but less than 100.  
10. Find restaurants with a latitude value less than -95.754168.  
11. Find restaurants that do not prepare any cuisine of "American", have a score greater than 70, and longitude less than -65.754168.  
12. Same as above but without using the `$and` operator.  
13. Find restaurants that do not prepare any cuisine of "American", achieved a grade "A", and are not located in Brooklyn. Display results ordered by cuisine descending.  
14. Find `restaurant_id`, `name`, `borough`, and `cuisine` for restaurants where the name starts with "Wil".  
15. Find `restaurant_id`, `name`, `borough`, and `cuisine` for restaurants where the name ends with "ces".  
16. Find `restaurant_id`, `name`, `borough`, and `cuisine` for restaurants where the name contains "Reg".  
17. Find restaurants located in the Bronx that prepare either American or Chinese dishes.  
18. Find `restaurant_id`, `name`, `borough`, and `cuisine` for restaurants located in Staten Island, Queens, Bronx, or Brooklyn.  
19. Find `restaurant_id`, `name`, `borough`, and `cuisine` for restaurants not located in Staten Island, Queens, Bronx, or Brooklyn.  
20. Find `restaurant_id`, `name`, `borough`, and `cuisine` for restaurants with a grade score not greater than 10.  
21. Find `restaurant_id`, `name`, `borough`, and `cuisine` for restaurants that prepare seafood, except "American" and "Chinese", or where the name starts with "Wil".  
22. Find `restaurant_id`, `name`, and `grades` for restaurants with grade "A" and score 11 on date ISODate `"2014-08-11T00:00:00Z"`.  
23. Find `restaurant_id`, `name`, and `grades` for restaurants where the 2nd element in the grades array contains grade "A" and score 9 on ISODate `"2014-08-11T00:00:00Z"`.  
24. Find `restaurant_id`, `name`, address, and geographic location for restaurants where the second element of the `coord` array is between 42 and 52.  
25. Sort restaurants by name ascending, showing all fields.  
26. Sort restaurants by name descending, showing all fields.  
27. Sort restaurants by cuisine ascending and borough descending.  
28. Find all addresses that do not contain a street field.  
29. Select all documents in the restaurants collection where the coord field contains a Double value.  
30. Select `restaurant_id`, `name`, and `grades` for restaurants where the score is divisible by 7.  
31. Find `name`, `borough`, longitude, latitude, and `cuisine` for restaurants where the name contains "mon".  
32. Find `name`, `borough`, longitude, latitude, and `cuisine` for restaurants where the name starts with "Mad".  

---

## 💻 Technologies Used
- MongoDB  
- MongoDB Compass  
- Studio 3T  

---

## 📋 Requirements
Before running this project, make sure you have:

- MongoDB Server installed and running (as a service or manually)  
- A MongoDB GUI installed (MongoDB Compass or Studio 3T recommended)  
- Extracted the provided `.json` dataset from the `schema` folder  
- Extracted the provided `.json` queries from the `queries` folder  

---

## 🛠️ Installation
1. Clone this repository.  
2. Start MongoDB .
3. Run the GUI.  
4. Create a database and a collection named `restaurants`.  
5. Import the provided `restaurants.json` file from the `schema` folder.  
6. Open the queries file from the `queries` folder.  
7. Run each query using MongoDB Compass, Studio 3T, or the Mongo shell.  

---

## ▶️ Running the Project
- Import the dataset.  
- Execute the queries one by one.  
- Review results in your MongoDB GUI.  

---

## 🌐 Deployment
No deployments required. The project runs locally with MongoDB.  

---

## 🤝 Contributions
Suggestions to improve queries or alternative query designs are welcome.  
Feel free to propose additional queries for practice.  

---

## 🙏 **Thank you for reviewing this project!** 🚀
