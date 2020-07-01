#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

# Important: Changing SITEURL may break links in deploy-previews
SITEURL = "https://cmcai0104.github.io"
MAILCHIMP_FORM_ACTION = os.environ.get("MAILCHIMP_FORM_ACTION")
UTTERANCES_REPO = os.environ.get("UTTERANCES_REPO")
UTTERANCES_LABEL = os.environ.get("UTTERANCES_LABEL")
# filetime_from_git is very slow. Use it in production only
# to avoid slow build times during development
# PLUGINS.append("filetime_from_git")
PLUGINS.append("sitemap")


# If your site is available via HTTPS, make sure SITEURL begins with https://
SITEURL = 'https://cmcai0104.github.io'
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

#DISQUS_SITENAME = ""
#GOOGLE_ANALYTICS = ""