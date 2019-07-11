# API

## Status
**IN DEVELOPMENT**

## Description
Adding the file extraction feature
## Todo 

-   Create Schemas for USER
-   File Upload Endpoint
-   Test Result Endpoint
-   Authentication
-   User Registration
-   Report Generation
-   User Details Endpoint

## Impacted Areas in Application
General components of the application that this PR will affect:

-   Source
-   Package.json
-   index.js



**Risk Assessment Framework API**
----
*POST CODE*

* **URL**

  http://localhost:3000/upload/code

* **Method:**
  
  `POST`
  
*  **URL Params**

   No Params 

   **Required:**
 
   code field of type file

   **Optional:**
 
   No Optional fields

* **Data Params**

`code` param of `File` Type 

* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `[
    File is uploaded
]`
 

* **Sample Call:**
$ curl -F ‘data=@path/to/local/file’ UPLOAD_ADDRESS


*GET USERS*

* **URL**

  http://localhost:3000/

* **Method:**
  
  `GET`
  
*  **URL Params**

   No Params 

   **Required:**
 
   No Required fields

   **Optional:**
 
   No Optional fields

* **Data Params**

  No Data Params

* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `[
    {
        "_id": "xxxxxxxxxxxxxxx",
        "title": "Hello, now from the in-memory database!"
    }
]`
 

* **Sample Call:**

    curl http://localhost:3000/

*ADD USER*


* **URL**

  http://localhost:3000/

* **Method:**
  
  `POST`
  
*  **URL Params**

   No Params 

   **Required:**
 
   No Required fields

   **Optional:**
 
   No Optional fields

* **Data Params**

 {
        "name": "testUser",
        "email": "test@test.com"
}
* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `[
 {
    "message": "New user added."
}
]`
 

* **Sample Call:**

    `curl -X POST -H 'Content-Type: application/json' -d '{
  "title": "Pizza",
  "price": 10.5
}' http://localhost:3000/ `


*UPDATE USER*


* **URL**

  http://localhost:3000/

* **Method:**
  
  `PUT`
  
*  **URL Params**

      `id=[integer]`


   **Required:**
 
   `id=[integer]`

   **Optional:**
 
   No Optional fields

* **Data Params**

 {
        "name": `String`,
        "email": `String`,
        "country" : `String`,
}
* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `[
{
    "message": "User updated."
}
]`
 

* **Sample Call:**

    `curl -X PUT -H 'Content-Type: application/json' -d '{
  "price": 12.5
}' http://localhost:3000/5858754545 `


*DELETE USER*


* **URL**

  http://localhost:3000/

* **Method:**
  
  `DELETE`
  
*  **URL Params**

      `id=[integer]`


   **Required:**
 
   `id=[integer]`

   **Optional:**
 
   No Optional fields

* **Data Params**
   No data params

* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `[
{
    "message": "User deleted."
}
]`
 

* **Sample Call:**

    `curl -X DELETE http://localhost:3000/5654654
`


