# -*- coding: utf-8 -*-
import json
from hash_gen import Hash
import deface_utils
import sys


class Monitor(object):
    """Class for Monitor."""

    def __init__(self):
        """Intialize Monitor class."""

        self.JSON_PATH = 'hash.json'
        self.change_dict = {}
        self._TOLERANCE = 20
        self.hash_dict = self.read_file()

        # Initialize Hash object
        self.hash_obj = Hash()

        # Initialize change_dict
        for key in self.hash_dict.keys():
            self.change_dict[key] = 0

    def read_file(self):
        """
        Read the JSON file and return it to a
        Python dictionary.

        Args:
            None

        Raises:
            None

        Returns:
            temp_dict (dict): JSON loaded as Python dictionary
                              data type
        """
        try:
            with open(self.JSON_PATH, 'r') as rjfile:
                temp_dict = json.load(rjfile)
                return temp_dict
        except Exception as e:
            print("[-] Error occured: " + str(e))
            sys.exit(0)

    def calc_hash(self, data):
        """
        Calculate SHA256 hash of the data.

        Args:
            data (str): Data to calculate SHA256 hash for

        Raises:
            None

        Returns:
            hash_value (str): Calculated SHA256 hash value
        """
        hash_value = self.hash_obj.hash_value(data)
        return hash_value

    def anamoly(self):
        """
        Iterate over the URLs and detect any change by
        re-sending the request & re-calculating SHA256 hash
        value of the recieved data.

        Args:
            None

        Returns:
            None

        Raises:
            None
        """
        for url, sha256_hash in self.hash_dict.items():
            resp_text = deface_utils.call_url(url)
            hash_value = self.calc_hash(resp_text)
            if (sha256_hash != hash_value):
                # Increase change count
                self.change_dict[url] = self.change_dict[url] + 1
                if (self.change_dict[url] > self._TOLERANCE):
                    self.change_dict[url] = 0
                    msg = "[!] Change detected in: {}".format(url)
                    print(msg)

    def monitor(self):
        """
        Start monitoring.

        Args:
            None

        Raises:
            None

        Returns:
            None
        """
        print('\n[!] Website monitoring started')
        try:
            while True:
                self.anamoly()
        except Exception as e:
            print("[-] Error occured: " + str(e))
