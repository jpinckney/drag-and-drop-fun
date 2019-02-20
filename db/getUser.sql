select * from coordinators
where username ilike $1 and 
password = $2