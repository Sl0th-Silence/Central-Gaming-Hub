#make an asyncweb scraper to grab all achievement docs
import asyncio
from bs4 import BeautifulSoup
import aiohttp as aiohttp
from urllib.parse import urljoin
import pprint
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from tqdm import tqdm


load_dotenv()
URI = os.getenv("MONGO_URI")

#Connection to MongoDB
client = MongoClient(URI)
db = client["acheivement_guides"]
collection = db["guides"]

#Connect to the site
URL = "https://www.powerpyx.com"

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def crawl_names():
    games_path = {}

    content = await fetch(urljoin(URL, "/guides"))
    soup = BeautifulSoup(content, "html.parser")

    #grab whole page
    all_names = soup.find_all("td", {"class": "column-1"})
    #all_dates = soup.find_all("td", {"class": "column-2"}) # This is for the dates? Maybe?
    #Then iterate so it only counts as one request
    #Follows the robots.txt guidelines
    #If this runs more than once, ie; multiple pages before scraping, run utime.sleep(20)

    for each in all_names:
        a_tag = each.find("a")
        if a_tag and a_tag.has_attr("href"): #If theres an a tag and it has an href
            text = a_tag.get_text(strip=True)
            each_name = a_tag["href"]
            games_path[text] = {"name": each_name}
    return games_path

#def add_to_collection(games_path):
#    collection.insert_many(games_path.values())


#TODO
#Okay so to this point, we have a list of the links to each page
#We need to add each of them to the end of the URL

#Now we go inside each page and get digging

#test one
async def crawl_games(games_paths):
    content = await fetch(urljoin(URL, "/tormented-souls-2-walkthrough/"))
    soup = BeautifulSoup(content, "html.parser")
    information = [tag for tag in soup.find_all(class_="entry-content")
                   if tag.get("class") == ["entry-content"]]
    #What we need;
    #Trophy name / title
    #Information about broken into each section
    #Image or clip art



    #need to remove the comment list OR only grab what we need
    return information
async def crawl_logos():
    image_url = "https://www.steamgriddb.com/" #Add number per page on end
    image_content = await fetch(image_url)
    image_soup = BeautifulSoup(image_content, "html.parser")
    images = image_soup.find_all("img", class_="lazy entered loaded")
    image_urls = [img.get("data-src") or img.get("src")
                  for img in images
                  if img.get("data-src") or img.get("src")]

    return image_urls

# ---------- RUN ------------ #
async def main():
    games_path = await crawl_names()
    pp = pprint.PrettyPrinter()
    image_urls = await crawl_logos()
    pp.pprint(image_urls)
    #add_to_collection(games_path)
    #pp.pprint(games_path)
    #Add information to db
    #information = await crawl_games(games_path)
    #pp.pprint(information)
    #Close database
    client.close()
asyncio.run(main())

