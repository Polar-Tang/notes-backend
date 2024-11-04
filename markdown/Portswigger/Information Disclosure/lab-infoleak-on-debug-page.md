https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-on-debug-page
Looking for directories
```sh
wfuzz -u https://0ac600b704b7e2d3820bf1e500840040.web-security-academy.net/FUZZ -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -v --hc=404
```

![[Pasted image 20241101161339.png]]
enumerate on that directory too:
```sh
gobuster dir -u https://0ac600b704b7e2d3820bf1e500840040.web-security-academy.net/cgi-bin -w /usr/share/seclists/Discovery/Web-Content/raft-medium-files-lowercase.txt -x php,html,txt,js -t 50 --no-error -v | grep -v "Missed" 
```
![[Pasted image 20241101163230.png]]
Look that and you will see the secret key
![[Pasted image 20241101163517.png]]