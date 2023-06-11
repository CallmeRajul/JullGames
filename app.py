from flask import Flask, render_template, url_for

app = Flask(__name__)

# render templates

dashboard = 'index.html'
gamers = 'gamers.html'
game = 'game.html'
leaderboard = 'leaderboard.html'
news = 'news.html'
player = 'player.html'
shop = 'shop.html'
forum = 'forum.html'
report = 'report.html'
settings = 'settings.html'

# app routes

@app.route('/')
def Dashboard():
    return render_template(dashboard)

@app.route('/gamers')
def Gamers():
    return render_template(gamers)

@app.route('/game')
def Game():
    return render_template(game)

@app.route('/leaderboard')
def Leaderboard():
    return render_template(leaderboard)

@app.route('/news')
def News():
    return render_template(news)

@app.route('/player')
def Player():
    return render_template(player)

@app.route('/report')
def Report():
    return render_template(report)

@app.route('/settings')
def Settings():
    return render_template(settings)

@app.route('/shop')
def Shop():
    return render_template(shop)

@app.route('/forum')
def Forum():
    return render_template(forum)

if __name__ == '__main__':
    app.run(debug=True)
