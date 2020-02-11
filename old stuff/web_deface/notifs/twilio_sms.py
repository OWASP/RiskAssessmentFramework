# -*- coding: utf-8 -*-
u"""Twilio module.

    Author: Abhishek Sharma <abhishek_official@hotmail.com> , Jan 26 2019
    Version: 1.1

"""
from twilio.rest import Client


class Twilio():
    """Initilize the Twilio."""

    def __init__(self, cred):
        """Init logger params.

        Args:
        -----
            modulename (str): Twilio
            cred (dict): Twilio credentials
        """
        self.account_sid = cred['twilio_sid']
        self.account_token = cred['twilio_token']
        self.twilio_from = cred['twilio_from']
        self.twilio_to = cred['twilio_to']

        self.client = Client(self.account_sid, self.account_token)

    @staticmethod
    def generatemessage(msg):
        """
        Generate message by attaching the current CPU time.

        Args:
        -----
        :msg : str
            Message to send

        Returns:
        --------
        str: Message appended with CPU time
        """
        message = (str(msg))

        return message

    def notify(self, msg):
        """
        Send the generated message.

        Args:
        -----
        :msg : str
            Message to send

        Returns:
        --------
        None
        """
        try:
            self.client.messages \
                .create(
                    body=self.generatemessage(msg),
                    from_=self.twilio_from,
                    to=self.twilio_to
                )

        except Exception as e:
            print("[!] Error in sending SMS: ", str(e))
            return
        print("[+] SMS notification sent.")
        return
