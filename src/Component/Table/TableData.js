const planetData = [
    {
      "status": 200,
      "response": {
        "0": {
          "name": "As",
          "full_name": "Ascendant",
          "local_degree": 27.569488877783385,
          "global_degree": 87.56948887778339,
          "rasi_no": 3,
          "zodiac": "Gemini",
          "house": 1,
          "nakshatra": "Punarvasu",
          "nakshatra_lord": "Jupiter",
          "nakshatra_pada": 3,
          "nakshatra_no": 7,
          "zodiac_lord": "Mercury",
          "is_planet_set": false,
          "lord_status": "-",
          "basic_avastha": "-",
          "is_combust": false
        },
        "1": {
          "name": "Su",
          "full_name": "Sun",
          "local_degree": 7.220457066672964,
          "global_degree": 7.220457066672964,
          "rasi_no": 1,
          "zodiac": "Aries",
          "house": 11,
          "speed_radians_per_day": 1.1291152263374483e-8,
          "retro": false,
          "nakshatra": "Ashvini",
          "nakshatra_lord": "Ketu",
          "nakshatra_pada": 3,
          "nakshatra_no": 1,
          "zodiac_lord": "Mars",
          "is_planet_set": false,
          "basic_avastha": "Kumara",
          "lord_status": "Malefic"
        },
        "2": {
          "name": "Mo",
          "full_name": "Moon",
          "local_degree": 18.660634460340304,
          "global_degree": 108.6606344603403,
          "rasi_no": 4,
          "zodiac": "Cancer",
          "house": 2,
          "speed_radians_per_day": 1.5201581790123448e-7,
          "retro": false,
          "nakshatra": "Ashlesha",
          "nakshatra_lord": "Mercury",
          "nakshatra_pada": 1,
          "nakshatra_no": 9,
          "zodiac_lord": "Moon",
          "is_planet_set": true,
          "basic_avastha": "Vriddha",
          "lord_status": "Neutral",
          "is_combust": false
        },
        "3": {
          "name": "Ma",
          "full_name": "Mars",
          "local_degree": 4.499931621419634,
          "global_degree": 64.49993162141963,
          "rasi_no": 3,
          "zodiac": "Gemini",
          "house": 1,
          "speed_radians_per_day": 7.0119598765430825e-9,
          "retro": false,
          "nakshatra": "Mrigashira",
          "nakshatra_lord": "Mars",
          "nakshatra_pada": 4,
          "nakshatra_no": 5,
          "zodiac_lord": "Mercury",
          "is_planet_set": false,
          "basic_avastha": "Bala",
          "lord_status": "Highly Malefic",
          "is_combust": false
        },
        "4": {
          "name": "Me",
          "full_name": "Mercury",
          "local_degree": 9.728014687152118,
          "global_degree": 9.728014687152118,
          "rasi_no": 1,
          "zodiac": "Aries",
          "house": 11,
          "speed_radians_per_day": 2.4659207818930094e-8,
          "retro": false,
          "nakshatra": "Ashvini",
          "nakshatra_lord": "Ketu",
          "nakshatra_pada": 3,
          "nakshatra_no": 1,
          "zodiac_lord": "Mars",
          "is_planet_set": false,
          "basic_avastha": "Kumara",
          "lord_status": "Benefic",
          "is_combust": true
        },
        "5": {
          "name": "Ju",
          "full_name": "Jupiter",
          "local_degree": 2.723725027916089,
          "global_degree": 302.7237250279161,
          "rasi_no": 11,
          "zodiac": "Aquarius",
          "house": 9,
          "speed_radians_per_day": 1.867926954732566e-9,
          "retro": false,
          "nakshatra": "Dhanista",
          "nakshatra_lord": "Mars",
          "nakshatra_pada": 3,
          "nakshatra_no": 23,
          "zodiac_lord": "Saturn",
          "is_planet_set": false,
          "basic_avastha": "Bala",
          "lord_status": "Neutral",
          "is_combust": false
        },
        "6": {
          "name": "Ve",
          "full_name": "Venus",
          "local_degree": 13.88753554576869,
          "global_degree": 13.88753554576869,
          "rasi_no": 1,
          "zodiac": "Aries",
          "house": 11,
          "speed_radians_per_day": 1.430041152263376e-8,
          "retro": false,
          "nakshatra": "Bharani",
          "nakshatra_lord": "Venus",
          "nakshatra_pada": 1,
          "nakshatra_no": 2,
          "zodiac_lord": "Mars",
          "is_planet_set": false,
          "basic_avastha": "Yuva",
          "lord_status": "Benefic",
          "is_combust": true
        },
        "7": {
          "name": "Sa",
          "full_name": "Saturn",
          "local_degree": 18.536295970766332,
          "global_degree": 288.53629597076633,
          "rasi_no": 10,
          "zodiac": "Capricorn",
          "house": 8,
          "speed_radians_per_day": 5.851337448558736e-10,
          "retro": false,
          "nakshatra": "Sravana",
          "nakshatra_lord": "Moon",
          "nakshatra_pada": 3,
          "nakshatra_no": 22,
          "zodiac_lord": "Saturn",
          "is_planet_set": false,
          "basic_avastha": "Vriddha",
          "lord_status": "Benefic",
          "is_combust": false
        },
        "8": {
          "name": "Ra",
          "full_name": "Rahu",
          "local_degree": 18.892089436372345,
          "global_degree": 48.892089436372345,
          "rasi_no": 2,
          "zodiac": "Taurus",
          "house": 12,
          "retro": true,
          "nakshatra": "Rohini",
          "nakshatra_lord": "Moon",
          "nakshatra_pada": 3,
          "nakshatra_no": 4,
          "zodiac_lord": "Venus",
          "is_planet_set": false,
          "basic_avastha": "Vriddha",
          "lord_status": "Natural Malefic",
          "is_combust": false
        },
        "9": {
          "name": "Ke",
          "full_name": "Ketu",
          "local_degree": 18.892089436372345,
          "global_degree": 228.89208943637234,
          "rasi_no": 8,
          "zodiac": "Scorpio",
          "house": 6,
          "retro": true,
          "nakshatra": "Jyeshtha",
          "nakshatra_lord": "Mercury",
          "nakshatra_pada": 1,
          "nakshatra_no": 18,
          "zodiac_lord": "Mars",
          "is_planet_set": true,
          "basic_avastha": "Vriddha",
          "lord_status": "Natural Malefic",
          "is_combust": false
        },
        "birth_dasa": "Mercury>Ke>Ve",
        "current_dasa": "Ke>Ke>Ke",
        "birth_dasa_time": "06/01/2018",
        "current_dasa_time": "30/10/2023",
        "lucky_gem": ["emerald"],
        "lucky_num": [5],
        "lucky_colors": ["black", "red"],
        "lucky_letters": ["D"],
        "lucky_name_start": ["Di", "Du", "Dae", "Do"],
        "rasi": "Cancer",
        "nakshatra": "Ashlesha",
        "nakshatra_pada": 1,
        "panchang": {
          "ayanamsa": 24.157071540169,
          "ayanamsa_name": "Lahiri",
          "karana": "Kaulava",
          "yoga": "Soola",
          "day_of_birth": "Wednesday",
          "day_lord": "Mercury",
          "hora_lord": "Sun",
          "sunrise_at_birth": "06:12:00",
          "sunset_at_birth": "18:29:00",
          "tithi": "S.Navami"
        },
        "ghatka_chakra": {
          "rasi": "Leo",
          "tithi": ["2 (dvitiya)", "7 (saptami)", "12 (dwadasi)"],
          "day": "Wednesday",
          "nakshatra": "Anuradha",
          "tatva": "Prithvi (Earth)",
          "lord": "Mercury",
          "same_sex_lagna": "Libra",
          "opposite_sex_lagna": "Aries"
        }
      }
    }
  ];

  export default planetData;