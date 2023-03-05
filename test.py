import requests

user = "UlascanErsoy"
repo = "UlascanErsoy.github.io"

url = "https://api.github.com/repos/{}/{}/git/trees/main?recursive=1".format(user, repo)
r = requests.get(url)
res = r.json()
print(res)
for file in res["tree"]:
    print(file["path"])
