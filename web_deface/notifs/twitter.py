# -*- coding: utf-8 -*-
u"""Twitter module.

    Author: Rejah Rehim <rejah@appfabs.com> , Aug 30 2018
    Version: 1.1

"""
import json
import requests
from requests_oauthlib import OAuth1


class Twitter():
    """Initilize the twitter."""

    def __init__(self, cred):
        """Init logger params.

        Args:
            modulename (str): Script module name
            cred (dict): Twitter credentials
            username (TYPE): Twitter username to post the message
        """
        self.baseUrl = "https://api.twitter.com/1.1"
        self.auth = OAuth1(cred['api_key'], cred['api_secret_key'], cred[
                           'access_token'], cred['access_token_secret'])

        self.id = self.getuserid()

    def getuserid(self):
        """Docstring."""
        endpoint = "/account/verify_credentials.json"
        response = requests.get(self.baseUrl + endpoint, auth=self.auth)
        response = response.json()
        return response['id']

    def notify(self, msg):
        """Docstring.

        Args:
            msg (TYPE): Description
        """
        try:
            message = (str(msg))
            data = {
                "event": {
                    "type": "message_create",
                    "message_create": {
                        "target": {
                            "recipient_id": self.id
                        },
                        "message_data": {
                            "text": message
                        }
                    }
                }
            }

            endpoint = "/direct_messages/events/new.json"
            response = requests.post(
                self.baseUrl + endpoint,
                auth=self.auth,
                data=json.dumps(data)
            )
            if response.status_code == 200:
                print("[+] Twitter notification sent")
            else:
                print("[!] Twitter notification not sent, error is: " +
                      str(response.text))
            return
        except Exception as e:
            print("[!] Exception in Twitter notification sent, error is: " +
                  str(e))
        return
