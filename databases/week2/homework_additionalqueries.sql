-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT 
  task.* 
FROM 
  task 
  JOIN user_task ON task.id = user_task.task_id 
  JOIN user ON user_task.user_id = user.id 
WHERE 
  user.email LIKE "%@spotify.com";
    
 
 -- Get all the tasks for 'Donald Duck' with status 'Not started'
 
SELECT
  task.*
FROM
  task
  JOIN user_task ON task.id = user_task.task_id 
  JOIN user ON user_task.user_id = user.id 
  JOIN status ON status.id = task.status_id 
where
  user.name = 'Donald Duck'
  AND status.name = 'Not started';
    

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT
    user.name,
    task.title,
    task.created
FROM
    task
JOIN
    user_task ON 
    task.id = user_task.task_id
JOIN
user ON user.id = user_task.user_id

WHERE
    user.name LIKE 'Maryrose Meadows' AND MONTH(created) = 09;
    
 
 -- Find how many tasks where created in each month, e.g. how many tasks were created in october, 
 -- how many tasks were created in november, etc. (hint: use group by)
 
SELECT
  monthname(task.created) as month, COUNT(task.id) as task_total
FROM
  task
GROUP BY month;

    
    