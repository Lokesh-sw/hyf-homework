-- Find out how many tasks are in the task table
SELECT COUNT(*)
from task;

-- Find out how many tasks in the task table do not have a valid due date
SELECT count(*)
FROM task WHERE `due_date` IS NULL;

-- Find all the tasks that are marked as done
SELECT *
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name LIKE "Done"; 


-- Find all the tasks that are not marked as done
SELECT *
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name != "Done"; 

-- Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
order by created DESC;

-- Get the single most recently created task
SELECT *
FROM task
order by created DESC
limit 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
WHERE title LIKE "%database%" OR description LIKE "%database%";

-- Get the title and status (as text) of all tasks
SELECT 
title, name
FROM task
JOIN 
status
ON task.status_id = status.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT count(task.title) AS COUNT,
status.name
FROM
task
INNER JOIN
status
ON status.id = task.status_id
GROUP BY name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT count(task.title) AS count,
  status.name 
FROM 
  task 
  INNER JOIN status ON task.status_id = status.id 
GROUP BY 
  status.name 
ORDER BY 
  COUNT(task.title) DESC