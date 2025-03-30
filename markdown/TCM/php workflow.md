PHP is code w
The browser call the PHP engine when the file has this extension.
We can find this engine in our OS linux:
```sh
root@fastcomet [~]# whereis php
php: /usr/bin/php
root@fastcomet [~]# echo "<?php echo 'Hello World!' ?>" > helloworld.php
root@fastcomet [~]# /usr/bin/php -q helloworld.php
Hello World!
```

### PHP in browser
The browsers also have this engine. Whenever there's a php tag, the PHP interpreter recognize and execute the code within the `<?php ?>` tags,
This process in the browser:
![[Pasted image 20250320225800.png]]
- The PHP code is tokenized
- The PHP code is parsed **Abstract Syntax Tree** **(AST)**, a tree representation of the code
- After passing, this follow with the compilitation into low level instructions called, **opcode**
- The opcode instructions are used for the **ZEND** engine
- **OPcache** cache the request to the same script in an interval, to avoid recompile PHP on newest requests