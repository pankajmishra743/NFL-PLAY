import os

import pandas as pd
import numpy as np
import json

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template, request, flash, redirect
from flask_sqlalchemy import SQLAlchemy

#################################################

app = Flask(__name__)

#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///datasource/rawdata/nfl.db"
db = SQLAlchemy(app)

#-----Underscores in Tables dont work well-------
#-----Following automap_Base is only for weather dataForBarGraph -------
engine = create_engine("sqlite:///datasource/rawdata/nfl.db",connect_args={'check_same_thread': False})
Base = automap_base()
Base.prepare(engine, reflect=True)
data_bar = Base.classes.dataForBarGraph
session = Session(engine)
#------------------------------------------------

#-------ALL Html Template Roots-STARTS-----------------
@app.route("/")
def index():
    """Return the HEAT-MAP homepage."""
    return render_template("index.html")

@app.route("/weather")
def indexW():
    return render_template("lp_weather.html")

@app.route("/injuries")
def indexS():
    return render_template("lp_spark.html")

@app.route("/teamstats")
def indexT():
    return render_template("lp_twist.html")
#-------ALL Html Template Roots-ENDS-----------------


#---ROUTES for Weather / Plotly--STARTS--------------------
@app.route('/names')
def names():
    """Return a list of sample names."""

    stmt = session.query(data_bar).statement
    df = pd.read_sql_query(stmt, session.bind)
    df.set_index('index', inplace=True)
    df.Year = df.Year.astype(str)
    #print(df.Year)
    
    return jsonify(list(df.Year.astype(str)))

@app.route('/metadata/<year>')
def sample_metadata(year):
    """Return the MetaData for a given Year."""
    sel = [data_bar.avg_Humidity, data_bar.avg_Temp,
           data_bar.avg_Wind_Chill, data_bar.avg_Wind_Mph]

    results = session.query(*sel).\
        filter(data_bar.Year == year).all()

    game_metadata = {}

    for result in results:
        game_metadata['Avg Humidity'] = result[0]
        game_metadata['Avg. Temp'] = result[1]
        game_metadata['Avg. Wind Chill'] = result[2]
        game_metadata['Avg. Wind Mph'] = result[3]

    return jsonify(game_metadata)
    
@app.route('/homedata/<year>')
def sample_homedata(year):
    """Return the homeData for a given Year."""
    sel = [data_bar.homeTeam_winsWith_belowAvg_Humidity, data_bar.homeTeam_winsWith_belowAvg_Temp,
           data_bar.homeTeam_winsWith_belowAvg_WindChill, data_bar.homeTeam_winsWith_belowAvg_WindMph,
           data_bar.homeTeam_winsWith_aboveAvg_Humidity, data_bar.homeTeam_winsWith_aboveAvg_Temp,
           data_bar.homeTeam_winsWith_aboveAvg_WindChill, data_bar.homeTeam_winsWith_aboveAvg_WindMph]

    results = session.query(*sel).\
        filter(data_bar.Year == year).all()

    game_homedata = {}
    for result in results:
        game_homedata['Homes Wins Count With Below Avg Humidity'] = result[0]
        game_homedata['Homes Wins Count With Below Avg Temp'] = result[1]
        game_homedata['Homes Wins Count With Below Avg Wind Chill'] = result[2]
        game_homedata['Homes Wins Count With Below Avg Wind Mph'] = result[3]
        game_homedata['Homes Wins Count With Above Avg Humidity'] = result[4]
        game_homedata['Homes Wins Count With Above Avg Temp'] = result[5]
        game_homedata['Homes Wins Count With Above Avg Wind Chill'] = result[6]
        game_homedata['Homes Wins Count With Above Avg Wind Mph'] = result[7] 

    return jsonify(result)  

@app.route('/awaydata/<year>')
def sample_awaydata(year):
    """Return the awayData for a given Year."""
    sel = [data_bar.awayTeam_winsWith_belowAvg_Humidity, data_bar.awayTeam_winsWith_belowAvg_Temp,
           data_bar.awayTeam_winsWith_belowAvg_WindChill, data_bar.awayTeam_winsWith_belowAvg_WindMph,
           data_bar.awayTeam_winsWith_aboveAvg_Humidity, data_bar.awayTeam_winsWith_aboveAvg_Temp,
           data_bar.awayTeam_winsWith_aboveAvg_WindChill, data_bar.awayTeam_winsWith_aboveAvg_WindMph]

    results = session.query(*sel).\
        filter(data_bar.Year == year).all()

    game_awaydata = {}
    for result in results:
        game_awaydata['aways Wins Count With Below Avg Humidity'] = result[0]
        game_awaydata['aways Wins Count With Below Avg Temp'] = result[1]
        game_awaydata['aways Wins Count With Below Avg Wind Chill'] = result[2]
        game_awaydata['aways Wins Count With Below Avg Wind Mph'] = result[3]
        game_awaydata['aways Wins Count With Above Avg Humidity'] = result[4]
        game_awaydata['aways Wins Count With Above Avg Temp'] = result[5]
        game_awaydata['aways Wins Count With Above Avg Wind Chill'] = result[6]
        game_awaydata['aways Wins Count With Above Avg Wind Mph'] = result[7] 
        

    return jsonify(result)
    
@app.route('/entiredata/<year>')
def sample_entiredata(year):
    """Return the entireData for a given Year."""
    sel = [data_bar.avg_Humidity, data_bar.avg_Temp,
           data_bar.avg_Wind_Chill, data_bar.avg_Wind_Mph,
           data_bar.homeTeam_winsWith_belowAvg_Humidity, data_bar.homeTeam_winsWith_belowAvg_Temp,
           data_bar.homeTeam_winsWith_belowAvg_WindChill, data_bar.homeTeam_winsWith_belowAvg_WindMph,
           data_bar.homeTeam_winsWith_aboveAvg_Humidity, data_bar.homeTeam_winsWith_aboveAvg_Temp,
           data_bar.homeTeam_winsWith_aboveAvg_WindChill, data_bar.homeTeam_winsWith_aboveAvg_WindMph,
           data_bar.awayTeam_winsWith_belowAvg_Humidity, data_bar.awayTeam_winsWith_belowAvg_Temp,
           data_bar.awayTeam_winsWith_belowAvg_WindChill, data_bar.awayTeam_winsWith_belowAvg_WindMph,
           data_bar.awayTeam_winsWith_aboveAvg_Humidity, data_bar.awayTeam_winsWith_aboveAvg_Temp,
           data_bar.awayTeam_winsWith_aboveAvg_WindChill, data_bar.awayTeam_winsWith_aboveAvg_WindMph]

    results = session.query(*sel).\
        filter(data_bar.Year == year).all()

    game_entiredata = {}
    for result in results:
        game_entiredata['Avg Humidity'] = result[0]
        game_entiredata['Avg. Temp'] = result[1]
        game_entiredata['Avg. Wind Chill'] = result[2]
        game_entiredata['Avg. Wind Mph'] = result[3]
        game_entiredata['Home Wins Count With Below Avg Humidity'] = result[4]
        game_entiredata['Home Wins Count With Below Avg Temp'] = result[5]
        game_entiredata['Home Wins Count With Below Avg Wind Chill'] = result[6]
        game_entiredata['Home Wins Count With Below Avg Wind Mph'] = result[7]
        game_entiredata['Home Wins Count With Above Avg Humidity'] = result[8]
        game_entiredata['Home Wins Count With Above Avg Temp'] = result[9]
        game_entiredata['Home Wins Count With Above Avg Wind Chill'] = result[10]
        game_entiredata['Home Wins Count With Above Avg Wind Mph'] = result[11]
        game_entiredata['Away Wins Count With Below Avg Humidity'] = result[12]
        game_entiredata['Away Wins Count With Below Avg Temp'] = result[13]
        game_entiredata['Away Wins Count With Below Avg Wind Chill'] = result[14]
        game_entiredata['Away Wins Count With Below Avg Wind Mph'] = result[15]
        game_entiredata['Away Wins Count With Above Avg Humidity'] = result[16]
        game_entiredata['Away Wins Count With Above Avg Temp'] = result[17]
        game_entiredata['Away Wins Count With Above Avg Wind Chill'] = result[18]
        game_entiredata['Away Wins Count With Above Avg Wind Mph'] = result[19]

    return jsonify(game_entiredata)
#---ROUTES for Weather / Plotly--STARTS--------------------
    
#---ROUTES Main HeatMap-STARTS----------------------------------
@app.route("/draftpick/<team_name>/<year_range1>/<year_range2>")
def draftpick(team_name, year_range1, year_range2):
    df = pd.read_sql('select * from drafts', engine)
    year_range1 = int(year_range1)
    year_range2 = int(year_range2)
    
    df_filter = df['season'].between(year_range1, year_range2, inclusive=True)
    df = df[df_filter]
    df = df[(df.team == team_name)]
    new_df = df.groupby("position").count()
    new_df = new_df.drop(['draft_round', 'draft_pick', 'team', 'player_id', 'player_name', 'college_id', 'age' ], axis = 1) 

    results = new_df.to_dict()
    
    return json.dumps(results)

@app.route("/draftseasons")
def season_team_draft():
    """Return All Season MetadataValues."""

    results = db.engine.execute("select dr.season\
        from drafts dr\
        group by dr.season order by dr.season desc ")
    seasons = []
    for row in results:
        seasons.append(row[0])
    data = {
        "seasons": seasons,
    }
    return jsonify(data)

@app.route("/teamnames")
def team_name():
    """Return All Season MetadataValues."""

    results = db.engine.execute("select dr.team\
        from drafts dr\
        group by dr.team order by dr.team desc ")
    teams = []
    for row in results:
        teams.append(row[0])

    data = {
        "teams": teams,
    }
    return jsonify(data)
#---ROUTES Main HeatMap-STARTS----------------------------------


#---ROUTES bar and sparkline and Partial Main HeatMap- STARTS----
@app.route("/teamstat/metadata")
def get_static_metadata():
    """Return All Season MetadataValues."""

    results = db.engine.execute("select st.season\
        from stats_team st\
        group by st.season order by st.season desc ")
    seasons = []
    for row in results:
        seasons.append(row[0])

    metadata_dict = {
        "pass_attempts": "Pass Attempts",
        "pass_completions": "Pass Completions",
        "pass_touchdowns": "Pass Touchdowns",
        "rush_attempts": "Rush Attempts",
        "rush_touchdowns": "Rush Touchdowns",
        "first_downs": "First Downs",
        "sacks": "Sacks",
        "pass_interceptions": "Pass Interceptions",
        "fumbles": "Fumbles",
        "fumbles_lost": "Fumbles Lost",
        "turnovers": "Turnovers",
        "penalties": "Penalties"
    }

    data = {
        "seasons": seasons,
        "measures": metadata_dict
    }

    return jsonify(data)

@app.route("/teamstats/<season>")
def team_stats_metadata(season):
    """Return the MetaData for a given sample."""

    results = db.engine.execute("select st.season,\
        t.team,\
        t.team_name,\
        sum(st.pass_attempts) as pass_attempts,\
        sum(st.pass_completions) as pass_completions,\
        sum(st.pass_tds) as pass_touchdowns,\
        sum(st.rush_attempts) as rush_attempts,\
        sum(st.rush_tds) as rush_touchdowns,\
        sum(st.first_downs) as first_downs,\
        sum(st.sacks) as sacks,\
        sum(st.pass_interceptions) as pass_interceptions,\
        sum(st.fumbles) as fumbles,\
        sum(st.fumbles_lost) as fumbles_lost,\
        sum(st.turnovers) as turnovers,\
        sum(st.pentalties) as penalties\
    from stats_team st,\
         teams t\
    where\
        st.team = t.team\
        and st.season=:season\
    group by st.season, st.team", {'season': season})

    # Create a dictionary entry for each row of metadata information
    team_stats = []
    for row in results:
        stats_dict = {}
        stats_dict["season"] = row[0]
        stats_dict["team"] = row[1]
        stats_dict["team_name"] = row[2]
        stats_dict["pass_attempts"] = row[3]
        stats_dict["pass_completions"] = row[4]
        stats_dict["pass_touchdowns"] = row[5]
        stats_dict["rush_attempts"] = row[6]
        stats_dict["rush_touchdowns"] = row[7]
        stats_dict["first_downs"] = row[8]
        stats_dict["sacks"] = row[9]
        stats_dict["pass_interceptions"] = row[10]
        stats_dict["fumbles"] = row[11]
        stats_dict["fumbles_lost"] = row[12]
        stats_dict["turnovers"] = row[13]
        stats_dict["penalties"] = row[14]
        team_stats.append(stats_dict)

    return jsonify(team_stats)
#---ROUTES bar and sparkline and Partial Main HeatMap- ENDS----

#------MANDATORY---Run Main APP-----
if __name__ == "__main__":
    app.run(debug=True)
