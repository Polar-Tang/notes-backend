A relational database is the most common type of database. It uses a schema, a template, to dictate the data structure stored in the database.

|**Feature**|**Description**|
|---|---|
|`Concurrency`|A real-world application might have multiple users interacting with it simultaneously. A DBMS makes sure that these concurrent interactions succeed without corrupting or losing any data.|
|`Consistency`|With so many concurrent interactions, the DBMS needs to ensure that the data remains consistent and valid throughout the database.|
|`Security`|DBMS provides fine-grained security controls through user authentication and permissions. This will prevent unauthorized viewing or editing of sensitive data.|
|`Reliability`|It is easy to backup databases and rolls them back to a previous state in case of data loss or a breach.|
|`Structured Query Language`|SQL simplifies user interaction with the database with an intuitive syntax supporting various operations.|
![[Pasted image 20241109100001.png]]
Tier I is the application web, the GUI interface. Second tier are the api calls, the requests, and finally the query is processed by the DMBS