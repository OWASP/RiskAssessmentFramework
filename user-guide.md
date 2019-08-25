
# User Guide


## Introduction
The OWASP SecureTea Project provides a one-stop security solution for various devices (personal computers / servers / IoT devices).

## Installation

### Pre-requisites

#### Supported Platforms
OWASP Risk Assessment Framework Dashboard can be run on Linux, Windows and macOS operating systems.

#### Software
-  NodeJS (required)
-  Angular (required)
-  SonarQube (required)
-  Sonar-scanner (required)
-  Mongodb (required)
-  Git (required)


#### Installing pre-requisites
NodeJS:<br>
https://nodejs.org/en/download/

Angular:<br>
https://angular.io/

SonarQube:<br>
https://www.sonarqube.org/downloads/

Sonar-Scanner:<br>
https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/

Mongodb:<br>
https://www.mongodb.com/download-center/community

### Procedure for installing

#### Step 1 :
### Get the resource file from github  

Clone the project : 
`$ git clone https://github.com/OWASP/RiskAssessmentFramework.git`

Or 

Download the project from : https://github.com/OWASP/RiskAssessmentFramework/archive/master.zip


#### Step 2: 

Start the mongodb server and make sure it's running on `port : 28017`
#### Step 3: 

Start the sonarqube server on `port : 9000`

#### Step 4: 
Make sure `sonar-scanner` is installed and add included in the environment variables

#### Step 5: 
Make sure `sonar-scanner` is installed and included in the **environment variables**

#### Step 6: 
Goto the cloned repository folder and change directory to "api" ```cd api``` when you are inside the directory run : ```npm install``` which will install the required dependencies

#### Step 6: 
After successfully executing ```npm install``` start the node server using ```npm start```.

#### Step 7: 
Change the directory to the gui folder from the root directory. `cd gui` from the **root directory**

#### Step 8: 
when you are inside the gui directory use ```npm install``` to install all the relevant dependencies.
#### Step 9: 
After completing the installation use ```ng serve``` or ```npm start``` to run the Angular App.
#### Step 10: 
After the angular app successfully compiled open your browser and goto your localhost:4200 
#### Step 11: 
Use the below credentials to login to the dashboard
```
username : admin 
password : test1234
```

## [Guide to use the dashboard](dashboard_guide.pdf)