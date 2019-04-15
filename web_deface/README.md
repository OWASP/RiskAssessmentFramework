# Remote Web Deface Detection

## Installing
- Make sure you are in the web_deface directory, `cd web_deface/`
- `pip install -r requirements.txt`
- `python web_deface.py <notif arguments>`

## Arguments

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

## Setting up tokens

### Twitter tokens
#### Steps
- Visit https://apps.twitter.com.
- Create new app to obtain authentication and token codes.
#### Example usage
- `python web_deface.py --twitter_api_key <data> --twitter_api_secret_key <data> --twitter_access_token <data> --twitter_access_token_secret <data>`
<br>![](/img/twitter.gif)<br>

### Twilio SMS tokens
#### Steps
- Visit https://www.twilio.com and click on "Get a free API key".
#### Example usage
- `sudo python3 web_deface.py --twilio_sid <data> --twilio_token <data> --twilio_from <data> --twilio_to <data>`
<br>![](/img/SMS.gif)<br>

### Slack tokens
#### Steps
- Visit https://api.slack.com/apps/new and create a new bot app.
- In the bot app settings, setup event subscriptions by Enabling Events.
- Get the "Bot User OAuth Access Token".
#### Example usage
- `sudo python3 web_deface.py --slack_token <data> --slack_user_id <data>`
<br>![](/img/slack.gif)<br>

### Telegram tokens
#### Steps
- Visit https://core.telegram.org/bots#botfather & follow the steps to obtain Telegram token & user id.
#### Example usage
- `sudo python3 web_deface.py --telegram_bot_token <data> --telegram_user_id <data>`
<br>![](/img/telegram.gif)<br>
