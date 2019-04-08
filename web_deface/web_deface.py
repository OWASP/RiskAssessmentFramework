# -*- coding: utf-8 -*-
from monitor import Monitor
from cache import Cache
import deface_utils
from crawler import Crawler
import platform
from notifs import arguments
from notifs import slack
from notifs import twitter
from notifs import telegram
from notifs import twilio_sms


class WebDeface(object):
    """Class for WebDeface."""

    def __init__(self, args):
        """Intialize WebDeface."""

        if int(platform.sys.version_info[0]) < 3:  # if Python 2.X.X
            self.url = raw_input(">> Enter the URL of the website: ")
            self.thread = int(raw_input(">> Enter the number of threads: "))
        else:
            self.url = input(">> Enter the URL of the website: ")
            self.thread = int(input(">> Enter the number of threads: "))

        if (self.url is not None and
            deface_utils.verify_url(self.url)):
            # Create crawler object
            self.crawler_obj = Crawler(url=self.url,
                                       threads=self.thread)
            self.crawler_obj.threading_crawl()

        # Create a cache object
        self.cache_obj = Cache()
        self.cache_obj.generate_cache()

        # Arguments
        self.args = args

        # Initialize empty objects
        self.twitter_obj = None
        self.slack_obj = None
        self.telegram_obj = None
        self.twilio_sms_obj = None

    def create_notifier_objs(self):
        """
        Create notification medium objects.

        Args:
            None

        Raises:
            None

        Returns:
            None
        """
        # Parse all the arguments
        if (self.args.twitter_api_key and
            self.args.twitter_access_token and
            self.args.twitter_api_secret_key and
            self.args.twitter_access_token_secret):
            cred = {}
            cred["api_key"] = self.args.twitter_api_key
            cred["access_token"] = self.args.twitter_access_token
            cred["api_secret_key"] = self.args.twitter_api_secret_key
            cred["access_token_secret"] = self.args.twitter_access_token_secret
            self.twitter_obj = twitter.Twitter(cred)

        if (self.args.twilio_to and
            self.args.twilio_from and
            self.args.twilio_token and
            self.args.twilio_sid):
            cred = {}
            cred["twilio_to"] = self.args.twilio_to
            cred["twilio_sid"] = self.args.twilio_sid
            cred["twilio_token"] = self.args.twilio_token
            cred["twilio_from"] = self.args.twilio_from
            self.twilio_sms_obj = twilio_sms.Twilio(cred)

        if (self.args.slack_token and
            self.args.slack_user_id):
            cred = {}
            cred["token"] = self.args.slack_token
            cred["user_id"] = self.args.slack_user_id
            self.slack_obj = slack.Slack(cred)

        if (self.args.telegram_user_id and
            self.args.telegram_bot_token):
            cred = {}
            cred["user_id"] = self.args.telegram_user_id
            cred["token"] = self.args.telegram_bot_token
            self.telegram_obj = telegram.Telegram(cred)

    def start(self):
        """
        Start Web Deface Detection.

        Args:
            None

        Returns:
            None

        Raises:
            None
        """
        print("[!] Remote Web Deface Detection started")
        # Create a monitor object
        self.monitor_obj = Monitor(twitter=self.twitter_obj,
                                   slack=self.slack_obj,
                                   twilio_sms=self.twilio_sms_obj,
                                   telegram=self.telegram_obj)
        # Start the monitor loop
        self.monitor_obj.monitor()


if __name__ == '__main__':

    # Fetch all the arguments
    args = arguments.get_args()

    # Create a web deface object
    web_deface_obj = WebDeface(args)
    web_deface_obj.create_notifier_objs()
    web_deface_obj.start()
