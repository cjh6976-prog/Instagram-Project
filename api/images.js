

export default async function handler(request, res) {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  

  const data = {
  
    "images": [
      {
        "title": "Najee Harris",
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2016",
          "channelName": "@SteelersFan"
        },
        "image": {
          "full": "https://i.pinimg.com/originals/e2/8c/19/e28c1933cecb8966f7e4e5bcc4f59309.jpg",
          "thumbnail": "https://i.pinimg.com/originals/e2/8c/19/e28c1933cecb8966f7e4e5bcc4f59309.jpg"
        },
        "dateTaken": "October 14, 2024",
        "caption": "@SteelersFan: Najee Harris was my favorite player on the Steelers."
      },
      {
        "title": "T.J. Watt",
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2016",
          "channelName": "@SteelersFan"
        },
        "image": {
          "full": "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-12/TJ%20Watt%20Pittsburgh%20Steelers%202023.jpg?itok=45JtgCMl",
          "thumbnail": "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-12/TJ%20Watt%20Pittsburgh%20Steelers%202023.jpg?itok=45JtgCMl"
        },
        "dateTaken": "November 20, 2025",
        "caption": "@SteelersFan: T.J. Watt deserved to win defensive player of the year in 2023."
      },
      {
        "title": "D.K. Metcalf",
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2016",
          "channelName": "@SteelersFan"
        },
        "image": {
          "full": "https://s.yimg.com/ny/api/res/1.2/qiqc2zJVB7Z5PBbmF5w5sw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYyOTtjZj13ZWJw/https://media.zenfs.com/en/steelers_now_articles_971/08c96a866a903a53d7f5255ffe8df43c",
          "thumbnail": "https://s.yimg.com/ny/api/res/1.2/qiqc2zJVB7Z5PBbmF5w5sw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYyOTtjZj13ZWJw/https://media.zenfs.com/en/steelers_now_articles_971/08c96a866a903a53d7f5255ffe8df43c"
        },
        "dateTaken": "December 3, 2025",
        "caption": "@SteelersFan: D.K. Metcalf had an altercation with a Detroit Lions fan in the stands during a game in 2025."
      },
      {
        "title": "Michael Pittman Jr.",
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2016",
          "channelName": "@SteelersFan"
        },
        "image": {
          "full": "https://s.yimg.com/ny/api/res/1.2/SfewsGNxunhFfyzg8.dbxg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjc-/https://media.zenfs.com/en/aol_ny_post_us_news_articles_123/0b7fc449dd6d9def447024796e444f7b",
          "thumbnail": "https://s.yimg.com/ny/api/res/1.2/SfewsGNxunhFfyzg8.dbxg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjc-/https://media.zenfs.com/en/aol_ny_post_us_news_articles_123/0b7fc449dd6d9def447024796e444f7b"
        },
        "dateTaken": "March 15, 2026",
        "caption": "@SteelersFan: Michael Pittman Jr. was traded to the Steelers in 2026 and looks to take the place as the WR1 for the team."
      },
      {
        "title": "Aaron Rodgers",
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2016",
          "channelName": "@SteelersFan"
        },
        "image": {
          "full": "https://d.newsweek.com/en/full/2717722/aaron-rodgers.jpg",
          "thumbnail": "https://d.newsweek.com/en/full/2717722/aaron-rodgers.jpg"
        },
        "dateTaken": "December 5, 2025",
        "caption": "@SteelersFan: Aaron Rodgers joined the Steelers in 2025, and could possibly return in 2026."
      },
      {
        "title": "Jaylen Warren",
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2016",
          "channelName": "@SteelersFan"
        },
        "image": {
          "full": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/steelers/qfyvpxglzcnb9d2uoyqi",
          "thumbnail": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/steelers/qfyvpxglzcnb9d2uoyqi"
        },
        "dateTaken": "October 20, 2025",
        "caption": "@SteelersFan: Jaylen Warren is an amazing running back that is known for his hurdling ability."
      },
        {
          "title": "Pat Freiermuth",
          "username": "@SteelersFan",
          "author": {
            "name": "- Chris",
            "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            "since": "2016",
            "channelName": "@SteelersFan"
          },
          "image": {
            "full": "https://th.bing.com/th/id/R.68acf09d6d657badccc1d6ad0bf56b99?rik=h4dyMwUG4Kxb0Q&pid=ImgRaw&r=0",
            "thumbnail": "https://th.bing.com/th/id/R.68acf09d6d657badccc1d6ad0bf56b99?rik=h4dyMwUG4Kxb0Q&pid=ImgRaw&r=0"
          },
          "dateTaken": "December 25, 2024",
          "caption": "@SteelersFan: Pat Freiermuth is a talented tight end for the Steelers, and played for Penn State in college."
        },
          {
            "title": "George Pickens",
            "username": "@SteelersFan",
            "author": {
              "name": "- Chris",
              "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
              "since": "2016",
              "channelName": "@SteelersFan"
            },
            "image": {
              "full": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/12/1200/675/pickens.jpg?ve=1&tl=1",
              "thumbnail": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/12/1200/675/pickens.jpg?ve=1&tl=1"
            },
            "dateTaken": "December 24, 2023",
            "caption": "@SteelersFan: George Pickens was a talented wide receiver for the Steelers, but is now with the Dallas Cowboys."
          },
            {
              "title": "Chris Boswell",
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2016",
                "channelName": "@SteelersFan"
              },
              "image": {
                "full": "https://tse1.mm.bing.net/th/id/OIP.m_z8TccNemMmuQjUbZJoxgHaEg?rs=1&pid=ImgDetMain&o=7&rm=3",
                "thumbnail": "https://tse1.mm.bing.net/th/id/OIP.m_z8TccNemMmuQjUbZJoxgHaEg?rs=1&pid=ImgDetMain&o=7&rm=3"
              },
              "dateTaken": "November 30, 2025",
              "caption": "@SteelersFan: Chris Boswell is a reliable kicker for the Steelers, and considered one of the best in the league at his position."
            },
            {
              "title": "Calvin Austin",
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2016",
                "channelName": "@SteelersFan"
              },
              "image": {
                "full": "https://s.yimg.com/ny/api/res/1.2/fCn4udH7zlcyZQvz48hCwA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/sb_nation_articles_115/95c105bd0b5632e1e7b0ba4e5c2a6a33",
                "thumbnail": "https://s.yimg.com/ny/api/res/1.2/fCn4udH7zlcyZQvz48hCwA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/sb_nation_articles_115/95c105bd0b5632e1e7b0ba4e5c2a6a33"
              },
              "dateTaken": "December 10, 2025",
              "caption": "@SteelersFan: Calvin Austin was a speedy receiver that sadly isn't with the Steelers anymore, but had some great moments with the team during his time here."
            },
            {
              "title": "Jalen Ramsey",
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2016",
                "channelName": "@SteelersFan"
              },
              "image": {
                "full": "https://steelersnow.com/wp-content/uploads/2025/10/10-12-2025-Steelers-v-Browns-1317-scaled-e1760308609399.jpg",
                "thumbnail": "https://steelersnow.com/wp-content/uploads/2025/10/10-12-2025-Steelers-v-Browns-1317-scaled-e1760308609399.jpg"
              },
              "dateTaken": "October 12, 2025",
              "caption": "@SteelersFan: Jalen Ramsey is a talented cornerback for the Steelers. He is known for his physical style of play and ability to shut down top receivers, along with his trash talk that he has taken part in since his days at Florida State."
            },
            {
              "title": "Joey Porter Jr.",
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2016",
                "channelName": "@SteelersFan"
              },
              "image": {
                "full": "https://www.pennlive.com/resizer/v2/45N7YQYPVVDX7PWQ6M4H3SMG7M.jpg?auth=d645c72ed2ebf1c9776f5f725e5f35eb0bb56719aa9ec9a8a73a5e27aa9b271f&width=1280&quality=90",
                "thumbnail": "https://www.pennlive.com/resizer/v2/45N7YQYPVVDX7PWQ6M4H3SMG7M.jpg?auth=d645c72ed2ebf1c9776f5f725e5f35eb0bb56719aa9ec9a8a73a5e27aa9b271f&width=1280&quality=90"

              },
              "dateTaken": "November 1, 2025",
              "caption": "@SteelersFan: Joey Porter Jr. is one of my favorite Steelers. Joey has an amazing 2025 season and is best known for his senior season at Penn State."
            },
            {
              "title": "Cam Heyward",
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2016",
                "channelName": "@SteelersFan"
              },
              "image": {
                "full": "https://th.bing.com/th/id/R.050890e34dc5114f302f4a49ea7feeaf?rik=odTRWzhBoGFbgQ&pid=ImgRaw&r=0",
                "thumbnail": "https://th.bing.com/th/id/R.050890e34dc5114f302f4a49ea7feeaf?rik=odTRWzhBoGFbgQ&pid=ImgRaw&r=0"

              },
              "dateTaken": "September 15, 2025",
              "caption": "@SteelersFan: Cam Heyward is a dominant defensive lineman for the Steelers, known for his strength and leadership on the field."
            },
            {
              "title": "Antonio Brown",
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2016",
                "channelName": "@SteelersFan"
              },
              "image": {
                "full": "https://nypost.com/wp-content/uploads/sites/2/2022/01/10322-antonio-brown-3-1.jpg?quality=75&strip=all",
                "thumbnail": "https://nypost.com/wp-content/uploads/sites/2/2022/01/10322-antonio-brown-3-1.jpg?quality=75&strip=all"
              },
              "dateTaken": "October 10, 2017",
              "caption": "@SteelersFan: Antonio Brown could have been amazing, and could have been one of if not the greatest receivers of all time, but his off the field issues and attitude problems led to him being released by the Steelers and bouncing around the league before ultimately retiring."
            },
            {
              "title": "Le'Veon Bell",
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2016",
                "channelName": "@SteelersFan"
              },
              "image": {
                "full": "https://tse3.mm.bing.net/th/id/OIP.xFaVRV7sysJiIQr7JZ9sxgHaFS?rs=1&pid=ImgDetMain&o=7&rm=3",
                "thumbnail": "https://tse3.mm.bing.net/th/id/OIP.xFaVRV7sysJiIQr7JZ9sxgHaFS?rs=1&pid=ImgDetMain&o=7&rm=3"

              },
              "dateTaken": "December 4, 2016",
              "caption": "@SteelersFan: Le'Veon Bell was the player that made me fall in love with football. Watching Leveon vs. the Buffalo Bills in 2016 is still one of the most exciting games I have ever watched. To this day I still go back and watch Bell's highlights from his career."
            }
    ]
};
return res.status(200).json(data);
}