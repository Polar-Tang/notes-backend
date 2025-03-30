
#### Inheritance
Inheritance is when a child class has the same properties that the parent class, it inheritance the patent's properties. 
![[Pasted image 20250212200938.png]]
###### Inheretence features
- Inheretance is static, you cannot change its properties at runtime, instead, you should create a [[subclass]] to inherite the parent's properties but change it
```python
class Person:  
	def __init__(self, fname, lname, address):  
		self.fname = fname  
		self.lname = lname  
		self.address = address  
	  
	def display(self):  
		print("First Name: ", self.fname)  
		print("Last Name: ", self.lname)  
		print("Address: ", self.address)  
	  
class Student(Person):  
	def __init__(self, fname, lname, address, age, gradYear):  
		super().__init__(fname, lname, address)  
		self.age = age  
		self.gradYear = gradYear  
	  
	def display(self):  
		super().display()  
		print("Age: ", self.age)  
		print("Graduation Year: ", self.gradYear)  
  
# person object  
per = Person("Adam", "Ho", "1234 abc blvd")  
per.display()  
print("===========================================")  
std = Student("Peter", "kee", "9876 xyz blvd", 28, 2008)  
std.display()
```

### Association 
In the aggregation relationship where both related classes [could be created and destroyed  independently](https://medium.com/@bindubc/association-aggregation-and-composition-in-oops-8d260854a446#:~:text=The%20objects%20that%20are%20part%20of%20the%20association%20relationship%20can%20be%20created%20and%20destroyed%20independently.)  
There are two types of relationships:
#### Aggregation
In the aggregation relationship, the son and parent are completly independent, a can be destroyed but not b, and viceversa

#### Composition
On the other hand, in composition, when the parent it's destroyed the child also stop to exist