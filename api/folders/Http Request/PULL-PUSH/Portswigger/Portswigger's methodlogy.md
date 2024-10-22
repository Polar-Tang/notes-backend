##### 1. Fuzzing web-content
Run a fuzzing to discover hidden endpoints

(this solve these labs [Unprotected admin functionality][Unprotected-admin-functionality])
###### 2. Explore the web-contet but throug the UI (User Interface)
Explore the page with burpsuite growing the http history behind

(this solve these labs [[request_parameter_with_GUID]], [[IDOR]])
###### Inspect the html 
See the html structure, focusing on the script tags, additionally commits (`-->`)

(this solve these labs [[Unprotected-admin-functionality-but-unpredictable-URL]])
###### Parameter testing 
Explorate the value from every parameter, testing how the server handles

(this solve these labs [[User_ID_controlled_by_url_param]], [[User_role_controlled_by_request_parameter]], [[User_role_can_be_modified_in_user_profile]], [[Request_parameter_redirect_leakage]])