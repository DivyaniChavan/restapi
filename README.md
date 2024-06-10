��#   r e s t a p i 
 
 Documentation RESTful API

API Documentation:
GET /tasks
Description: Retrieve a list of all tasks.
Request: GET /tasks
Response:
[ { "id": 1, "title": "Task 1", "description": "This is Task 1" }, { "id": 2, "title": "Task 2", "description": " This is Task 2" }] 

GET /tasks/:id
Description: Retrieve a specific task by ID.
Request: GET /tasks/1
Response:
{ "id": 1, "title": "Task 1", "description": " This is Task 1" } 

POST /tasks
Description: Create a new task.
Request:
{ "title": "New Task", "description": "Description of New Task" } 
Response:
{ "id": 3, "title": "New Task", "description": "Description of New Task" } 

PUT /tasks/:id
Description: Update an existing task by ID.
 Request: PUT /tasks/1
{ "title": "Updated Task 1", "description": "Updated description of Task 1" } 
Response:
{ "id": 1, "title": "Updated Task 1", "description": "Updated description of Task 1" } 

DELETE /tasks/:id
Description: Delete a task by ID.
Request: DELETE /tasks/1
Response: Status code 204 (No Content)
