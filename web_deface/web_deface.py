# -*- coding: utf-8 -*-
from monitor import Monitor
from cache import Cache
import deface_utils
from crawler import Crawler
import platform


class WebDeface(object):
    """Class for WebDeface."""

    def __init__(self):
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

        # Create a monitor object
        self.monitor_obj = Monitor()

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
        # Start the monitor loop
        self.monitor_obj.monitor()


if __name__ == '__main__':

    web_deface_obj = WebDeface()
    web_deface_obj.start()
