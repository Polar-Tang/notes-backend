I was doing the SQLI labs and i after certain point i don't understand anything, if you don't want to do a scripty kiddie who always use SQLmap let's explore the basic things of SQL. 

-----
### What is SQL
SQL (Structure Query Language), also abbreviated as sequel, it's a popular laguage for comunicating with **relational database management systems (RDBMS)** like **MySQL**, **PostgreSQL**, **Oracle**, and **Microsoft SQL Server**, and these apply variations in SQL syntax, functions, and features. 
### How SQL works
It organizes data into tables, something like an Excel spreadsheet, so columns contains data, atributes  or types of data and each row represent and individual record or data point with a unique identifier for each row in a table. So we got a list of basketball players, and this is the *players* table:
![[Pasted image 20241107215546.png]]
#### Foreign keys
Now imagine we want one of the basketball players to be included in a table of teams. We can establish a relationship between data points in one table pointing to the primary key in another table, linking related data. So store the primary key 5 (Kevin duran) is storing in the team table as a foreign key.
![[Pasted image 20241107220012.png]]
By doing that, the players table have a unique key, but the teams player have many keys.

##### CRUD
So besides the classic CRUD (Crate Read Update Delete), also we could join the data.
##### SELECT columns FROM table
This query allow us to retrieve any specific identifier (identifier are columns and table names)
###### Select
This keyword is to grab anydata you want
###### From
From a table
##### Filter
THe filter keyword to retrieve the results we want to is **where**
###### Where
is used to include records that pass certain condition
##### Connect data
To join the data we use **LEFT JOIN** keyword
```sql
LEFT JOIN <Teams> ON <Players>.foreign_key = <Teams>.Primary_Key;
```
THis is connecting the player of the **players** team to the **teams** table, so the id from the player becomes a foreign key

Now apply all on this query:
```sql
SELECT Iname, team_id, ppg FROM Players
WHERE ppg > 20
LEFT JOIN Teams ON Players.team_id = Teams.id;
```
The query:

- Selects columns `Iname`, `team_id`, and `ppg` from the `Players` table.
- Uses **`LEFT JOIN`** to join rows from `Teams` based on the `team_id` (foreign key) in `Players` and `id` (primary key) in `Teams`.
- Filters for players with `ppg > 20`.
Thas foreign key explanation is a summary https://www.youtube.com/watch?v=zsjvFFKOm3c




