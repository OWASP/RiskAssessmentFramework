# -*- coding: utf-8 -*-
u"""Slack Notifier module.

    Author: Mishal Shah <shahmishal1998@gmail.com> , Jan 29 2019
    Version: 1.1

"""
import requests


class Slack():
    """Initilize the slack."""

    def __init__(self, cred):
        """Init logger params.

        Args:
            modulename (str): Script module name
            cred (dict): Slack user_id, token
        """
        self.slack_token = cred['token']
        self.user_id = cred['user_id']
        self.slack_channel_open_url = 'https://slack.com/api/im.open'
        self.slack_post_message_url = 'https://slack.com/api/chat.postMessage'
        self.auth_header = 'Bearer ' + self.slack_token

    def notify(self, msg):
        """Docstring.

        Args:
            msg (TYPE): Description
        """
        message = (str(msg))

        channel_info = requests.post(
            self.slack_channel_open_url,
            headers={"Authorization": self.auth_header},
            data={"user": self.user_id}
        ).json()
        channel_id = channel_info['channel']['id']

        post_message = requests.post(
            self.slack_post_message_url,
            headers={"Authorization": self.auth_header},
            data={"channel": channel_id, "text": message}
        ).json()

        if post_message['ok'] is True:
            print("[+] Slack notification sent")
        else:
            print("[!] Slack notification not sent, error is: " +
                  str(post_message['error']))
        return
