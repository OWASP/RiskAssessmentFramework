# -*- coding: utf-8 -*-
u"""Telegram Notifier.

    Author: Mishal Shah <shahmishal1998@gmail.com> , Jan 26 2019
    Version: 1.1

"""
import telegram


class Telegram():
    """Initilize the telegram."""

    def __init__(self, cred):
        """Init logger params.

        Args:
            modulename (str): Script module name
            cred (dict): Telegram user_id
        """
        self.token = cred['token']
        self.user_id = cred['user_id']

    def notify(self, msg):
        """Docstring.

        Args:
            msg (TYPE): Description
        """
        message = str(msg)

        bot = telegram.Bot(token=self.token)
        bot.send_message(chat_id=self.user_id, text=message)
        print("[+] Telegram notification sent.")
        return
