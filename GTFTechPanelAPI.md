# Project: GTFTechPanelNodeAPILive
API for GTFTechPanel built in Nodejs and served in Reactjs.

{{BaseUrlLive}} = [https://api-node-app.gtftech.com/api/v1](https://api-node-app.gtftech.com/api/v1)
# 📁 Collection: Auth 


## End-point: login
LogIn API.
### Method: POST
>```
>{{BaseUrlLive}}/auth/login
>```
### Body (**raw**)

```json
{
    "user_name": "vikrant@iqsetters.com",
    "password": "IQ@2006"
}
```

### Response 

```json
{
    "data": [
        [
            {
                "user_id": "4392",
                "user_name": "Vikrant Baliyan",
                "company_name": "GTF Technologies",
                "email_address": "vikrantbaliyan@gmail.com",
                "role_id": "1",
                "role_code": "Admin",
                "role_name": "All Access",
                "otp_validation_required": 1,
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyR3VpZCI6IjY1ZjZjMzExMjNlNzQxYTk4YzJjYzc5Yjg4OWFkZWNjIiwicm9sZUlEIjoiMSIsInVzZXJJRCI6IjQzOTIiLCJpYXQiOjE2OTUwOTYxODMsImV4cCI6MTY5NTEzMjE4M30.uVmbgkOIrKwCt9VmJlq58hl0YPKQI7IYQjyP_kGsrpI"
            }
        ],
        2
    ],
    "message": "Success"
}
```

  
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: logout
LogOut API.
### Method: POST
>```
>{{BaseUrlLive}}/auth/logout
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJHdWlkIjoiNjVmNmMzMTEyM2U3NDFhOThjMmNjNzliODg5YWRlY2MiLCJyb2xlSUQiOiIxIiwibWVtYmVySUQiOiI0MzkyIiwiaWF0IjoxNjk0Njg1MzQ3LCJleHAiOjE2OTQ3MjEzNDd9.WtXylGxQgZbd0K-ZYXzoygy0FkuHfg5X9Qp-kD0aDtU|string|

### Response 

```json
{
    "message": "Logout Successfully!!!"
}
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: DashBoard 


## End-point: GetDashboardDataMicrosites
DashBoard Microsites API. Don't send AgentID in query, IsThisMobileDevice is compulsory and gets checked at backend, if not given backend sets it to false.
### Method: GET
>```
>{{BaseUrlLive}}/dashboard/dashBoardDataMicrosites
>```
### Query Params

|Param|value|
|---|---|
|is_call_by_mobile_app|false(default is false, not to be given by non mobile front end.)|
|user_id|4612|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJHdWlkIjoiNjVmNmMzMTEyM2U3NDFhOThjMmNjNzliODg5YWRlY2MiLCJyb2xlSUQiOiIxIiwibWVtYmVySUQiOiI0MzkyIiwiaWF0IjoxNjk0Njg1MzQ3LCJleHAiOjE2OTQ3MjEzNDd9.WtXylGxQgZbd0K-ZYXzoygy0FkuHfg5X9Qp-kD0aDtU|string|

### Response

```json
{
    "data": [
        [
            {
                "Agent": "3A Apart",
                "Project": "3A Part - Cctv Camera",
                "Today": "0",
                "Yesterday": "0",
                "This Week": "0",
                "This Month": "0",
                "This Year": "0",
                "All": "0",
                "All Spam": "0",
                "Status": "NonActive"
            },
            {
                "Agent": "3A Apart",
                "Project": "Ambience Tiverton",
                "Today": "0",
                "Yesterday": "0",
                "This Week": "0",
                "This Month": "0",
                "This Year": "0",
                "All": "1",
                "All Spam": "0",
                "Status": "NonActive"
            },
        ],
        441881
    ],
    "message": "Success"
}
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GetDashboardDataFacebook
DashBoard Facebook API. Don't send AgentID in query, IsThisMobileDevice is compulsory and gets checked at backend, if not given backend sets it to false.
### Method: GET
>```
>{{BaseUrlLive}}/dashboard/dashBoardDataFacebook
>```

### Query Params

|Param|value|
|---|---|
|is_call_by_mobile_app|false(default is false, not to be given by non mobile front end.)|
|user_id|4612|

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJHdWlkIjoiNjVmNmMzMTEyM2U3NDFhOThjMmNjNzliODg5YWRlY2MiLCJyb2xlSUQiOiIxIiwibWVtYmVySUQiOiI0MzkyIiwiaWF0IjoxNjk0Njg1MzQ3LCJleHAiOjE2OTQ3MjEzNDd9.WtXylGxQgZbd0K-ZYXzoygy0FkuHfg5X9Qp-kD0aDtU|string|

### Response

```json
{
    "data": [
        [
            {
                "Agent": "3A Apart",
                "Project": "3A Part - Cctv Camera",
                "Today": "0",
                "Yesterday": "0",
                "This Week": "0",
                "This Month": "0",
                "This Year": "0",
                "All": "0",
                "All Spam": "0",
                "Status": "NonActive"
            },
            {
                "Agent": "3A Apart",
                "Project": "Ambience Tiverton",
                "Today": "0",
                "Yesterday": "0",
                "This Week": "0",
                "This Month": "0",
                "This Year": "0",
                "All": "1",
                "All Spam": "0",
                "Status": "NonActive"
            },
        ],
        441881
    ],
    "message": "Success"
}
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Facebook 


## End-point: getFacebookListing
Query can accept:

--filter
	@date_from varchar(20) = '',
	@date_to varchar(20) = '',
	@agent_id varchar(50) = '',
	@project_name varchar(500) = '',
	--
	@show_deleted_queries int = 0,				--0: Hide, 1: Show, 2: Only Deleted
	@show_duplicate_queires int = 0,			--0: Hide, 1: Show, 2: Only Duplicates
    @show_spam_queires int = 0,					--0: Hide, 1: Show, 2: Only Spam
	@order_by varchar(max) = 'desc',			--Default is Desc
	--pagging
	@page_number_start int = 0,          
	@page_number_end int = 100,
	--
	@is_call_by_export bit = 0,	
	@is_call_by_mobile_app bit = 0,	
	--Logged in user
	@user_id bigint(calculated by backend)
### Method: GET
>```
>{{BaseUrlLive}}/facebookListing?querytype=facebook&datefrom=2022-08-01&dateto=2022-08-22
>```
### Query Params

|Param|value|
|---|---|
|date_from|2022-08-01|
|date_to|2022-08-22|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJHdWlkIjoiNjVmNmMzMTEyM2U3NDFhOThjMmNjNzliODg5YWRlY2MiLCJyb2xlSUQiOiIxIiwibWVtYmVySUQiOiI0MzkyIiwiaWF0IjoxNjk0Njg1MzQ3LCJleHAiOjE2OTQ3MjEzNDd9.WtXylGxQgZbd0K-ZYXzoygy0FkuHfg5X9Qp-kD0aDtU|string|

### Response

```json
{
    "data": [
        [
            {
                "AgentID": "4434",
                "QueryID": 39224,
                "Project": "Godrej Connaught One",
                "Sender": "Jagdish",
                "Mobile": "(+91) - 92XXXXX81",
                "Email": "p**i@g**l.com",
                "Message": "NA",
                "City": "Mumbai",
                "IP": "NA",
                "QueryDate": "2022-09-18 23:52:31",
                "Status": false,
                "IsDeleted": "N"
            },
            {
                "AgentID": "4547",
                "QueryID": 39223,
                "Project": "Fusion Brook and Rivulet",
                "Sender": "AnkitKumar",
                "Mobile": "(+91) - 89XXXXX29",
                "Email": "a**8@g**l.com",
                "Message": "NA",
                "City": "",
                "IP": "NA",
                "QueryDate": "2022-09-18 23:47:50",
                "Status": false,
                "IsDeleted": "N"
            },
            {
                "total_record_count": 1800
            }
        ],
        128
    ],
    "message": "Success"
}
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: logger 


## End-point: logs
Logs API
### Method: GET
>```
>{{BaseUrlLive}}/logs
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJHdWlkIjoiNjVmNmMzMTEyM2U3NDFhOThjMmNjNzliODg5YWRlY2MiLCJyb2xlSUQiOiIxIiwibWVtYmVySUQiOiI0MzkyIiwiaWF0IjoxNjk0Njg1MzQ3LCJleHAiOjE2OTQ3MjEzNDd9.WtXylGxQgZbd0K-ZYXzoygy0FkuHfg5X9Qp-kD0aDtU|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: MicroSites 


## End-point: getMicroSitesListing
Query can accept:

--filter
	@date_from varchar(20) = '',
	@date_to varchar(20) = '',
	@agent_id varchar(50) = '',
	@project_name varchar(500) = '',
	--
	@show_deleted_queries int = 0,				--0: Hide, 1: Show, 2: Only Deleted
	@show_duplicate_queires int = 0,			--0: Hide, 1: Show, 2: Only Duplicates
    @show_spam_queires int = 0,					--0: Hide, 1: Show, 2: Only Spam
	@order_by varchar(max) = 'desc',			--Default is Desc
	--pagging
	@page_number_start int = 0,          
	@page_number_end int = 100,
	--
	@is_call_by_export bit = 0,	
	@is_call_by_mobile_app bit = 0,	
	--Logged in user
	@user_id bigint(calculated by backend)
### Method: GET
>```
>{{BaseUrlLive}}/micrositesListing?datefrom=2022-08-01&dateto=2022-08-24&querytype=microsites
>```
### Query Params

|Param|value|
|---|---|
|date_from|2022-08-01|
|date_to|2022-08-24|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJHdWlkIjoiNjVmNmMzMTEyM2U3NDFhOThjMmNjNzliODg5YWRlY2MiLCJyb2xlSUQiOiIxIiwibWVtYmVySUQiOiI0MzkyIiwiaWF0IjoxNjk0Njg1MzQ3LCJleHAiOjE2OTQ3MjEzNDd9.WtXylGxQgZbd0K-ZYXzoygy0FkuHfg5X9Qp-kD0aDtU|string|


### Response

```json
{
    "data": [
        [
            {
                "AgentID": 4313,
                "QueryID": 355039,
                "Project": "ACE STARLIT Noida",
                "Sender": "Shruti Kapoor",
                "Mobile": "(+91) - 85XXXXXX02",
                "Email": "s**3@g**l.com",
                "Message": "2 Bhk",
                "City": "Delhi (India)",
                "IP": "116.75.206.131",
                "QueryDate": "2022-08-24T23:58:44.000Z",
                "Status": 0,
                "IsDeleted": "N"
            },
            {
                "AgentID": 4313,
                "QueryID": 355038,
                "Project": "GAUR RUNWAY SUITES Noida",
                "Sender": "Chanchal K Sharma",
                "Mobile": "(+91) - 98XXXXXX01",
                "Email": "c**m@g**l.com",
                "Message": "Wnat To Buy Villa Or Plot",
                "City": "Delhi (India)",
                "IP": "122.161.79.146",
                "QueryDate": "2022-08-24T23:31:47.000Z",
                "Status": 0,
                "IsDeleted": "N"
            },
            {
                "total_record_count": 7918
            }
        ],
        128
    ],
    "message": "Success"
}
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: PickList 


## End-point: getPickList
Query can accept:
    @pick_list_for varchar(100) = 'microsites(default) || facebook',
	@is_call_by_mobile_app bit = 0(default is false, not to be given by non mobile developer),
	@user_id bigint(calculated by backend)
### Method: GET
>```
>{{BaseUrlLive}}/dashboard/pickList
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJfZ3VpZCI6Ijc1NkU0QjUyLURDMDQtNEJCOS1CRkIwLTI0MUU4RTExNkM4NCIsImlhdCI6MTY5Mzk4MjAyNSwiZXhwIjoxNjk0MDE4MDI1fQ.x5orsy77tXOgclLT-OPCYoY9s9pkb87-QypfL5lmF3k|string|


### Response

```json
{
    "data": [
        [
                        {
                "attribute_code": "agent_id",
                "attribute_name": "83Avenue",
                "value": "4346"
            },
            {
                "attribute_code": "agent_id",
                "attribute_name": "A L SoftWeb Pvt Ltd",
                "value": "4497"
            },
            {
                "attribute_code": "project",
                "attribute_name": "",
                "value": ", Supertech Nova east -west"
            },
            {
                "attribute_code": "project",
                "attribute_name": "",
                "value": "(Nest Kandivali - Pre Max Mumbai"
            }
        ],
        128
    ],
    "message": "Success"
}
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
____________________________________________________________________
Created By: [Vijay Kumar(IQ Setters)](https://github.com/vkchang39)
