# -*- coding: utf-8 -*-
from hash_gen import Hash
import deface_utils
from tqdm import tqdm
import json
import time


class Cache(object):
    """Class for Cache."""

    def __init__(self,
                 path=None):
        """Initialize Cache class."""

        if path is None:
            self.path = 'crawled.txt'
        else:
            self.path = path

        self.JSON_PATH = 'hash.json'

        self.url = self.read_file()
        self.url = [line.strip('\n') for line in self.url]
        self.hash_obj = Hash()  # Intialize Hash object
        self.temp_dict = {}

    def read_file(self):
        """
        Read the file and return list of lines.

        Args:
            None

        Returns:
            list: (lines) List of read lines

        Raises:
            None
        """
        with open(self.path, 'r') as rfile:
            lines = rfile.readlines()
            return lines

    def generate_cache(self):
        """
        Generate SHA256 hash from the content of the
        requested page.

        Args:
            None

        Returns:
            None

        Raises:
            None
        """
        t1 = time.time()

        print('[!] Generating hash')
        print('[!] Press CTRL+C to exit\n')
        try:
            with tqdm(total=len(self.url)) as progress_bar:
                for url in self.url:
                    data = deface_utils.call_url(url)
                    self.temp_dict[url] = self.hash_obj.hash_value(data)
                    # Increment progress bar
                    progress_bar.update(1)
        except KeyboardInterrupt:
            print("[-] Keyboard Interrupt detected")
        except Exception as e:
            print("[-] Error occured: " + str(e))
        finally:
            print('\n[!] Writing down cache...')
            with open(self.JSON_PATH, 'w') as jfile:
                json.dump(self.temp_dict, jfile)

            t2 = time.time()
            print("[+] Cache process completed in {}".format(t2-t1))
