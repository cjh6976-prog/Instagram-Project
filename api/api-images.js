import fetch from 'node-fetch';

export default async function handler(request, res) {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  

  const data = {
  
    "images": [
      {
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2015"
        },
        "image": {
          "full": "https://i.pinimg.com/originals/e2/8c/19/e28c1933cecb8966f7e4e5bcc4f59309.jpg"
        },
        "caption": "@SteelersFan Najee Harris"
      },
      {
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2015"
        },
        "image": {
          "full": "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-12/TJ%20Watt%20Pittsburgh%20Steelers%202023.jpg?itok=45JtgCMl"
        },
        "caption": "@SteelersFan T.J. Watt"
      },
      {
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2015"
        },
        "image": {
          "full": "https://s.yimg.com/ny/api/res/1.2/qiqc2zJVB7Z5PBbmF5w5sw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYyOTtjZj13ZWJw/https://media.zenfs.com/en/steelers_now_articles_971/08c96a866a903a53d7f5255ffe8df43c"
        },
        "caption": "@SteelersFan D.K. Metcalf"
      },
      {
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2015"
        },
        "image": {
          "full": "https://s.yimg.com/ny/api/res/1.2/SfewsGNxunhFfyzg8.dbxg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjc-/https://media.zenfs.com/en/aol_ny_post_us_news_articles_123/0b7fc449dd6d9def447024796e444f7b"
        },
        "caption": "@SteelersFan Michael Pittman Jr."
      },
      {
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2015"
        },
        "image": {
          "full": "https://d.newsweek.com/en/full/2717722/aaron-rodgers.jpg"
        },
        "caption": "@SteelersFan Aaron Rodgers"
      },
      {
        "username": "@SteelersFan",
        "author": {
          "name": "- Chris",
          "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "since": "2015"
        },
        "image": {
          "full": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/steelers/qfyvpxglzcnb9d2uoyqi"
        },
        "caption": "@SteelersFan Jaylen Warren"
      },
        {
          "username": "@SteelersFan",
          "author": {
            "name": "- Chris",
            "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            "since": "2015"
          },
          "image": {
            "full": "https://th.bing.com/th/id/R.68acf09d6d657badccc1d6ad0bf56b99?rik=h4dyMwUG4Kxb0Q&pid=ImgRaw&r=0"
          },
          "caption": "@SteelersFan Pat Freiermuth"
        },
          {
            "username": "@SteelersFan",
            "author": {
              "name": "- Chris",
              "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
              "since": "2015"
            },
            "image": {
              "full": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/12/1200/675/pickens.jpg?ve=1&tl=1"
            },
            "caption": "@SteelersFan George Pickens"
          },
            {
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2015"
              },
              "image": {
                "full": "https://tse1.mm.bing.net/th/id/OIP.m_z8TccNemMmuQjUbZJoxgHaEg?rs=1&pid=ImgDetMain&o=7&rm=3"
              },
              "caption": "@SteelersFan Chris Boswell"
            },
            {
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2015"
              },
              "image": {
                "full": "https://s.yimg.com/ny/api/res/1.2/fCn4udH7zlcyZQvz48hCwA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/sb_nation_articles_115/95c105bd0b5632e1e7b0ba4e5c2a6a33"
              },
              "caption": "@SteelersFan Calvin Austin"
            },
            {
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2015"
              },
              "image": {
                "full": "https://steelersnow.com/wp-content/uploads/2025/10/10-12-2025-Steelers-v-Browns-1317-scaled-e1760308609399.jpg"
              },
              "caption": "@SteelersFan Jalen Ramsey"
            },
            {
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2015"
              },
              "image": {
                "full": "https://www.pennlive.com/resizer/v2/45N7YQYPVVDX7PWQ6M4H3SMG7M.jpg?auth=d645c72ed2ebf1c9776f5f725e5f35eb0bb56719aa9ec9a8a73a5e27aa9b271f&width=1280&quality=90"
              },
              "caption": "@SteelersFan Joey Porter Jr."
            },
            {
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2015"
              },
              "image": {
                "full": "https://th.bing.com/th/id/R.050890e34dc5114f302f4a49ea7feeaf?rik=odTRWzhBoGFbgQ&pid=ImgRaw&r=0"
              },
              "caption": "@SteelersFan Cam Heyward"
            },
            {
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2015"
              },
              "image": {
                "full": "https://nypost.com/wp-content/uploads/sites/2/2022/01/10322-antonio-brown-3-1.jpg?quality=75&strip=all"
              },
              "caption": "@SteelersFan Antonio Brown"
            },
            {
              "username": "@SteelersFan",
              "author": {
                "name": "- Chris",
                "profilePicture": "https://www.bing.com/th/id/OIP.xq-SojxDP9ibrpBnrjN6-QHaEo?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "since": "2015"
              },
              "image": {
                "full": "https://tse3.mm.bing.net/th/id/OIP.xFaVRV7sysJiIQr7JZ9sxgHaFS?rs=1&pid=ImgDetMain&o=7&rm=3"
              },
              "caption": "@SteelersFan LeVon Bell"
            }
    ]
};
return res.status(200).json(data);
}