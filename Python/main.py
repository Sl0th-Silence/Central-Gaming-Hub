#make an asyncweb scraper to grab all achievement docs
import time
import asyncio
from bs4 import BeautifulSoup
import aiohttp as aiohttp
from urllib.parse import urljoin
import pprint

URL = "https://www.powerpyx.com"

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def crawl_names():
    games_path = []

    content = await fetch(urljoin(URL, "/guides"))
    soup = BeautifulSoup(content, "html.parser")

    #grab whole page
    all_names = soup.find_all("td", {"class": "column-1"})
    #all_dates = soup.find_all("td", {"class": "column-2"}) # This is for the dates? Maybe?
    #Then iterate so it only counts as one request
    #Follows the robots.txt guidelines

    for each in all_names:
        a_tag = each.find("a")
        if a_tag and a_tag.has_attr("href"): #If theres an a tag and it has an href
            each_name = a_tag["href"].replace(URL, "") #Create an entry and remove the beginning of the url
            games_path.append(each_name)
    return games_path


#TODO
#Okay so to this point, we have a list of the links to each page
#We need to add each of them to the end of the URL

# ---------- RUN ------------ #
async def main():
    games_path = await crawl_names()
    pp = pprint.PrettyPrinter()

    pp.pprint(games_path)

asyncio.run(main())

