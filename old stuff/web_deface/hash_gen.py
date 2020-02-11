# -*- coding: utf-8 -*-
import hashlib


class Hash(object):
    """Class for Hash."""

    def __init__(self):
        """Intialize Hash class."""
        pass

    @staticmethod
    def extractBytes(data):
        """
        Extracts and returns bytes of the file.

        Args:
            data (str): String data to encode

        Returns:
            bytes: Encoded data

        Raises:
            None
        """
        try:
            return data.encode('utf-8')
        except Exception as e:
            print("[-] Error occured: " + str(e))

    def hash_value(self, data):
        """
        Calculate SHA256 hash value of the passed bytes.

        Args:
            data (bytes): Data to calculate SHA256 hash for

        Returns:
            SHA256 Hash value

        Raises:
            None
        """
        try:
            extracted_bytes = self.extractBytes(data)
            return hashlib.sha256(extracted_bytes).hexdigest()
        except Exception as e:
            print("[-] Error occured: " + str(e))
