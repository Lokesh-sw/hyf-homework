-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES("create a cool function", "javascript", "2022-8-22 17:19:16", "2022-8-22 17:20:16", "2022-8-25 22:00:00", 3, 11 
);


-- Change the title of a task

UPDATE
    task
SET
    title = "modify function"
WHERE
    id = 36;
    
    
    -- Change a task due date
    
UPDATE
    task
SET
    due_date = "2022-8-27 12:00:00"
WHERE
    id = 36;
    
    
    
    -- Change a task status
    
UPDATE
    task
SET
    status_id = 2
WHERE
    id = 36;

-- Mark a task as complete

UPDATE
    task
SET
    status_id = 3
WHERE
    id = 36;
    
    
    -- Delete a task
    
DELETE
FROM
    task
WHERE
    id = 36;
    
    