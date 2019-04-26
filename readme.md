

____


## The OWASP Risk Assessment Framework 

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7bb78cc6ec4a4951a96e8c712758e030)](https://app.codacy.com/app/adeyosemanputra/RiskAssessmentFramework?utm_source=github.com&utm_medium=referral&utm_content=OWASP/RiskAssessmentFramework&utm_campaign=Badge_Grade_Settings)

The OWASP Risk Asessement Framework is SAS(Source Code Analysis), VAPT(Vulnerability Assessment & Penetration Testing) and Risk Assesment tool. 

## features
-   Web Deface Detection 
-   Scanning Tools based on OWASP Top 10
-   Risk Assesment Tools
-   Static Application security Testing 

## Installation
-   `cd web_deface/`
-   `pip install -r requirements.txt`
-   `python web_deface.py <notif arguments>`

### Arguments

List of all arguments / usage
```arguments
usage: web_deface.py [-h] [--twitter_api_key TWITTER_API_KEY]
                     [--twitter_api_secret_key TWITTER_API_SECRET_KEY]
                     [--twitter_access_token TWITTER_ACCESS_TOKEN]
                     [--twitter_access_token_secret TWITTER_ACCESS_TOKEN_SECRET]
                     [--telegram_bot_token TELEGRAM_BOT_TOKEN]
                     [--telegram_user_id TELEGRAM_USER_ID]
                     [--twilio_sid TWILIO_SID] [--twilio_token TWILIO_TOKEN]
                     [--twilio_from TWILIO_FROM] [--twilio_to TWILIO_TO]
                     [--slack_token SLACK_TOKEN]
                     [--slack_user_id SLACK_USER_ID]

Risk Assessment Framework

optional arguments:
  -h, --help            show this help message and exit
  --twitter_api_key TWITTER_API_KEY, -tak TWITTER_API_KEY
                        Twitter api key
  --twitter_api_secret_key TWITTER_API_SECRET_KEY, -tas TWITTER_API_SECRET_KEY
                        Twitter api secret
  --twitter_access_token TWITTER_ACCESS_TOKEN, -tat TWITTER_ACCESS_TOKEN
                        Twitter access token
  --twitter_access_token_secret TWITTER_ACCESS_TOKEN_SECRET, -tats TWITTER_ACCESS_TOKEN_SECRET
                        Twitter access token secret
  --telegram_bot_token TELEGRAM_BOT_TOKEN, -tbt TELEGRAM_BOT_TOKEN
                        Telegram Bot Token
  --telegram_user_id TELEGRAM_USER_ID, -tui TELEGRAM_USER_ID
                        Telegram user id
  --twilio_sid TWILIO_SID, -tws TWILIO_SID
                        Twilio SID
  --twilio_token TWILIO_TOKEN, -twt TWILIO_TOKEN
                        Twilio authorization token
  --twilio_from TWILIO_FROM, -twf TWILIO_FROM
                        Twilio (From) phone number
  --twilio_to TWILIO_TO, -twto TWILIO_TO
                        Twilio (To) phone number
  --slack_token SLACK_TOKEN, -st SLACK_TOKEN
                        Slack token
  --slack_user_id SLACK_USER_ID, -suid SLACK_USER_ID
                        Slack user id
```


## Wiki
https://github.com/OWASP/RiskAssessmentFramework/wiki

## Contribute
Want to contribute to this project? Message me on Twitter.
My twitter handle is @johnleedik 


https://twitter.com/johnleedik
 
## Project Lead

Ade Yoseman Putra

https://www.owasp.org/index.php/Ade_Yoseman_Putra
