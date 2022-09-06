-- Get all meals
SELECT 
* 
FROM Meal;

-- Add a new meal
INSERT INTO 
     `Meal` (`id`, `title`, `description`, `location`, `when`, `max_reservation`, `price`, `created_date`)
 VALUES
     (1, "lasagne", "italian", "rome", "2022-12-31", 10, 120, "2022-09-4");

-- Get a meal with any id, fx 1
SELECT * 
FROM Meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET title = "chicken"
WHERE id = 1;

-- Delete a meal with any id, fx 1

DELETE FROM Meal
WHERE id = 3;

-- Get all reservations
SELECT * 
FROM reservation;

-- Add a new reservation
INSERT INTO
     `reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
 VALUES
     (2, 1, "2022-09-9", "54323455", "Lokesh", "lokesh@mail.com");

-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET contact_name ="John"
WHERE id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id =1;

-- Get all reviews
SELECT *
FROM Review;

-- Add a new review
INSERT INTO 
     `Review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
 VALUES
     ("Good", "nice_food", 1, 5, "2022-09-9");

-- Get a review with any id, fx 1
SELECT * 
FROM Review 
WHERE id =1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Review
SET title ="Great place"
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE FROM
     Review
 WHERE
     id = 2;


-- add adittional meal
INSERT INTO Meal (
   `id`, `title`, `description`, `location`, 
   `when`, `max_reservation`, `price`, 
   `created_date`
 ) 
 VALUES 
   (
     2, 'sahi paneer', 'indian', 
     'copenhagen', '2022-09-9 10:00:00', 
     4, 100, '2022-03-22'
   );

   INSERT INTO Meal (
   `id`, `title`, `description`, `location`, 
   `when`, `max_reservation`, `price`, 
   `created_date`
 ) 
 VALUES 
   (
     3, 'dahi bada', 'indian', 
     'copenahgen', '2022-09-9 10:00:00', 
     6, 60, '2022-09-9'
   );


-- Get meals that has a price smaller than a specific price fx 90
SELECT
    * 
FROM
    `Meal`
WHERE
    price < 90;


SELECT
    sums.reserved, Meal.*
FROM
    Meal
    JOIN (SELECT SUM(number_of_guests) as reserved, meal_id
     FROM reservation
          GROUP BY meal_id) as sums ON meal_id = sums.meal_id
WHERE
    Meal.max_reservation < sums.reserved;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT 
    *
FROM
    `Meal`
WHERE
    Meal.title LIKE '%dahi%';

-- Get meals that has been created between two dates
SELECT 
    *
FROM
    `Meal`
WHERE
    '2021.09.09' < Meal.created_date AND Meal.created_date < '2022.09.10';

-- Get only specific number of meals fx return only 5 meals
SELECT 
    *
FROM
    `Meal`
LIMIT
    5;
    
-- Get the meals that have good reviews
SELECT 
    *
FROM
    `Meal`
    LEFT JOIN `Review` ON Review.Meal_id = Meal.id
WHERE
    Review.stars > 3;
    
-- Get reservations for a specific meal sorted by created_date

SELECT 
Meal.description, reservation.created_date 
AS 
reservation_Created_date
FROM Meal
JOIN reservation 
ON Meal.id = reservation.meal_id
where meal_id=3
ORDER BY 
reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews

SELECT 
Review.meal_id, Meal.title, Meal.description,
Round(AVG(stars),0)
FROM Meal
JOIN  Review ON Meal.id=Review.meal_id
GROUP BY Meal.id
ORDER BY AVG(Review.stars) ASC;