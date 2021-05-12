# Anime List (AnimeDatabase)

AnimeDatabase collects data from the Jikan API, an unofficial MyAnimeList API, and displays it to the AnimeDatabase website. You're able to search up the top results of any anime you type and you're also able to look at the Top section which displays the Top results of certain categories such as Manga and Upcoming Animes.

## Things you need to do before running the web-app
First, you need to have Node installed. Go ahead and download Node first so that you can run the `npm` commands. <br/> <br/> 

Once you've installed Node, then what you want to do is find a directory in your computer where you want to download this repository. <br/> <br/> 

Once you've figured that out, open the terminal and navigate to that specific folder. If you're on windows, you can alternatively navigate to the folder where you want to download it and do `ctrl + right click` then click `open with terminal` or `open with git Bash`. Either works, we just need to have a terminal that navigates to where you want to download the repo. <br/> <br/> 

Once you're there, you need to clone the repository. Look up any guides on how to clone a repository. Then once you've cloned it, `cd` into the repository name, in this case it's `anime-list`. <br/> <br/>

Now we can get started on how to run the web-app <br/> <br/> 

## How to run the web-app
We're going to need two terminals that direct to where the `/anime-list` folder is at. The reason being is that we need one to run the backend side and one to the run the frontend side. <br/> <br/> 
On one terminal, you're going to want to type in `cd backend`, indicating that the terminal is to run the backend side. On the other terminal, you're going to want to type in `cd frontend`, indicating that the terminal is to run the frontend side. Below is an example of what you should see after cd'ing into those respective folders. <br/> <br/>
![image](https://user-images.githubusercontent.com/50897551/117921870-57115100-b2a6-11eb-9823-65c3bf52bcb8.png)
<br/> <br/>
In the backend terminal (the left terminal in the picture), you need to run the command `npm install` to install all the dependecies. 
There are some vulnerabilities but just follow the prompt given. Repeat with the frontend terminal (the right terminal in the picture). <br/> <br/>

In the backend terminal (the left terminal in the picture), you're going to want to run the command `node app.js` to run the express server. <br/> <br/>
In the frontend terminal (the right terminal in the picture), you're going to want to run the command `npm start` which starts the front end side. It's going to default to be running on `port 3000`, so when it says if you want to start it on a different port, put `yes`. <br/> <br/>

Now you should be able to run the website and be able to look at all the data from the Jikan Api!

## What the website looks like
### Demo Link
https://youtu.be/tNCyyuQv0iM
### Home Page
![image](https://user-images.githubusercontent.com/50897551/118029197-ca53ab00-b318-11eb-85e6-1bf4415941e4.png)
### After search results
![image](https://user-images.githubusercontent.com/50897551/118029332-e9ead380-b318-11eb-871d-41222cf05168.png)
### Top Manga
![image](https://user-images.githubusercontent.com/50897551/118029398-fc650d00-b318-11eb-9875-332c727cce82.png)
### Top Upcoming Anime
![image](https://user-images.githubusercontent.com/50897551/118029455-0a1a9280-b319-11eb-95de-6f6674b099f1.png)
### After clicking on one of the anime cards
![image](https://user-images.githubusercontent.com/50897551/118029542-1ef72600-b319-11eb-9f11-a65d6470c401.png)

## Frameworks and Tools used
1. VSCode
2. ExpressJS
3. ReactJS
4. Axios
5. React Router Dom
6. Bootstrap
7. NightwatchJS
8. SASS
