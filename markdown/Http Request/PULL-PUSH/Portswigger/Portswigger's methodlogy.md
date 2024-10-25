#### 1. Fuzzing web-content
Run a fuzzing to discover hidden endpoints

(this solve these labs [Unprotected admin functionality][Unprotected-admin-functionality], [[Unprotected-admin-functionality]])
#### 2. Explore the web-contet
Explore the page throug the UI (User Interface) with burpsuite growing the http history behind

(this solve these labs [[request_parameter_with_GUID]], [[IDOR]])
###### In every endpoint: 
- Inspect the html 
	See the html structure, focusing on the script tags, additionally commits (`-->`)

	(this solve these labs [[Unprotected-admin-functionality-but-unpredictable-URL]])
- Compare response with header changed, look for how params are reflected in the request, run **Param miner**
	This burpsuite extension could be very useful.
	
	 (this solved labs [[URL-based_access_control]], [[Request_parameter_password_disclosure]])
	 but remember that is based in timing response and request reflection, and also is used but many people, so for this two reasons, in real scenarios you could try another harmful headers manually
- **Parameter testing** 
	Explorate the value from every parameter, testing how the server handles, and if these are reflected (this also pram miner does it)

	(this solve these labs [[User_ID_controlled_by_url_param]], [[User_role_controlled_by_request_parameter]], [[User_role_can_be_modified_in_user_profile]], [[Request_parameter_redirect_leakage]], [[Request_parameter_password_disclosure]], [[Request_parameter_data_leakage]])
#### 3. For the API endpoints look for these tecniques
###### Broken access control
test for [Broken access control](https://portswigger.net/web-security/access-control#what-is-access-control). i also have a [summary](Broken_authorization) from [the Hacking apis book of J. Corey](https://www.amazon.com/Hacking-APIs-Application-Programming-Interfaces/dp/1718502443) 
- A-B side
	If you have two or more account with different privileges, explore them and compare the request to the same resource
	(this solve de labs [[Referer-based_access_control]], [[Multi-step_process_with_no_access_control]], [[Method-based_access_control]])

