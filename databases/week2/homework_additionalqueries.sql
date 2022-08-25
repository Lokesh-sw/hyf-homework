-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT
    task.title, user.email
FROM
    task
JOIN
    user
WHERE
    user.email LIKE "%@spotify.com";
    
 
 -- Get all the tasks for 'Donald Duck' with status 'Not started'
 
 SELECT 
	task.title, task.status_id
 FROM
	task
 JOIN 
	user
WHERE 
	user.name LIKE "%Donald Duck%" AND task.status_id = 1;
    

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT
    task.title,
    task.created,
    user.name
FROM
    task
JOIN
    user
WHERE
    user.name = "Maryrose Meadows" AND month(created) = 9;
    
 
 -- Find how many tasks where created in each month, e.g. how many tasks were created in october, 
 -- how many tasks were created in november, etc. (hint: use group by)
 
SELECT
  month(task.created) as month, COUNT(task.id) as task_total
FROM
  task
GROUP BY month;

    
    