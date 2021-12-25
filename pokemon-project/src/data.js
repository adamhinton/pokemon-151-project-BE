//I mapped over this to add in dex entries from another API. This is the new data which is a result of that mapping. The old, original data is in olddata.js.

export default
[
  {
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
      "type": [
          "Grass",
          "Poison"
      ],
      "height": "0.71 m",
      "weight": "6.9 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.69,
      "avg_spawns": 69,
      "spawn_time": "20:00",
      "multipliers": [
          1.58
      ],
      "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
      ],
      "next_evolution": [
          {
              "num": "002",
              "name": "Ivysaur"
          },
          {
              "num": "003",
              "name": "Venusaur"
          }
      ],
      "dexEntry": "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon."
  },
  {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
      "type": [
          "Grass",
          "Poison"
      ],
      "height": "0.99 m",
      "weight": "13.0 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.042,
      "avg_spawns": 4.2,
      "spawn_time": "07:00",
      "multipliers": [
          1.2,
          1.6
      ],
      "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "001",
              "name": "Bulbasaur"
          }
      ],
      "next_evolution": [
          {
              "num": "003",
              "name": "Venusaur"
          }
      ],
      "dexEntry": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
  },
  {
      "id": 3,
      "num": "003",
      "name": "Venusaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
      "type": [
          "Grass",
          "Poison"
      ],
      "height": "2.01 m",
      "weight": "100.0 kg",
      "candy": "Bulbasaur Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "11:30",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "001",
              "name": "Bulbasaur"
          },
          {
              "num": "002",
              "name": "Ivysaur"
          }
      ],
      "dexEntry": "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
  },
  {
      "id": 4,
      "num": "004",
      "name": "Charmander",
      "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
      "type": [
          "Fire"
      ],
      "height": "0.61 m",
      "weight": "8.5 kg",
      "candy": "Charmander Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.253,
      "avg_spawns": 25.3,
      "spawn_time": "08:45",
      "multipliers": [
          1.65
      ],
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "005",
              "name": "Charmeleon"
          },
          {
              "num": "006",
              "name": "Charizard"
          }
      ],
      "dexEntry": "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
  },
  {
      "id": 5,
      "num": "005",
      "name": "Charmeleon",
      "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
      "type": [
          "Fire"
      ],
      "height": "1.09 m",
      "weight": "19.0 kg",
      "candy": "Charmander Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "19:00",
      "multipliers": [
          1.79
      ],
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "004",
              "name": "Charmander"
          }
      ],
      "next_evolution": [
          {
              "num": "006",
              "name": "Charizard"
          }
      ],
      "dexEntry": "When it swings its burning tail, it elevates the temperature to unbearably high levels."
  },
  {
      "id": 6,
      "num": "006",
      "name": "Charizard",
      "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
      "type": [
          "Fire",
          "Flying"
      ],
      "height": "1.70 m",
      "weight": "90.5 kg",
      "candy": "Charmander Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0031,
      "avg_spawns": 0.31,
      "spawn_time": "13:34",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Electric",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "004",
              "name": "Charmander"
          },
          {
              "num": "005",
              "name": "Charmeleon"
          }
      ],
      "dexEntry": "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
  },
  {
      "id": 7,
      "num": "007",
      "name": "Squirtle",
      "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
      "type": [
          "Water"
      ],
      "height": "0.51 m",
      "weight": "9.0 kg",
      "candy": "Squirtle Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.58,
      "avg_spawns": 58,
      "spawn_time": "04:25",
      "multipliers": [
          2.1
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "008",
              "name": "Wartortle"
          },
          {
              "num": "009",
              "name": "Blastoise"
          }
      ],
      "dexEntry": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth."
  },
  {
      "id": 8,
      "num": "008",
      "name": "Wartortle",
      "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
      "type": [
          "Water"
      ],
      "height": "0.99 m",
      "weight": "22.5 kg",
      "candy": "Squirtle Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "07:02",
      "multipliers": [
          1.4
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "prev_evolution": [
          {
              "num": "007",
              "name": "Squirtle"
          }
      ],
      "next_evolution": [
          {
              "num": "009",
              "name": "Blastoise"
          }
      ],
      "dexEntry": "It cleverly controls its furry ears and tail to maintain its balance while swimming."
  },
  {
      "id": 9,
      "num": "009",
      "name": "Blastoise",
      "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
      "type": [
          "Water"
      ],
      "height": "1.60 m",
      "weight": "85.5 kg",
      "candy": "Squirtle Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0067,
      "avg_spawns": 0.67,
      "spawn_time": "00:06",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "prev_evolution": [
          {
              "num": "007",
              "name": "Squirtle"
          },
          {
              "num": "008",
              "name": "Wartortle"
          }
      ],
      "dexEntry": "The rocket cannons on its shell fire jets of water capable of punching holes through thick steel."
  },
  {
      "id": 10,
      "num": "010",
      "name": "Caterpie",
      "img": "http://www.serebii.net/pokemongo/pokemon/010.png",
      "type": [
          "Bug"
      ],
      "height": "0.30 m",
      "weight": "2.9 kg",
      "candy": "Caterpie Candy",
      "candy_count": 12,
      "egg": "2 km",
      "spawn_chance": 3.032,
      "avg_spawns": 303.2,
      "spawn_time": "16:35",
      "multipliers": [
          1.05
      ],
      "weaknesses": [
          "Fire",
          "Flying",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "011",
              "name": "Metapod"
          },
          {
              "num": "012",
              "name": "Butterfree"
          }
      ],
      "dexEntry": "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
  },
  {
      "id": 11,
      "num": "011",
      "name": "Metapod",
      "img": "http://www.serebii.net/pokemongo/pokemon/011.png",
      "type": [
          "Bug"
      ],
      "height": "0.71 m",
      "weight": "9.9 kg",
      "candy": "Caterpie Candy",
      "candy_count": 50,
      "egg": "Not in Eggs",
      "spawn_chance": 0.187,
      "avg_spawns": 18.7,
      "spawn_time": "02:11",
      "multipliers": [
          3.55,
          3.79
      ],
      "weaknesses": [
          "Fire",
          "Flying",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "010",
              "name": "Caterpie"
          }
      ],
      "next_evolution": [
          {
              "num": "012",
              "name": "Butterfree"
          }
      ],
      "dexEntry": "A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution."
  },
  {
      "id": 12,
      "num": "012",
      "name": "Butterfree",
      "img": "http://www.serebii.net/pokemongo/pokemon/012.png",
      "type": [
          "Bug",
          "Flying"
      ],
      "height": "1.09 m",
      "weight": "32.0 kg",
      "candy": "Caterpie Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.022,
      "avg_spawns": 2.2,
      "spawn_time": "05:23",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Electric",
          "Ice",
          "Flying",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "010",
              "name": "Caterpie"
          },
          {
              "num": "011",
              "name": "Metapod"
          }
      ],
      "dexEntry": "In battle, it flaps its wings at high speed to release highly toxic dust into the air."
  },
  {
      "id": 13,
      "num": "013",
      "name": "Weedle",
      "img": "http://www.serebii.net/pokemongo/pokemon/013.png",
      "type": [
          "Bug",
          "Poison"
      ],
      "height": "0.30 m",
      "weight": "3.2 kg",
      "candy": "Weedle Candy",
      "candy_count": 12,
      "egg": "2 km",
      "spawn_chance": 7.12,
      "avg_spawns": 712,
      "spawn_time": "02:21",
      "multipliers": [
          1.01,
          1.09
      ],
      "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "014",
              "name": "Kakuna"
          },
          {
              "num": "015",
              "name": "Beedrill"
          }
      ],
      "dexEntry": "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies."
  },
  {
      "id": 14,
      "num": "014",
      "name": "Kakuna",
      "img": "http://www.serebii.net/pokemongo/pokemon/014.png",
      "type": [
          "Bug",
          "Poison"
      ],
      "height": "0.61 m",
      "weight": "10.0 kg",
      "candy": "Weedle Candy",
      "candy_count": 50,
      "egg": "Not in Eggs",
      "spawn_chance": 0.44,
      "avg_spawns": 44,
      "spawn_time": "02:30",
      "multipliers": [
          3.01,
          3.41
      ],
      "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "013",
              "name": "Weedle"
          }
      ],
      "next_evolution": [
          {
              "num": "015",
              "name": "Beedrill"
          }
      ],
      "dexEntry": "While awaiting evolution, it hides from predators under leaves and in nooks of branches."
  },
  {
      "id": 15,
      "num": "015",
      "name": "Beedrill",
      "img": "http://www.serebii.net/pokemongo/pokemon/015.png",
      "type": [
          "Bug",
          "Poison"
      ],
      "height": "0.99 m",
      "weight": "29.5 kg",
      "candy": "Weedle Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.051,
      "avg_spawns": 5.1,
      "spawn_time": "04:50",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "013",
              "name": "Weedle"
          },
          {
              "num": "014",
              "name": "Kakuna"
          }
      ],
      "dexEntry": "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail."
  },
  {
      "id": 16,
      "num": "016",
      "name": "Pidgey",
      "img": "http://www.serebii.net/pokemongo/pokemon/016.png",
      "type": [
          "Normal",
          "Flying"
      ],
      "height": "0.30 m",
      "weight": "1.8 kg",
      "candy": "Pidgey Candy",
      "candy_count": 12,
      "egg": "2 km",
      "spawn_chance": 15.98,
      "avg_spawns": 1.598,
      "spawn_time": "01:34",
      "multipliers": [
          1.71,
          1.92
      ],
      "weaknesses": [
          "Electric",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "017",
              "name": "Pidgeotto"
          },
          {
              "num": "018",
              "name": "Pidgeot"
          }
      ],
      "dexEntry": "Because it dislikes fighting, it protects itself by kicking up sand."
  },
  {
      "id": 17,
      "num": "017",
      "name": "Pidgeotto",
      "img": "http://www.serebii.net/pokemongo/pokemon/017.png",
      "type": [
          "Normal",
          "Flying"
      ],
      "height": "1.09 m",
      "weight": "30.0 kg",
      "candy": "Pidgey Candy",
      "candy_count": 50,
      "egg": "Not in Eggs",
      "spawn_chance": 1.02,
      "avg_spawns": 102,
      "spawn_time": "01:30",
      "multipliers": [
          1.79
      ],
      "weaknesses": [
          "Electric",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "016",
              "name": "Pidgey"
          }
      ],
      "next_evolution": [
          {
              "num": "018",
              "name": "Pidgeot"
          }
      ],
      "dexEntry": "It has outstanding vision. However high it flies, it is able to distinguish the movements of its prey."
  },
  {
      "id": 18,
      "num": "018",
      "name": "Pidgeot",
      "img": "http://www.serebii.net/pokemongo/pokemon/018.png",
      "type": [
          "Normal",
          "Flying"
      ],
      "height": "1.50 m",
      "weight": "39.5 kg",
      "candy": "Pidgey Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.13,
      "avg_spawns": 13,
      "spawn_time": "01:50",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "016",
              "name": "Pidgey"
          },
          {
              "num": "017",
              "name": "Pidgeotto"
          }
      ],
      "dexEntry": "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed."
  },
  {
      "id": 19,
      "num": "019",
      "name": "Rattata",
      "img": "http://www.serebii.net/pokemongo/pokemon/019.png",
      "type": [
          "Normal"
      ],
      "height": "0.30 m",
      "weight": "3.5 kg",
      "candy": "Rattata Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 13.05,
      "avg_spawns": 1.305,
      "spawn_time": "01:55",
      "multipliers": [
          2.55,
          2.73
      ],
      "weaknesses": [
          "Fighting"
      ],
      "next_evolution": [
          {
              "num": "020",
              "name": "Raticate"
          }
      ],
      "dexEntry": "Bites anything when it attacks. Small and very quick, it is a common sight in many places."
  },
  {
      "id": 20,
      "num": "020",
      "name": "Raticate",
      "img": "http://www.serebii.net/pokemongo/pokemon/020.png",
      "type": [
          "Normal"
      ],
      "height": "0.71 m",
      "weight": "18.5 kg",
      "candy": "Rattata Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.41,
      "avg_spawns": 41,
      "spawn_time": "01:56",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "prev_evolution": [
          {
              "num": "019",
              "name": "Rattata"
          }
      ],
      "dexEntry": "Its whiskers help it to maintain balance. Its fangs never stop growing, so it gnaws to pare them down."
  },
  {
      "id": 21,
      "num": "021",
      "name": "Spearow",
      "img": "http://www.serebii.net/pokemongo/pokemon/021.png",
      "type": [
          "Normal",
          "Flying"
      ],
      "height": "0.30 m",
      "weight": "2.0 kg",
      "candy": "Spearow Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 4.73,
      "avg_spawns": 473,
      "spawn_time": "12:25",
      "multipliers": [
          2.66,
          2.68
      ],
      "weaknesses": [
          "Electric",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "022",
              "name": "Fearow"
          }
      ],
      "dexEntry": "Inept at flying high. However, it can fly around very fast to protect its territory."
  },
  {
      "id": 22,
      "num": "022",
      "name": "Fearow",
      "img": "http://www.serebii.net/pokemongo/pokemon/022.png",
      "type": [
          "Normal",
          "Flying"
      ],
      "height": "1.19 m",
      "weight": "38.0 kg",
      "candy": "Spearow Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.15,
      "avg_spawns": 15,
      "spawn_time": "01:11",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "021",
              "name": "Spearow"
          }
      ],
      "dexEntry": "With its huge and magnificent wings, it can keep aloft without ever having to land for rest."
  },
  {
      "id": 23,
      "num": "023",
      "name": "Ekans",
      "img": "http://www.serebii.net/pokemongo/pokemon/023.png",
      "type": [
          "Poison"
      ],
      "height": "2.01 m",
      "weight": "6.9 kg",
      "candy": "Ekans Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.27,
      "avg_spawns": 227,
      "spawn_time": "12:20",
      "multipliers": [
          2.21,
          2.27
      ],
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "next_evolution": [
          {
              "num": "024",
              "name": "Arbok"
          }
      ],
      "dexEntry": "It always hides in grass. When first born, it has no poison, so its bite is painful, but harmless."
  },
  {
      "id": 24,
      "num": "024",
      "name": "Arbok",
      "img": "http://www.serebii.net/pokemongo/pokemon/024.png",
      "type": [
          "Poison"
      ],
      "height": "3.51 m",
      "weight": "65.0 kg",
      "candy": "Ekans Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.072,
      "avg_spawns": 7.2,
      "spawn_time": "01:50",
      "multipliers": null,
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "023",
              "name": "Ekans"
          }
      ],
      "dexEntry": "It is rumored that the ferocious warning markings on its belly differ from area to area."
  },
  {
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "img": "http://www.serebii.net/pokemongo/pokemon/025.png",
      "type": [
          "Electric"
      ],
      "height": "0.41 m",
      "weight": "6.0 kg",
      "candy": "Pikachu Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 0.21,
      "avg_spawns": 21,
      "spawn_time": "04:00",
      "multipliers": [
          2.34
      ],
      "weaknesses": [
          "Ground"
      ],
      "next_evolution": [
          {
              "num": "026",
              "name": "Raichu"
          }
      ],
      "dexEntry": "When several Pikachu gather, their electricity could build and cause lightning storms."
  },
  {
      "id": 26,
      "num": "026",
      "name": "Raichu",
      "img": "http://www.serebii.net/pokemongo/pokemon/026.png",
      "type": [
          "Electric"
      ],
      "height": "0.79 m",
      "weight": "30.0 kg",
      "candy": "Pikachu Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0076,
      "avg_spawns": 0.76,
      "spawn_time": "23:58",
      "multipliers": null,
      "weaknesses": [
          "Ground"
      ],
      "prev_evolution": [
          {
              "num": "025",
              "name": "Pikachu"
          }
      ],
      "dexEntry": "Its long tail serves as a ground to protect itself from its own high voltage power."
  },
  {
      "id": 27,
      "num": "027",
      "name": "Sandshrew",
      "img": "http://www.serebii.net/pokemongo/pokemon/027.png",
      "type": [
          "Ground"
      ],
      "height": "0.61 m",
      "weight": "12.0 kg",
      "candy": "Sandshrew Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 1.11,
      "avg_spawns": 111,
      "spawn_time": "01:58",
      "multipliers": [
          2.45
      ],
      "weaknesses": [
          "Water",
          "Grass",
          "Ice"
      ],
      "next_evolution": [
          {
              "num": "028",
              "name": "Sandslash"
          }
      ],
      "dexEntry": "Its body is dry. When it gets cold at night, its hide is said to become coated with a fine dew."
  },
  {
      "id": 28,
      "num": "028",
      "name": "Sandslash",
      "img": "http://www.serebii.net/pokemongo/pokemon/028.png",
      "type": [
          "Ground"
      ],
      "height": "0.99 m",
      "weight": "29.5 kg",
      "candy": "Sandshrew Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.037,
      "avg_spawns": 3.7,
      "spawn_time": "12:34",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Grass",
          "Ice"
      ],
      "prev_evolution": [
          {
              "num": "027",
              "name": "Sandshrew"
          }
      ],
      "dexEntry": "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape."
  },
  {
      "id": 29,
      "num": "029",
      "name": "Nidoran ♀ (Female)",
      "img": "http://www.serebii.net/pokemongo/pokemon/029.png",
      "type": [
          "Poison"
      ],
      "height": "0.41 m",
      "weight": "7.0 kg",
      "candy": "Nidoran ♀ (Female) Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 1.38,
      "avg_spawns": 138,
      "spawn_time": "01:51",
      "multipliers": [
          1.63,
          2.48
      ],
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "next_evolution": [
          {
              "num": "030",
              "name": "Nidorina"
          },
          {
              "num": "031",
              "name": "Nidoqueen"
          }
      ]
  },
  {
      "id": 30,
      "num": "030",
      "name": "Nidorina",
      "img": "http://www.serebii.net/pokemongo/pokemon/030.png",
      "type": [
          "Poison"
      ],
      "height": "0.79 m",
      "weight": "20.0 kg",
      "candy": "Nidoran ♀ (Female) Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.088,
      "avg_spawns": 8.8,
      "spawn_time": "07:22",
      "multipliers": [
          1.83,
          2.48
      ],
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "029",
              "name": "Nidoran(Female)"
          }
      ],
      "next_evolution": [
          {
              "num": "031",
              "name": "Nidoqueen"
          }
      ],
      "dexEntry": "When resting deep in its burrow, its thorns always retract. This is proof that it is relaxed."
  },
  {
      "id": 31,
      "num": "031",
      "name": "Nidoqueen",
      "img": "http://www.serebii.net/pokemongo/pokemon/031.png",
      "type": [
          "Poison",
          "Ground"
      ],
      "height": "1.30 m",
      "weight": "60.0 kg",
      "candy": "Nidoran ♀ (Female) Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "12:35",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Ice",
          "Ground",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "029",
              "name": "Nidoran(Female)"
          },
          {
              "num": "030",
              "name": "Nidorina"
          }
      ],
      "dexEntry": "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves."
  },
  {
      "id": 32,
      "num": "032",
      "name": "Nidoran ♂ (Male)",
      "img": "http://www.serebii.net/pokemongo/pokemon/032.png",
      "type": [
          "Poison"
      ],
      "height": "0.51 m",
      "weight": "9.0 kg",
      "candy": "Nidoran ♂ (Male) Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 1.31,
      "avg_spawns": 131,
      "spawn_time": "01:12",
      "multipliers": [
          1.64,
          1.7
      ],
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "next_evolution": [
          {
              "num": "033",
              "name": "Nidorino"
          },
          {
              "num": "034",
              "name": "Nidoking"
          }
      ]
  },
  {
      "id": 33,
      "num": "033",
      "name": "Nidorino",
      "img": "http://www.serebii.net/pokemongo/pokemon/033.png",
      "type": [
          "Poison"
      ],
      "height": "0.89 m",
      "weight": "19.5 kg",
      "candy": "Nidoran ♂ (Male) Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.083,
      "avg_spawns": 8.3,
      "spawn_time": "09:02",
      "multipliers": [
          1.83
      ],
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "032",
              "name": "Nidoran(Male)"
          }
      ],
      "next_evolution": [
          {
              "num": "034",
              "name": "Nidoking"
          }
      ],
      "dexEntry": "It raises its big ears to check its surroundings. If it senses anything, it attacks immediately."
  },
  {
      "id": 34,
      "num": "034",
      "name": "Nidoking",
      "img": "http://www.serebii.net/pokemongo/pokemon/034.png",
      "type": [
          "Poison",
          "Ground"
      ],
      "height": "1.40 m",
      "weight": "62.0 kg",
      "candy": "Nidoran ♂ (Male) Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "12:16",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Ice",
          "Ground",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "032",
              "name": "Nidoran(Male)"
          },
          {
              "num": "033",
              "name": "Nidorino"
          }
      ],
      "dexEntry": "One swing of its mighty tail can snap a telephone pole as if it were a matchstick."
  },
  {
      "id": 35,
      "num": "035",
      "name": "Clefairy",
      "img": "http://www.serebii.net/pokemongo/pokemon/035.png",
      "type": [
          "Normal"
      ],
      "height": "0.61 m",
      "weight": "7.5 kg",
      "candy": "Clefairy Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 0.92,
      "avg_spawns": 92,
      "spawn_time": "03:30",
      "multipliers": [
          2.03,
          2.14
      ],
      "weaknesses": [
          "Fighting"
      ],
      "next_evolution": [
          {
              "num": "036",
              "name": "Clefable"
          }
      ],
      "dexEntry": "The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair."
  },
  {
      "id": 36,
      "num": "036",
      "name": "Clefable",
      "img": "http://www.serebii.net/pokemongo/pokemon/036.png",
      "type": [
          "Normal"
      ],
      "height": "1.30 m",
      "weight": "40.0 kg",
      "candy": "Clefairy Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "03:29",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "prev_evolution": [
          {
              "num": "035",
              "name": "Clefairy"
          }
      ],
      "dexEntry": "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places."
  },
  {
      "id": 37,
      "num": "037",
      "name": "Vulpix",
      "img": "http://www.serebii.net/pokemongo/pokemon/037.png",
      "type": [
          "Fire"
      ],
      "height": "0.61 m",
      "weight": "9.9 kg",
      "candy": "Vulpix Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.22,
      "avg_spawns": 22,
      "spawn_time": "13:43",
      "multipliers": [
          2.74,
          2.81
      ],
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "038",
              "name": "Ninetales"
          }
      ],
      "dexEntry": "At the time of birth, it has just one tail. The tail splits from its tip as it grows older."
  },
  {
      "id": 38,
      "num": "038",
      "name": "Ninetales",
      "img": "http://www.serebii.net/pokemongo/pokemon/038.png",
      "type": [
          "Fire"
      ],
      "height": "1.09 m",
      "weight": "19.9 kg",
      "candy": "Vulpix Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0077,
      "avg_spawns": 0.77,
      "spawn_time": "01:32",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "037",
              "name": "Vulpix"
          }
      ],
      "dexEntry": "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse."
  },
  {
      "id": 39,
      "num": "039",
      "name": "Jigglypuff",
      "img": "http://www.serebii.net/pokemongo/pokemon/039.png",
      "type": [
          "Normal"
      ],
      "height": "0.51 m",
      "weight": "5.5 kg",
      "candy": "Jigglypuff Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 0.39,
      "avg_spawns": 39,
      "spawn_time": "08:46",
      "multipliers": [
          1.85
      ],
      "weaknesses": [
          "Fighting"
      ],
      "next_evolution": [
          {
              "num": "040",
              "name": "Wigglytuff"
          }
      ],
      "dexEntry": "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep."
  },
  {
      "id": 40,
      "num": "040",
      "name": "Wigglytuff",
      "img": "http://www.serebii.net/pokemongo/pokemon/040.png",
      "type": [
          "Normal"
      ],
      "height": "0.99 m",
      "weight": "12.0 kg",
      "candy": "Jigglypuff Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.018,
      "avg_spawns": 1.8,
      "spawn_time": "12:28",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "prev_evolution": [
          {
              "num": "039",
              "name": "Jigglypuff"
          }
      ],
      "dexEntry": "Its body is full of elasticity. By inhaling deeply, it can continue to inflate itself without limit."
  },
  {
      "id": 41,
      "num": "041",
      "name": "Zubat",
      "img": "http://www.serebii.net/pokemongo/pokemon/041.png",
      "type": [
          "Poison",
          "Flying"
      ],
      "height": "0.79 m",
      "weight": "7.5 kg",
      "candy": "Zubat Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 6.52,
      "avg_spawns": 652,
      "spawn_time": "12:28",
      "multipliers": [
          2.6,
          3.67
      ],
      "weaknesses": [
          "Electric",
          "Ice",
          "Psychic",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "042",
              "name": "Golbat"
          }
      ],
      "dexEntry": "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets."
  },
  {
      "id": 42,
      "num": "042",
      "name": "Golbat",
      "img": "http://www.serebii.net/pokemongo/pokemon/042.png",
      "type": [
          "Poison",
          "Flying"
      ],
      "height": "1.60 m",
      "weight": "55.0 kg",
      "candy": "Zubat Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.42,
      "avg_spawns": 42,
      "spawn_time": "02:15",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Ice",
          "Psychic",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "041",
              "name": "Zubat"
          }
      ],
      "dexEntry": "It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood."
  },
  {
      "id": 43,
      "num": "043",
      "name": "Oddish",
      "img": "http://www.serebii.net/pokemongo/pokemon/043.png",
      "type": [
          "Grass",
          "Poison"
      ],
      "height": "0.51 m",
      "weight": "5.4 kg",
      "candy": "Oddish Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 1.02,
      "avg_spawns": 102,
      "spawn_time": "03:58",
      "multipliers": [
          1.5
      ],
      "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
      ],
      "next_evolution": [
          {
              "num": "044",
              "name": "Gloom"
          },
          {
              "num": "045",
              "name": "Vileplume"
          }
      ],
      "dexEntry": "It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly."
  },
  {
      "id": 44,
      "num": "044",
      "name": "Gloom",
      "img": "http://www.serebii.net/pokemongo/pokemon/044.png",
      "type": [
          "Grass",
          "Poison"
      ],
      "height": "0.79 m",
      "weight": "8.6 kg",
      "candy": "Oddish Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.064,
      "avg_spawns": 6.4,
      "spawn_time": "11:33",
      "multipliers": [
          1.49
      ],
      "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "043",
              "name": "Oddish"
          }
      ],
      "next_evolution": [
          {
              "num": "045",
              "name": "Vileplume"
          }
      ],
      "dexEntry": "Smells incredibly foul! However, around 1 out of 1,000 people enjoy sniffing its nose-bending stink."
  },
  {
      "id": 45,
      "num": "045",
      "name": "Vileplume",
      "img": "http://www.serebii.net/pokemongo/pokemon/045.png",
      "type": [
          "Grass",
          "Poison"
      ],
      "height": "1.19 m",
      "weight": "18.6 kg",
      "candy": "Oddish Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0097,
      "avg_spawns": 0.97,
      "spawn_time": "23:58",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "043",
              "name": "Oddish"
          },
          {
              "num": "044",
              "name": "Gloom"
          }
      ],
      "dexEntry": "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen."
  },
  {
      "id": 46,
      "num": "046",
      "name": "Paras",
      "img": "http://www.serebii.net/pokemongo/pokemon/046.png",
      "type": [
          "Bug",
          "Grass"
      ],
      "height": "0.30 m",
      "weight": "5.4 kg",
      "candy": "Paras Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.36,
      "avg_spawns": 236,
      "spawn_time": "01:42",
      "multipliers": [
          2.02
      ],
      "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "047",
              "name": "Parasect"
          }
      ],
      "dexEntry": "Mushrooms named tochukaso grow on its back. They grow along with the host Paras."
  },
  {
      "id": 47,
      "num": "047",
      "name": "Parasect",
      "img": "http://www.serebii.net/pokemongo/pokemon/047.png",
      "type": [
          "Bug",
          "Grass"
      ],
      "height": "0.99 m",
      "weight": "29.5 kg",
      "candy": "Paras Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.074,
      "avg_spawns": 7.4,
      "spawn_time": "01:22",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "046",
              "name": "Paras"
          }
      ],
      "dexEntry": "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places."
  },
  {
      "id": 48,
      "num": "048",
      "name": "Venonat",
      "img": "http://www.serebii.net/pokemongo/pokemon/048.png",
      "type": [
          "Bug",
          "Poison"
      ],
      "height": "0.99 m",
      "weight": "30.0 kg",
      "candy": "Venonat Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.28,
      "avg_spawns": 228,
      "spawn_time": "02:31",
      "multipliers": [
          1.86,
          1.9
      ],
      "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "049",
              "name": "Venomoth"
          }
      ],
      "dexEntry": "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night."
  },
  {
      "id": 49,
      "num": "049",
      "name": "Venomoth",
      "img": "http://www.serebii.net/pokemongo/pokemon/049.png",
      "type": [
          "Bug",
          "Poison"
      ],
      "height": "1.50 m",
      "weight": "12.5 kg",
      "candy": "Venonat Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.072,
      "avg_spawns": 7.2,
      "spawn_time": "23:40",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "048",
              "name": "Venonat"
          }
      ],
      "dexEntry": "The dust-like scales covering its wings are color-coded to indicate the kinds of poison it has."
  },
  {
      "id": 50,
      "num": "050",
      "name": "Diglett",
      "img": "http://www.serebii.net/pokemongo/pokemon/050.png",
      "type": [
          "Ground"
      ],
      "height": "0.20 m",
      "weight": "0.8 kg",
      "candy": "Diglett Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.4,
      "avg_spawns": 40,
      "spawn_time": "02:22",
      "multipliers": [
          2.69
      ],
      "weaknesses": [
          "Water",
          "Grass",
          "Ice"
      ],
      "next_evolution": [
          {
              "num": "051",
              "name": "Dugtrio"
          }
      ],
      "dexEntry": "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot."
  },
  {
      "id": 51,
      "num": "051",
      "name": "Dugtrio",
      "img": "http://www.serebii.net/pokemongo/pokemon/051.png",
      "type": [
          "Ground"
      ],
      "height": "0.71 m",
      "weight": "33.3 kg",
      "candy": "Dugtrio",
      "egg": "Not in Eggs",
      "spawn_chance": 0.014,
      "avg_spawns": 1.4,
      "spawn_time": "12:37",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Grass",
          "Ice"
      ],
      "prev_evolution": [
          {
              "num": "050",
              "name": "Diglett"
          }
      ],
      "dexEntry": "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake."
  },
  {
      "id": 52,
      "num": "052",
      "name": "Meowth",
      "img": "http://www.serebii.net/pokemongo/pokemon/052.png",
      "type": [
          "Normal"
      ],
      "height": "0.41 m",
      "weight": "4.2 kg",
      "candy": "Meowth Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.86,
      "avg_spawns": 86,
      "spawn_time": "02:54",
      "multipliers": [
          1.98
      ],
      "weaknesses": [
          "Fighting"
      ],
      "next_evolution": [
          {
              "num": "053",
              "name": "Persian"
          }
      ],
      "dexEntry": "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change."
  },
  {
      "id": 53,
      "num": "053",
      "name": "Persian",
      "img": "http://www.serebii.net/pokemongo/pokemon/053.png",
      "type": [
          "Normal"
      ],
      "height": "0.99 m",
      "weight": "32.0 kg",
      "candy": "Meowth Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.022,
      "avg_spawns": 2.2,
      "spawn_time": "02:44",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "prev_evolution": [
          {
              "num": "052",
              "name": "Meowth"
          }
      ],
      "dexEntry": "Many adore it for its sophisticated air. However, it will lash out and scratch for little reason."
  },
  {
      "id": 54,
      "num": "054",
      "name": "Psyduck",
      "img": "http://www.serebii.net/pokemongo/pokemon/054.png",
      "type": [
          "Water"
      ],
      "height": "0.79 m",
      "weight": "19.6 kg",
      "candy": "Psyduck Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.54,
      "avg_spawns": 254,
      "spawn_time": "03:41",
      "multipliers": [
          2.27
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "055",
              "name": "Golduck"
          }
      ],
      "dexEntry": "Always tormented by headaches. It uses psychic powers, but it is not known if it intends to do so."
  },
  {
      "id": 55,
      "num": "055",
      "name": "Golduck",
      "img": "http://www.serebii.net/pokemongo/pokemon/055.png",
      "type": [
          "Water"
      ],
      "height": "1.70 m",
      "weight": "76.6 kg",
      "candy": "Psyduck Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.087,
      "avg_spawns": 8.7,
      "spawn_time": "23:06",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "prev_evolution": [
          {
              "num": "054",
              "name": "Psyduck"
          }
      ],
      "dexEntry": "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa."
  },
  {
      "id": 56,
      "num": "056",
      "name": "Mankey",
      "img": "http://www.serebii.net/pokemongo/pokemon/056.png",
      "type": [
          "Fighting"
      ],
      "height": "0.51 m",
      "weight": "28.0 kg",
      "candy": "Mankey Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.92,
      "avg_spawns": 92,
      "spawn_time": "12:52",
      "multipliers": [
          2.17,
          2.28
      ],
      "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
      ],
      "next_evolution": [
          {
              "num": "057",
              "name": "Primeape"
          }
      ],
      "dexEntry": "Extremely quick to anger. It could be docile one moment then thrashing away the next instant."
  },
  {
      "id": 57,
      "num": "057",
      "name": "Primeape",
      "img": "http://www.serebii.net/pokemongo/pokemon/057.png",
      "type": [
          "Fighting"
      ],
      "height": "0.99 m",
      "weight": "32.0 kg",
      "candy": "Mankey Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.031,
      "avg_spawns": 3.1,
      "spawn_time": "12:33",
      "multipliers": null,
      "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
      ],
      "prev_evolution": [
          {
              "num": "056",
              "name": "Mankey"
          }
      ],
      "dexEntry": "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught."
  },
  {
      "id": 58,
      "num": "058",
      "name": "Growlithe",
      "img": "http://www.serebii.net/pokemongo/pokemon/058.png",
      "type": [
          "Fire"
      ],
      "height": "0.71 m",
      "weight": "19.0 kg",
      "candy": "Growlithe Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.92,
      "avg_spawns": 92,
      "spawn_time": "03:57",
      "multipliers": [
          2.31,
          2.36
      ],
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "059",
              "name": "Arcanine"
          }
      ],
      "dexEntry": "It has a brave and trustworthy nature and fearlessly stands up to bigger and stronger foes."
  },
  {
      "id": 59,
      "num": "059",
      "name": "Arcanine",
      "img": "http://www.serebii.net/pokemongo/pokemon/059.png",
      "type": [
          "Fire"
      ],
      "height": "1.91 m",
      "weight": "155.0 kg",
      "candy": "Growlithe Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "03:11",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "058",
              "name": "Growlithe"
          }
      ],
      "dexEntry": "This legendary Chinese Pokemon is considered magnificent. Many people are enchanted by its grand mane."
  },
  {
      "id": 60,
      "num": "060",
      "name": "Poliwag",
      "img": "http://www.serebii.net/pokemongo/pokemon/060.png",
      "type": [
          "Water"
      ],
      "height": "0.61 m",
      "weight": "12.4 kg",
      "candy": "Poliwag Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 2.19,
      "avg_spawns": 219,
      "spawn_time": "03:40",
      "multipliers": [
          1.72,
          1.73
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "061",
              "name": "Poliwhirl"
          },
          {
              "num": "062",
              "name": "Poliwrath"
          }
      ],
      "dexEntry": "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand."
  },
  {
      "id": 61,
      "num": "061",
      "name": "Poliwhirl",
      "img": "http://www.serebii.net/pokemongo/pokemon/061.png",
      "type": [
          "Water"
      ],
      "height": "0.99 m",
      "weight": "20.0 kg",
      "candy": "Poliwag Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.13,
      "avg_spawns": 13,
      "spawn_time": "09:14",
      "multipliers": [
          1.95
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "prev_evolution": [
          {
              "num": "060",
              "name": "Poliwag"
          }
      ],
      "next_evolution": [
          {
              "num": "062",
              "name": "Poliwrath"
          }
      ],
      "dexEntry": "Its two legs are well developed. Even though it can live on the ground, it prefers living in water."
  },
  {
      "id": 62,
      "num": "062",
      "name": "Poliwrath",
      "img": "http://www.serebii.net/pokemongo/pokemon/062.png",
      "type": [
          "Water",
          "Fighting"
      ],
      "height": "1.30 m",
      "weight": "54.0 kg",
      "candy": "Poliwag Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.011,
      "avg_spawns": 1.1,
      "spawn_time": "01:32",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass",
          "Flying",
          "Psychic",
          "Fairy"
      ],
      "prev_evolution": [
          {
              "num": "060",
              "name": "Poliwag"
          },
          {
              "num": "061",
              "name": "Poliwhirl"
          }
      ],
      "dexEntry": "Although an energetic, skilled swimmer that uses all of its muscles, it lives on dry land."
  },
  {
      "id": 63,
      "num": "063",
      "name": "Abra",
      "img": "http://www.serebii.net/pokemongo/pokemon/063.png",
      "type": [
          "Psychic"
      ],
      "height": "0.89 m",
      "weight": "19.5 kg",
      "candy": "Abra Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 0.42,
      "avg_spawns": 42,
      "spawn_time": "04:30",
      "multipliers": [
          1.36,
          1.95
      ],
      "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
      ],
      "next_evolution": [
          {
              "num": "064",
              "name": "Kadabra"
          },
          {
              "num": "065",
              "name": "Alakazam"
          }
      ],
      "dexEntry": "Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps."
  },
  {
      "id": 64,
      "num": "064",
      "name": "Kadabra",
      "img": "http://www.serebii.net/pokemongo/pokemon/064.png",
      "type": [
          "Psychic"
      ],
      "height": "1.30 m",
      "weight": "56.5 kg",
      "candy": "Abra Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.027,
      "avg_spawns": 2.7,
      "spawn_time": "11:25",
      "multipliers": [
          1.4
      ],
      "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
      ],
      "prev_evolution": [
          {
              "num": "063",
              "name": "Abra"
          }
      ],
      "next_evolution": [
          {
              "num": "065",
              "name": "Alakazam"
          }
      ],
      "dexEntry": "It emits special alpha waves from its body that induce headaches just by being close by."
  },
  {
      "id": 65,
      "num": "065",
      "name": "Alakazam",
      "img": "http://www.serebii.net/pokemongo/pokemon/065.png",
      "type": [
          "Psychic"
      ],
      "height": "1.50 m",
      "weight": "48.0 kg",
      "candy": "Abra Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0073,
      "avg_spawns": 0.73,
      "spawn_time": "12:33",
      "multipliers": null,
      "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
      ],
      "prev_evolution": [
          {
              "num": "063",
              "name": "Abra"
          },
          {
              "num": "064",
              "name": "Kadabra"
          }
      ],
      "dexEntry": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000."
  },
  {
      "id": 66,
      "num": "066",
      "name": "Machop",
      "img": "http://www.serebii.net/pokemongo/pokemon/066.png",
      "type": [
          "Fighting"
      ],
      "height": "0.79 m",
      "weight": "19.5 kg",
      "candy": "Machop Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 0.49,
      "avg_spawns": 49,
      "spawn_time": "01:55",
      "multipliers": [
          1.64,
          1.65
      ],
      "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
      ],
      "next_evolution": [
          {
              "num": "067",
              "name": "Machoke"
          },
          {
              "num": "068",
              "name": "Machamp"
          }
      ],
      "dexEntry": "Always brimming with power, it passes time by lifting boulders. Doing so makes it even stronger."
  },
  {
      "id": 67,
      "num": "067",
      "name": "Machoke",
      "img": "http://www.serebii.net/pokemongo/pokemon/067.png",
      "type": [
          "Fighting"
      ],
      "height": "1.50 m",
      "weight": "70.5 kg",
      "candy": "Machop Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "10:32",
      "multipliers": [
          1.7
      ],
      "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
      ],
      "prev_evolution": [
          {
              "num": "066",
              "name": "Machop"
          }
      ],
      "next_evolution": [
          {
              "num": "068",
              "name": "Machamp"
          }
      ],
      "dexEntry": "Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions."
  },
  {
      "id": 68,
      "num": "068",
      "name": "Machamp",
      "img": "http://www.serebii.net/pokemongo/pokemon/068.png",
      "type": [
          "Fighting"
      ],
      "height": "1.60 m",
      "weight": "130.0 kg",
      "candy": "Machop Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0068,
      "avg_spawns": 0.68,
      "spawn_time": "02:55",
      "multipliers": null,
      "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
      ],
      "prev_evolution": [
          {
              "num": "066",
              "name": "Machop"
          },
          {
              "num": "067",
              "name": "Machoke"
          }
      ],
      "dexEntry": "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon."
  },
  {
      "id": 69,
      "num": "069",
      "name": "Bellsprout",
      "img": "http://www.serebii.net/pokemongo/pokemon/069.png",
      "type": [
          "Grass",
          "Poison"
      ],
      "height": "0.71 m",
      "weight": "4.0 kg",
      "candy": "Bellsprout Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 1.15,
      "avg_spawns": 115,
      "spawn_time": "04:10",
      "multipliers": [
          1.57
      ],
      "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
      ],
      "next_evolution": [
          {
              "num": "070",
              "name": "Weepinbell"
          },
          {
              "num": "071",
              "name": "Victreebel"
          }
      ],
      "dexEntry": "A carnivorous Pokemon that traps and eats bugs. It uses its root feet to soak up needed moisture."
  },
  {
      "id": 70,
      "num": "070",
      "name": "Weepinbell",
      "img": "http://www.serebii.net/pokemongo/pokemon/070.png",
      "type": [
          "Grass",
          "Poison"
      ],
      "height": "0.99 m",
      "weight": "6.4 kg",
      "candy": "Bellsprout Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.072,
      "avg_spawns": 7.2,
      "spawn_time": "09:45",
      "multipliers": [
          1.59
      ],
      "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "069",
              "name": "Bellsprout"
          }
      ],
      "next_evolution": [
          {
              "num": "071",
              "name": "Victreebel"
          }
      ],
      "dexEntry": "When hungry, it swallows anything that moves. Its hapless prey is melted inside by strong acids."
  },
  {
      "id": 71,
      "num": "071",
      "name": "Victreebel",
      "img": "http://www.serebii.net/pokemongo/pokemon/071.png",
      "type": [
          "Grass",
          "Poison"
      ],
      "height": "1.70 m",
      "weight": "15.5 kg",
      "candy": "Bellsprout Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0059,
      "avg_spawns": 0.59,
      "spawn_time": "12:19",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "069",
              "name": "Bellsprout"
          },
          {
              "num": "070",
              "name": "Weepinbell"
          }
      ],
      "dexEntry": "Said to live in huge colonies deep in jungles, although no one has ever returned from there."
  },
  {
      "id": 72,
      "num": "072",
      "name": "Tentacool",
      "img": "http://www.serebii.net/pokemongo/pokemon/072.png",
      "type": [
          "Water",
          "Poison"
      ],
      "height": "0.89 m",
      "weight": "45.5 kg",
      "candy": "Tentacool Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.81,
      "avg_spawns": 81,
      "spawn_time": "03:20",
      "multipliers": [
          2.52
      ],
      "weaknesses": [
          "Electric",
          "Ground",
          "Psychic"
      ],
      "next_evolution": [
          {
              "num": "073",
              "name": "Tentacruel"
          }
      ],
      "dexEntry": "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid."
  },
  {
      "id": 73,
      "num": "073",
      "name": "Tentacruel",
      "img": "http://www.serebii.net/pokemongo/pokemon/073.png",
      "type": [
          "Water",
          "Poison"
      ],
      "height": "1.60 m",
      "weight": "55.0 kg",
      "candy": "Tentacool Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.082,
      "avg_spawns": 8.2,
      "spawn_time": "23:36",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Ground",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "072",
              "name": "Tentacool"
          }
      ],
      "dexEntry": "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey."
  },
  {
      "id": 74,
      "num": "074",
      "name": "Geodude",
      "img": "http://www.serebii.net/pokemongo/pokemon/074.png",
      "type": [
          "Rock",
          "Ground"
      ],
      "height": "0.41 m",
      "weight": "20.0 kg",
      "candy": "Geodude Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 1.19,
      "avg_spawns": 119,
      "spawn_time": "12:40",
      "multipliers": [
          1.75,
          1.76
      ],
      "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
      ],
      "next_evolution": [
          {
              "num": "075",
              "name": "Graveler"
          },
          {
              "num": "076",
              "name": "Golem"
          }
      ],
      "dexEntry": "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them."
  },
  {
      "id": 75,
      "num": "075",
      "name": "Graveler",
      "img": "http://www.serebii.net/pokemongo/pokemon/075.png",
      "type": [
          "Rock",
          "Ground"
      ],
      "height": "0.99 m",
      "weight": "105.0 kg",
      "candy": "Geodude Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.071,
      "avg_spawns": 7.1,
      "spawn_time": "04:53",
      "multipliers": [
          1.64,
          1.72
      ],
      "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
      ],
      "prev_evolution": [
          {
              "num": "074",
              "name": "Geodude"
          }
      ],
      "next_evolution": [
          {
              "num": "076",
              "name": "Golem"
          }
      ],
      "dexEntry": "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction."
  },
  {
      "id": 76,
      "num": "076",
      "name": "Golem",
      "img": "http://www.serebii.net/pokemongo/pokemon/076.png",
      "type": [
          "Rock",
          "Ground"
      ],
      "height": "1.40 m",
      "weight": "300.0 kg",
      "candy": "Geodude Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0047,
      "avg_spawns": 0.47,
      "spawn_time": "12:16",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
      ],
      "prev_evolution": [
          {
              "num": "074",
              "name": "Geodude"
          },
          {
              "num": "075",
              "name": "Graveler"
          }
      ],
      "dexEntry": "It is enclosed in a hard shell that is as rugged as slabs of rock. It sheds skin once a year to grow larger."
  },
  {
      "id": 77,
      "num": "077",
      "name": "Ponyta",
      "img": "http://www.serebii.net/pokemongo/pokemon/077.png",
      "type": [
          "Fire"
      ],
      "height": "0.99 m",
      "weight": "30.0 kg",
      "candy": "Ponyta Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.51,
      "avg_spawns": 51,
      "spawn_time": "02:50",
      "multipliers": [
          1.48,
          1.5
      ],
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "078",
              "name": "Rapidash"
          }
      ],
      "dexEntry": "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes. Not to be confused with the 20% cooler PonyTA."
  },
  {
      "id": 78,
      "num": "078",
      "name": "Rapidash",
      "img": "http://www.serebii.net/pokemongo/pokemon/078.png",
      "type": [
          "Fire"
      ],
      "height": "1.70 m",
      "weight": "95.0 kg",
      "candy": "Ponyta Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.011,
      "avg_spawns": 1.1,
      "spawn_time": "04:00",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "077",
              "name": "Ponyta"
          }
      ],
      "dexEntry": "Very competitive, this Pokemon will chase anything that moves fast in the hopes of racing it."
  },
  {
      "id": 79,
      "num": "079",
      "name": "Slowpoke",
      "img": "http://www.serebii.net/pokemongo/pokemon/079.png",
      "type": [
          "Water",
          "Psychic"
      ],
      "height": "1.19 m",
      "weight": "36.0 kg",
      "candy": "Slowpoke Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 1.05,
      "avg_spawns": 105,
      "spawn_time": "07:12",
      "multipliers": [
          2.21
      ],
      "weaknesses": [
          "Electric",
          "Grass",
          "Bug",
          "Ghost",
          "Dark"
      ],
      "next_evolution": [
          {
              "num": "080",
              "name": "Slowbro"
          }
      ],
      "dexEntry": "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack."
  },
  {
      "id": 80,
      "num": "080",
      "name": "Slowbro",
      "img": "http://www.serebii.net/pokemongo/pokemon/080.png",
      "type": [
          "Water",
          "Psychic"
      ],
      "height": "1.60 m",
      "weight": "78.5 kg",
      "candy": "Slowpoke Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.036,
      "avg_spawns": 3.6,
      "spawn_time": "02:56",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass",
          "Bug",
          "Ghost",
          "Dark"
      ],
      "prev_evolution": [
          {
              "num": "079",
              "name": "Slowpoke"
          }
      ],
      "dexEntry": "An attached Shellder won't let go because of the tasty flavor that oozes out of its tail."
  },
  {
      "id": 81,
      "num": "081",
      "name": "Magnemite",
      "img": "http://www.serebii.net/pokemongo/pokemon/081.png",
      "type": [
          "Electric"
      ],
      "height": "0.30 m",
      "weight": "6.0 kg",
      "candy": "Magnemite Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.71,
      "avg_spawns": 71,
      "spawn_time": "04:04",
      "multipliers": [
          2.16,
          2.17
      ],
      "weaknesses": [
          "Fire",
          "Water",
          "Ground"
      ],
      "next_evolution": [
          {
              "num": "082",
              "name": "Magneton"
          }
      ],
      "dexEntry": "The electricity emitted by the units on each side of its body cause it to become a strong magnet."
  },
  {
      "id": 82,
      "num": "082",
      "name": "Magneton",
      "img": "http://www.serebii.net/pokemongo/pokemon/082.png",
      "type": [
          "Electric"
      ],
      "height": "0.99 m",
      "weight": "60.0 kg",
      "candy": "Magnemite Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.023,
      "avg_spawns": 2.3,
      "spawn_time": "15:25",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Water",
          "Ground"
      ],
      "prev_evolution": [
          {
              "num": "081",
              "name": "Magnemite"
          }
      ],
      "dexEntry": "Generates strange radio signals. It raises the temperature by 3.6F degrees within 3,300 feet."
  },
  {
      "id": 83,
      "num": "083",
      "name": "Farfetch'd",
      "img": "http://www.serebii.net/pokemongo/pokemon/083.png",
      "type": [
          "Normal",
          "Flying"
      ],
      "height": "0.79 m",
      "weight": "15.0 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.0212,
      "avg_spawns": 2.12,
      "spawn_time": "01:09",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Rock"
      ],
      "dexEntry": "The sprig of green onions it holds is its weapon. It is used much like a metal sword."
  },
  {
      "id": 84,
      "num": "084",
      "name": "Doduo",
      "img": "http://www.serebii.net/pokemongo/pokemon/084.png",
      "type": [
          "Normal",
          "Flying"
      ],
      "height": "1.40 m",
      "weight": "39.2 kg",
      "candy": "Doduo Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.52,
      "avg_spawns": 52,
      "spawn_time": "05:10",
      "multipliers": [
          2.19,
          2.24
      ],
      "weaknesses": [
          "Electric",
          "Rock"
      ],
      "next_evolution": [
          {
              "num": "085",
              "name": "Dodrio"
          }
      ],
      "dexEntry": "It races through grassy plains with powerful strides, leaving footprints up to four inches deep."
  },
  {
      "id": 85,
      "num": "085",
      "name": "Dodrio",
      "img": "http://www.serebii.net/pokemongo/pokemon/085.png",
      "type": [
          "Normal",
          "Flying"
      ],
      "height": "1.80 m",
      "weight": "85.2 kg",
      "candy": "Doduo Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.22,
      "avg_spawns": 22,
      "spawn_time": "02:12",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "084",
              "name": "Doduo"
          }
      ],
      "dexEntry": "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake."
  },
  {
      "id": 86,
      "num": "086",
      "name": "Seel",
      "img": "http://www.serebii.net/pokemongo/pokemon/086.png",
      "type": [
          "Water"
      ],
      "height": "1.09 m",
      "weight": "90.0 kg",
      "candy": "Seel Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.28,
      "avg_spawns": 28,
      "spawn_time": "06:46",
      "multipliers": [
          1.04,
          1.96
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "087",
              "name": "Dewgong"
          }
      ],
      "dexEntry": "The light blue fur that covers it keeps it protected against the cold. It loves iceberg-filled oceans."
  },
  {
      "id": 87,
      "num": "087",
      "name": "Dewgong",
      "img": "http://www.serebii.net/pokemongo/pokemon/087.png",
      "type": [
          "Water",
          "Ice"
      ],
      "height": "1.70 m",
      "weight": "120.0 kg",
      "candy": "Seel Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.013,
      "avg_spawns": 1.3,
      "spawn_time": "06:04",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "086",
              "name": "Seel"
          }
      ],
      "dexEntry": "Its entire body is a snowy-white. Unharmed by even intense cold, it swims powerfully in icy waters."
  },
  {
      "id": 88,
      "num": "088",
      "name": "Grimer",
      "img": "http://www.serebii.net/pokemongo/pokemon/088.png",
      "type": [
          "Poison"
      ],
      "height": "0.89 m",
      "weight": "30.0 kg",
      "candy": "Grimer Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.052,
      "avg_spawns": 5.2,
      "spawn_time": "15:11",
      "multipliers": [
          2.44
      ],
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "next_evolution": [
          {
              "num": "089",
              "name": "Muk"
          }
      ],
      "dexEntry": "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories."
  },
  {
      "id": 89,
      "num": "089",
      "name": "Muk",
      "img": "http://www.serebii.net/pokemongo/pokemon/089.png",
      "type": [
          "Poison"
      ],
      "height": "1.19 m",
      "weight": "30.0 kg",
      "candy": "Grimer Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0031,
      "avg_spawns": 0.31,
      "spawn_time": "01:28",
      "multipliers": null,
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "088",
              "name": "Grimer"
          }
      ],
      "dexEntry": "As it moves, a very strong poison leaks from it, making the ground there barren for three years."
  },
  {
      "id": 90,
      "num": "090",
      "name": "Shellder",
      "img": "http://www.serebii.net/pokemongo/pokemon/090.png",
      "type": [
          "Water"
      ],
      "height": "0.30 m",
      "weight": "4.0 kg",
      "candy": "Shellder Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.52,
      "avg_spawns": 52,
      "spawn_time": "07:39",
      "multipliers": [
          2.65
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "091",
              "name": "Cloyster"
          }
      ],
      "dexEntry": "It swims backward by opening and closing its two shells. Its large tongue is always kept hanging out."
  },
  {
      "id": 91,
      "num": "091",
      "name": "Cloyster",
      "img": "http://www.serebii.net/pokemongo/pokemon/091.png",
      "type": [
          "Water",
          "Ice"
      ],
      "height": "1.50 m",
      "weight": "132.5 kg",
      "candy": "Shellder Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.015,
      "avg_spawns": 1.5,
      "spawn_time": "02:33",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "090",
              "name": "Shellder"
          }
      ],
      "dexEntry": "Even a missile can't break the spikes it uses to stab opponents. They're even harder than its shell."
  },
  {
      "id": 92,
      "num": "092",
      "name": "Gastly",
      "img": "http://www.serebii.net/pokemongo/pokemon/092.png",
      "type": [
          "Ghost",
          "Poison"
      ],
      "height": "1.30 m",
      "weight": "0.1 kg",
      "candy": "Gastly Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 0.79,
      "avg_spawns": 79,
      "spawn_time": "04:21",
      "multipliers": [
          1.78
      ],
      "weaknesses": [
          "Ground",
          "Psychic",
          "Ghost",
          "Dark"
      ],
      "next_evolution": [
          {
              "num": "093",
              "name": "Haunter"
          },
          {
              "num": "094",
              "name": "Gengar"
          }
      ],
      "dexEntry": "With its gas-like body, it can sneak into any place it desires. However, it can be blown away by wind."
  },
  {
      "id": 93,
      "num": "093",
      "name": "Haunter",
      "img": "http://www.serebii.net/pokemongo/pokemon/093.png",
      "type": [
          "Ghost",
          "Poison"
      ],
      "height": "1.60 m",
      "weight": "0.1 kg",
      "candy": "Gastly Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.052,
      "avg_spawns": 5.2,
      "spawn_time": "00:10",
      "multipliers": [
          1.56,
          1.8
      ],
      "weaknesses": [
          "Ground",
          "Psychic",
          "Ghost",
          "Dark"
      ],
      "prev_evolution": [
          {
              "num": "092",
              "name": "Gastly"
          }
      ],
      "next_evolution": [
          {
              "num": "094",
              "name": "Gengar"
          }
      ],
      "dexEntry": "It hides in the dark, planning to take the life of the next living thing that wanders close by."
  },
  {
      "id": 94,
      "num": "094",
      "name": "Gengar",
      "img": "http://www.serebii.net/pokemongo/pokemon/094.png",
      "type": [
          "Ghost",
          "Poison"
      ],
      "height": "1.50 m",
      "weight": "40.5 kg",
      "candy": "Gastly Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0067,
      "avg_spawns": 0.67,
      "spawn_time": "03:55",
      "multipliers": null,
      "weaknesses": [
          "Ground",
          "Psychic",
          "Ghost",
          "Dark"
      ],
      "prev_evolution": [
          {
              "num": "092",
              "name": "Gastly"
          },
          {
              "num": "093",
              "name": "Haunter"
          }
      ],
      "dexEntry": "It is said to emerge from darkness to steal the lives of those who become lost in mountains."
  },
  {
      "id": 95,
      "num": "095",
      "name": "Onix",
      "img": "http://www.serebii.net/pokemongo/pokemon/095.png",
      "type": [
          "Rock",
          "Ground"
      ],
      "height": "8.79 m",
      "weight": "210.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.1,
      "avg_spawns": 10,
      "spawn_time": "01:18",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
      ],
      "dexEntry": "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body."
  },
  {
      "id": 96,
      "num": "096",
      "name": "Drowzee",
      "img": "http://www.serebii.net/pokemongo/pokemon/096.png",
      "type": [
          "Psychic"
      ],
      "height": "0.99 m",
      "weight": "32.4 kg",
      "candy": "Drowzee Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 3.21,
      "avg_spawns": 321,
      "spawn_time": "01:51",
      "multipliers": [
          2.08,
          2.09
      ],
      "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
      ],
      "next_evolution": [
          {
              "num": "097",
              "name": "Hypno"
          }
      ],
      "dexEntry": "Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams."
  },
  {
      "id": 97,
      "num": "097",
      "name": "Hypno",
      "img": "http://www.serebii.net/pokemongo/pokemon/097.png",
      "type": [
          "Psychic"
      ],
      "height": "1.60 m",
      "weight": "75.6 kg",
      "candy": "Drowzee Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.1,
      "avg_spawns": 10,
      "spawn_time": "02:17",
      "multipliers": null,
      "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
      ],
      "prev_evolution": [
          {
              "num": "096",
              "name": "Drowzee"
          }
      ],
      "dexEntry": "It carries a pendulum-like device. There once was an incident in which it took away a child it hypnotized."
  },
  {
      "id": 98,
      "num": "098",
      "name": "Krabby",
      "img": "http://www.serebii.net/pokemongo/pokemon/098.png",
      "type": [
          "Water"
      ],
      "height": "0.41 m",
      "weight": "6.5 kg",
      "candy": "Krabby Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.12,
      "avg_spawns": 212,
      "spawn_time": "03:33",
      "multipliers": [
          2.36,
          2.4
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "099",
              "name": "Kingler"
          }
      ],
      "dexEntry": "Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast."
  },
  {
      "id": 99,
      "num": "099",
      "name": "Kingler",
      "img": "http://www.serebii.net/pokemongo/pokemon/099.png",
      "type": [
          "Water"
      ],
      "height": "1.30 m",
      "weight": "60.0 kg",
      "candy": "Krabby Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.062,
      "avg_spawns": 6.2,
      "spawn_time": "03:44",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "prev_evolution": [
          {
              "num": "098",
              "name": "Krabby"
          }
      ],
      "dexEntry": "It can hardly lift its massive, overgrown pincer. The pincer's size makes it difficult to aim properly."
  },
  {
      "id": 100,
      "num": "100",
      "name": "Voltorb",
      "img": "http://www.serebii.net/pokemongo/pokemon/100.png",
      "type": [
          "Electric"
      ],
      "height": "0.51 m",
      "weight": "10.4 kg",
      "candy": "Voltorb Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.65,
      "avg_spawns": 65,
      "spawn_time": "04:36",
      "multipliers": [
          2.01,
          2.02
      ],
      "weaknesses": [
          "Ground"
      ],
      "next_evolution": [
          {
              "num": "101",
              "name": "Electrode"
          }
      ],
      "dexEntry": "It was discovered when Poke balls were introduced. It is said that there is some connection."
  },
  {
      "id": 101,
      "num": "101",
      "name": "Electrode",
      "img": "http://www.serebii.net/pokemongo/pokemon/101.png",
      "type": [
          "Electric"
      ],
      "height": "1.19 m",
      "weight": "66.6 kg",
      "candy": "Voltorb Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "04:10",
      "multipliers": null,
      "weaknesses": [
          "Ground"
      ],
      "prev_evolution": [
          {
              "num": "100",
              "name": "Voltorb"
          }
      ],
      "dexEntry": "It is dangerous. If it has too much electricity and has nothing to do, it amuses itself by exploding."
  },
  {
      "id": 102,
      "num": "102",
      "name": "Exeggcute",
      "img": "http://www.serebii.net/pokemongo/pokemon/102.png",
      "type": [
          "Grass",
          "Psychic"
      ],
      "height": "0.41 m",
      "weight": "2.5 kg",
      "candy": "Exeggcute Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.78,
      "avg_spawns": 78,
      "spawn_time": "09:09",
      "multipliers": [
          2.7,
          3.18
      ],
      "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug",
          "Ghost",
          "Dark"
      ],
      "next_evolution": [
          {
              "num": "103",
              "name": "Exeggutor"
          }
      ],
      "dexEntry": "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms."
  },
  {
      "id": 103,
      "num": "103",
      "name": "Exeggutor",
      "img": "http://www.serebii.net/pokemongo/pokemon/103.png",
      "type": [
          "Grass",
          "Psychic"
      ],
      "height": "2.01 m",
      "weight": "120.0 kg",
      "candy": "Exeggcute Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.014,
      "avg_spawns": 1.4,
      "spawn_time": "12:34",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug",
          "Ghost",
          "Dark"
      ],
      "prev_evolution": [
          {
              "num": "102",
              "name": "Exeggcute"
          }
      ],
      "dexEntry": "Its cries are very noisy. This is because each of the 3 heads thinks about whatever it likes."
  },
  {
      "id": 104,
      "num": "104",
      "name": "Cubone",
      "img": "http://www.serebii.net/pokemongo/pokemon/104.png",
      "type": [
          "Ground"
      ],
      "height": "0.41 m",
      "weight": "6.5 kg",
      "candy": "Cubone Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.61,
      "avg_spawns": 61,
      "spawn_time": "01:51",
      "multipliers": [
          1.67
      ],
      "weaknesses": [
          "Water",
          "Grass",
          "Ice"
      ],
      "next_evolution": [
          {
              "num": "105",
              "name": "Marowak"
          }
      ],
      "dexEntry": "Cubone's both cute and completely hardcore."
  },
  {
      "id": 105,
      "num": "105",
      "name": "Marowak",
      "img": "http://www.serebii.net/pokemongo/pokemon/105.png",
      "type": [
          "Ground"
      ],
      "height": "0.99 m",
      "weight": "45.0 kg",
      "candy": "Cubone Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "03:59",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Grass",
          "Ice"
      ],
      "prev_evolution": [
          {
              "num": "104",
              "name": "Cubone"
          }
      ],
      "dexEntry": "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets."
  },
  {
      "id": 106,
      "num": "106",
      "name": "Hitmonlee",
      "img": "http://www.serebii.net/pokemongo/pokemon/106.png",
      "type": [
          "Fighting"
      ],
      "height": "1.50 m",
      "weight": "49.8 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "03:59",
      "multipliers": null,
      "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
      ],
      "dexEntry": "If it starts kicking repeatedly, both legs will stretch even longer to strike a fleeing foe."
  },
  {
      "id": 107,
      "num": "107",
      "name": "Hitmonchan",
      "img": "http://www.serebii.net/pokemongo/pokemon/107.png",
      "type": [
          "Fighting"
      ],
      "height": "1.40 m",
      "weight": "50.2 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.022,
      "avg_spawns": 2.2,
      "spawn_time": "05:58",
      "multipliers": null,
      "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
      ],
      "dexEntry": "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn."
  },
  {
      "id": 108,
      "num": "108",
      "name": "Lickitung",
      "img": "http://www.serebii.net/pokemongo/pokemon/108.png",
      "type": [
          "Normal"
      ],
      "height": "1.19 m",
      "weight": "65.5 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.011,
      "avg_spawns": 1.1,
      "spawn_time": "02:46",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "dexEntry": "Its tongue spans almost 7 feet and moves more freely than its forelegs. Its licks can cause paralysis."
  },
  {
      "id": 109,
      "num": "109",
      "name": "Koffing",
      "img": "http://www.serebii.net/pokemongo/pokemon/109.png",
      "type": [
          "Poison"
      ],
      "height": "0.61 m",
      "weight": "1.0 kg",
      "candy": "Koffing Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.2,
      "avg_spawns": 20,
      "spawn_time": "08:16",
      "multipliers": [
          1.11
      ],
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "next_evolution": [
          {
              "num": "110",
              "name": "Weezing"
          }
      ],
      "dexEntry": "If one gets close enough to it when it expels poisonous gas, the gas swirling inside it can be seen."
  },
  {
      "id": 110,
      "num": "110",
      "name": "Weezing",
      "img": "http://www.serebii.net/pokemongo/pokemon/110.png",
      "type": [
          "Poison"
      ],
      "height": "1.19 m",
      "weight": "9.5 kg",
      "candy": "Koffing Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.016,
      "avg_spawns": 1.6,
      "spawn_time": "12:17",
      "multipliers": null,
      "weaknesses": [
          "Ground",
          "Psychic"
      ],
      "prev_evolution": [
          {
              "num": "109",
              "name": "Koffing"
          }
      ],
      "dexEntry": "Very rarely, a sudden mutation can result in two small Koffing twins becoming conjoined as a Weezing."
  },
  {
      "id": 111,
      "num": "111",
      "name": "Rhyhorn",
      "img": "http://www.serebii.net/pokemongo/pokemon/111.png",
      "type": [
          "Ground",
          "Rock"
      ],
      "height": "0.99 m",
      "weight": "115.0 kg",
      "candy": "Rhyhorn Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.63,
      "avg_spawns": 63,
      "spawn_time": "03:21",
      "multipliers": [
          1.91
      ],
      "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
      ],
      "next_evolution": [
          {
              "num": "112",
              "name": "Rhydon"
          }
      ],
      "dexEntry": "It doesn't care if there is anything in its way. It just charges and destroys all obstacles."
  },
  {
      "id": 112,
      "num": "112",
      "name": "Rhydon",
      "img": "http://www.serebii.net/pokemongo/pokemon/112.png",
      "type": [
          "Ground",
          "Rock"
      ],
      "height": "1.91 m",
      "weight": "120.0 kg",
      "candy": "Rhyhorn Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.022,
      "avg_spawns": 2.2,
      "spawn_time": "05:50",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
      ],
      "prev_evolution": [
          {
              "num": "111",
              "name": "Rhyhorn"
          }
      ],
      "dexEntry": "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit."
  },
  {
      "id": 113,
      "num": "113",
      "name": "Chansey",
      "img": "http://www.serebii.net/pokemongo/pokemon/113.png",
      "type": [
          "Normal"
      ],
      "height": "1.09 m",
      "weight": "34.6 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.013,
      "avg_spawns": 1.3,
      "spawn_time": "04:46",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "dexEntry": "Being few in number and difficult to capture, it is said to bring happiness to the Trainer who catches it."
  },
  {
      "id": 114,
      "num": "114",
      "name": "Tangela",
      "img": "http://www.serebii.net/pokemongo/pokemon/114.png",
      "type": [
          "Grass"
      ],
      "height": "0.99 m",
      "weight": "35.0 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.228,
      "avg_spawns": 22.8,
      "spawn_time": "23:13",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug"
      ],
      "dexEntry": "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks."
  },
  {
      "id": 115,
      "num": "115",
      "name": "Kangaskhan",
      "img": "http://www.serebii.net/pokemongo/pokemon/115.png",
      "type": [
          "Normal"
      ],
      "height": "2.21 m",
      "weight": "80.0 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.0086,
      "avg_spawns": 0.86,
      "spawn_time": "02:40",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "dexEntry": "To protect its young, it will never give up during battle, no matter how badly wounded it is."
  },
  {
      "id": 116,
      "num": "116",
      "name": "Horsea",
      "img": "http://www.serebii.net/pokemongo/pokemon/116.png",
      "type": [
          "Water"
      ],
      "height": "0.41 m",
      "weight": "8.0 kg",
      "candy": "Horsea Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 1.13,
      "avg_spawns": 113,
      "spawn_time": "02:53",
      "multipliers": [
          2.23
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "117",
              "name": "Seadra"
          }
      ],
      "dexEntry": "It maintains balance using its tail, which is wound up like a coil. It may spray ink from its mouth."
  },
  {
      "id": 117,
      "num": "117",
      "name": "Seadra",
      "img": "http://www.serebii.net/pokemongo/pokemon/117.png",
      "type": [
          "Water"
      ],
      "height": "1.19 m",
      "weight": "25.0 kg",
      "candy": "Horsea Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "03:18",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "prev_evolution": [
          {
              "num": "116",
              "name": "Horsea"
          }
      ],
      "dexEntry": "Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail."
  },
  {
      "id": 118,
      "num": "118",
      "name": "Goldeen",
      "img": "http://www.serebii.net/pokemongo/pokemon/118.png",
      "type": [
          "Water"
      ],
      "height": "0.61 m",
      "weight": "15.0 kg",
      "candy": "Goldeen Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.18,
      "avg_spawns": 218,
      "spawn_time": "03:14",
      "multipliers": [
          2.15,
          2.2
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "119",
              "name": "Seaking"
          }
      ],
      "dexEntry": "A strong swimmer, it is capable of swimming nonstop up fast streams at a steady speed of five knots."
  },
  {
      "id": 119,
      "num": "119",
      "name": "Seaking",
      "img": "http://www.serebii.net/pokemongo/pokemon/119.png",
      "type": [
          "Water"
      ],
      "height": "1.30 m",
      "weight": "39.0 kg",
      "candy": "Goldeen Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.08,
      "avg_spawns": 8,
      "spawn_time": "05:21",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "prev_evolution": [
          {
              "num": "118",
              "name": "Goldeen"
          }
      ],
      "dexEntry": "The horn on its head is sharp like a drill. It bores a hole in a boulder to make its nest."
  },
  {
      "id": 120,
      "num": "120",
      "name": "Staryu",
      "img": "http://www.serebii.net/pokemongo/pokemon/120.png",
      "type": [
          "Water"
      ],
      "height": "0.79 m",
      "weight": "34.5 kg",
      "candy": "Staryu Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 1.95,
      "avg_spawns": 195,
      "spawn_time": "22:59",
      "multipliers": [
          2.38,
          2.41
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "121",
              "name": "Starmie"
          }
      ],
      "dexEntry": "An enigmatic Pokemon that can effortlessly regenerate any appendage it loses in battle."
  },
  {
      "id": 121,
      "num": "121",
      "name": "Starmie",
      "img": "http://www.serebii.net/pokemongo/pokemon/121.png",
      "type": [
          "Water",
          "Psychic"
      ],
      "height": "1.09 m",
      "weight": "80.0 kg",
      "candy": "Staryu Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "06:57",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass",
          "Bug",
          "Ghost",
          "Dark"
      ],
      "prev_evolution": [
          {
              "num": "120",
              "name": "Staryu"
          }
      ],
      "dexEntry": "The center section is named the core. People think it is communicating when it glows in 7 colors."
  },
  {
      "id": 122,
      "num": "122",
      "name": "Mr. Mime",
      "img": "http://www.serebii.net/pokemongo/pokemon/122.png",
      "type": [
          "Psychic"
      ],
      "height": "1.30 m",
      "weight": "54.5 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.0031,
      "avg_spawns": 0.31,
      "spawn_time": "01:51",
      "multipliers": null,
      "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
      ],
      "dexEntry": "Always practices its pantomime act. It makes enemies believe something exists that really doesn't."
  },
  {
      "id": 123,
      "num": "123",
      "name": "Scyther",
      "img": "http://www.serebii.net/pokemongo/pokemon/123.png",
      "type": [
          "Bug",
          "Flying"
      ],
      "height": "1.50 m",
      "weight": "56.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.14,
      "avg_spawns": 14,
      "spawn_time": "05:43",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Electric",
          "Ice",
          "Flying",
          "Rock"
      ],
      "dexEntry": "Its blindingly fast speed adds to the sharpness of its twin forearm scythes which can slice through thick logs in one wicked stroke."
  },
  {
      "id": 124,
      "num": "124",
      "name": "Jynx",
      "img": "http://www.serebii.net/pokemongo/pokemon/124.png",
      "type": [
          "Ice",
          "Psychic"
      ],
      "height": "1.40 m",
      "weight": "40.6 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.35,
      "avg_spawns": 35,
      "spawn_time": "05:41",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Bug",
          "Rock",
          "Ghost",
          "Dark",
          "Steel"
      ],
      "dexEntry": "It has several different cry patterns, each of which seems to have its own meaning."
  },
  {
      "id": 125,
      "num": "125",
      "name": "Electabuzz",
      "img": "http://www.serebii.net/pokemongo/pokemon/125.png",
      "type": [
          "Electric"
      ],
      "height": "1.09 m",
      "weight": "30.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.074,
      "avg_spawns": 7.4,
      "spawn_time": "04:28",
      "multipliers": null,
      "weaknesses": [
          "Ground"
      ],
      "dexEntry": "Electricity runs across the surface of its body. In darkness, its entire body glows a whitish-blue."
  },
  {
      "id": 126,
      "num": "126",
      "name": "Magmar",
      "img": "http://www.serebii.net/pokemongo/pokemon/126.png",
      "type": [
          "Fire"
      ],
      "height": "1.30 m",
      "weight": "44.5 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.1,
      "avg_spawns": 10,
      "spawn_time": "20:36",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "dexEntry": "The fiery surface of its body gives off a wavering, rippling glare that is similar to the sun."
  },
  {
      "id": 127,
      "num": "127",
      "name": "Pinsir",
      "img": "http://www.serebii.net/pokemongo/pokemon/127.png",
      "type": [
          "Bug"
      ],
      "height": "1.50 m",
      "weight": "55.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.99,
      "avg_spawns": 99,
      "spawn_time": "03:25",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Flying",
          "Rock"
      ],
      "dexEntry": "When the temperature drops at night, it sleeps on treetops or among roots where it is well hidden."
  },
  {
      "id": 128,
      "num": "128",
      "name": "Tauros",
      "img": "http://www.serebii.net/pokemongo/pokemon/128.png",
      "type": [
          "Normal"
      ],
      "height": "1.40 m",
      "weight": "88.4 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.12,
      "avg_spawns": 12,
      "spawn_time": "00:37",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "dexEntry": "They fight each other by locking horns. The herd's protector takes pride in its battle-scarred horns."
  },
  {
      "id": 129,
      "num": "129",
      "name": "Magikarp",
      "img": "http://www.serebii.net/pokemongo/pokemon/129.png",
      "type": [
          "Water"
      ],
      "height": "0.89 m",
      "weight": "10.0 kg",
      "candy": "Magikarp Candy",
      "candy_count": 400,
      "egg": "2 km",
      "spawn_chance": 4.78,
      "avg_spawns": 478,
      "spawn_time": "14:26",
      "multipliers": [
          10.1,
          11.8
      ],
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "next_evolution": [
          {
              "num": "130",
              "name": "Gyarados"
          }
      ],
      "dexEntry": "A pathetic excuse for a Pokemon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it."
  },
  {
      "id": 130,
      "num": "130",
      "name": "Gyarados",
      "img": "http://www.serebii.net/pokemongo/pokemon/130.png",
      "type": [
          "Water",
          "Flying"
      ],
      "height": "6.50 m",
      "weight": "235.0 kg",
      "candy": "Magikarp Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0032,
      "avg_spawns": 0.32,
      "spawn_time": "02:15",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "129",
              "name": "Magikarp"
          }
      ],
      "dexEntry": "It appears whenever there is world conflict, burning down any place it travels through."
  },
  {
      "id": 131,
      "num": "131",
      "name": "Lapras",
      "img": "http://www.serebii.net/pokemongo/pokemon/131.png",
      "type": [
          "Water",
          "Ice"
      ],
      "height": "2.49 m",
      "weight": "220.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.006,
      "avg_spawns": 0.6,
      "spawn_time": "08:59",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Rock"
      ],
      "dexEntry": "Its high intelligence enables it to understand human speech. It likes to ferry people on its back."
  },
  {
      "id": 132,
      "num": "132",
      "name": "Ditto",
      "img": "http://www.serebii.net/pokemongo/pokemon/132.png",
      "type": [
          "Normal"
      ],
      "height": "0.30 m",
      "weight": "4.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "dexEntry": "It can transform into anything. When it sleeps, it changes into a stone to avoid being attacked."
  },
  {
      "id": 133,
      "num": "133",
      "name": "Eevee",
      "img": "http://www.serebii.net/pokemongo/pokemon/133.png",
      "type": [
          "Normal"
      ],
      "height": "0.30 m",
      "weight": "6.5 kg",
      "candy": "Eevee Candy",
      "candy_count": 25,
      "egg": "10 km",
      "spawn_chance": 2.75,
      "avg_spawns": 275,
      "spawn_time": "05:32",
      "multipliers": [
          2.02,
          2.64
      ],
      "weaknesses": [
          "Fighting"
      ],
      "next_evolution": [
          {
              "num": "134",
              "name": "Vaporeon"
          },
          {
              "num": "135",
              "name": "Jolteon"
          },
          {
              "num": "136",
              "name": "Flareon"
          }
      ],
      "dexEntry": "Due to its unstable genetic makeup, this special Pokemon conceals many different possible evolutions."
  },
  {
      "id": 134,
      "num": "134",
      "name": "Vaporeon",
      "img": "http://www.serebii.net/pokemongo/pokemon/134.png",
      "type": [
          "Water"
      ],
      "height": "0.99 m",
      "weight": "29.0 kg",
      "candy": "Eevee Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.014,
      "avg_spawns": 1.4,
      "spawn_time": "10:54",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass"
      ],
      "prev_evolution": [
          {
              "num": "133",
              "name": "Eevee"
          }
      ],
      "dexEntry": "As it uses the fins on the tip of its tail to swim, it blends with the water perfectly."
  },
  {
      "id": 135,
      "num": "135",
      "name": "Jolteon",
      "img": "http://www.serebii.net/pokemongo/pokemon/135.png",
      "type": [
          "Electric"
      ],
      "height": "0.79 m",
      "weight": "24.5 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "02:30",
      "multipliers": null,
      "weaknesses": [
          "Ground"
      ],
      "prev_evolution": [
          {
              "num": "133",
              "name": "Eevee"
          }
      ],
      "dexEntry": "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts."
  },
  {
      "id": 136,
      "num": "136",
      "name": "Flareon",
      "img": "http://www.serebii.net/pokemongo/pokemon/136.png",
      "type": [
          "Fire"
      ],
      "height": "0.89 m",
      "weight": "25.0 kg",
      "candy": "Eevee Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "07:02",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Ground",
          "Rock"
      ],
      "prev_evolution": [
          {
              "num": "133",
              "name": "Eevee"
          }
      ],
      "dexEntry": "It fluffs out its fur collar to cool down its body temperature, which can reach 1,650 degrees Fahrenheit."
  },
  {
      "id": 137,
      "num": "137",
      "name": "Porygon",
      "img": "http://www.serebii.net/pokemongo/pokemon/137.png",
      "type": [
          "Normal"
      ],
      "height": "0.79 m",
      "weight": "36.5 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "02:49",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "dexEntry": "A manmade Pokemon that came about as a result of research. It is programmed with only basic motions."
  },
  {
      "id": 138,
      "num": "138",
      "name": "Omanyte",
      "img": "http://www.serebii.net/pokemongo/pokemon/138.png",
      "type": [
          "Rock",
          "Water"
      ],
      "height": "0.41 m",
      "weight": "7.5 kg",
      "candy": "Omanyte Candy",
      "candy_count": 50,
      "egg": "10 km",
      "spawn_chance": 0.14,
      "avg_spawns": 14,
      "spawn_time": "10:23",
      "multipliers": [
          2.12
      ],
      "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
      ],
      "next_evolution": [
          {
              "num": "139",
              "name": "Omastar"
          }
      ],
      "dexEntry": "Revived from an ancient fossil, this Pokemon uses air stored in its shell to sink and rise in water."
  },
  {
      "id": 139,
      "num": "139",
      "name": "Omastar",
      "img": "http://www.serebii.net/pokemongo/pokemon/139.png",
      "type": [
          "Rock",
          "Water"
      ],
      "height": "0.99 m",
      "weight": "35.0 kg",
      "candy": "None",
      "egg": "Omanyte Candy",
      "spawn_chance": 0.0061,
      "avg_spawns": 0.61,
      "spawn_time": "05:04",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
      ],
      "prev_evolution": [
          {
              "num": "138",
              "name": "Omanyte"
          }
      ],
      "dexEntry": "Apparently, it cracked Shellder's shell with its sharp fangs and sucked out the insides."
  },
  {
      "id": 140,
      "num": "140",
      "name": "Kabuto",
      "img": "http://www.serebii.net/pokemongo/pokemon/140.png",
      "type": [
          "Rock",
          "Water"
      ],
      "height": "0.51 m",
      "weight": "11.5 kg",
      "candy": "Kabuto Candy",
      "candy_count": 50,
      "egg": "10 km",
      "spawn_chance": 0.1,
      "avg_spawns": 10,
      "spawn_time": "00:05",
      "multipliers": [
          1.97,
          2.37
      ],
      "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
      ],
      "next_evolution": [
          {
              "num": "141",
              "name": "Kabutops"
          }
      ],
      "dexEntry": "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell."
  },
  {
      "id": 141,
      "num": "141",
      "name": "Kabutops",
      "img": "http://www.serebii.net/pokemongo/pokemon/141.png",
      "type": [
          "Rock",
          "Water"
      ],
      "height": "1.30 m",
      "weight": "40.5 kg",
      "candy": "Kabuto Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0032,
      "avg_spawns": 0.32,
      "spawn_time": "23:40",
      "multipliers": null,
      "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
      ],
      "prev_evolution": [
          {
              "num": "140",
              "name": "Kabuto"
          }
      ],
      "dexEntry": "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."
  },
  {
      "id": 142,
      "num": "142",
      "name": "Aerodactyl",
      "img": "http://www.serebii.net/pokemongo/pokemon/142.png",
      "type": [
          "Rock",
          "Flying"
      ],
      "height": "1.80 m",
      "weight": "59.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.018,
      "avg_spawns": 1.8,
      "spawn_time": "23:40",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Electric",
          "Ice",
          "Rock",
          "Steel"
      ],
      "dexEntry": "This vicious Pokemon is said to have flown in ancient skies while shrieking high-pitched cries."
  },
  {
      "id": 143,
      "num": "143",
      "name": "Snorlax",
      "img": "http://www.serebii.net/pokemongo/pokemon/143.png",
      "type": [
          "Normal"
      ],
      "height": "2.11 m",
      "weight": "460.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.016,
      "avg_spawns": 1.6,
      "spawn_time": "23:40",
      "multipliers": null,
      "weaknesses": [
          "Fighting"
      ],
      "dexEntry": "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful."
  },
  {
      "id": 144,
      "num": "144",
      "name": "Articuno",
      "img": "http://www.serebii.net/pokemongo/pokemon/144.png",
      "type": [
          "Ice",
          "Flying"
      ],
      "height": "1.70 m",
      "weight": "55.4 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
          "Fire",
          "Electric",
          "Rock",
          "Steel"
      ],
      "dexEntry": "A legendary bird Pokemon that is said to appear to doomed people who are lost in icy mountains."
  },
  {
      "id": 145,
      "num": "145",
      "name": "Zapdos",
      "img": "http://www.serebii.net/pokemongo/pokemon/145.png",
      "type": [
          "Electric",
          "Flying"
      ],
      "height": "1.60 m",
      "weight": "52.6 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
          "Ice",
          "Rock"
      ],
      "dexEntry": "A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts."
  },
  {
      "id": 146,
      "num": "146",
      "name": "Moltres",
      "img": "http://www.serebii.net/pokemongo/pokemon/146.png",
      "type": [
          "Fire",
          "Flying"
      ],
      "height": "2.01 m",
      "weight": "60.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
          "Water",
          "Electric",
          "Rock"
      ],
      "dexEntry": "This legendary Pokemon scatters embers with every flap of its wings. It is a thrilling sight to behold."
  },
  {
      "id": 147,
      "num": "147",
      "name": "Dratini",
      "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
      "type": [
          "Dragon"
      ],
      "height": "1.80 m",
      "weight": "3.3 kg",
      "candy": "Dratini Candy",
      "candy_count": 25,
      "egg": "10 km",
      "spawn_chance": 0.3,
      "avg_spawns": 30,
      "spawn_time": "06:41",
      "multipliers": [
          1.83,
          1.84
      ],
      "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
      ],
      "next_evolution": [
          {
              "num": "148",
              "name": "Dragonair"
          },
          {
              "num": "149",
              "name": "Dragonite"
          }
      ],
      "dexEntry": "Long considered a mythical Pokemon until recently when a small colony was found living underwater."
  },
  {
      "id": 148,
      "num": "148",
      "name": "Dragonair",
      "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
      "type": [
          "Dragon"
      ],
      "height": "3.99 m",
      "weight": "16.5 kg",
      "candy": "Dratini Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "11:57",
      "multipliers": [
          2.05
      ],
      "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
      ],
      "prev_evolution": [
          {
              "num": "147",
              "name": "Dratini"
          }
      ],
      "next_evolution": [
          {
              "num": "149",
              "name": "Dragonite"
          }
      ],
      "dexEntry": "They say that if it emits an aura from its whole body, the weather will begin to change instantly."
  },
  {
      "id": 149,
      "num": "149",
      "name": "Dragonite",
      "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
      "type": [
          "Dragon",
          "Flying"
      ],
      "height": "2.21 m",
      "weight": "210.0 kg",
      "candy": "Dratini Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0011,
      "avg_spawns": 0.11,
      "spawn_time": "23:38",
      "multipliers": null,
      "weaknesses": [
          "Ice",
          "Rock",
          "Dragon",
          "Fairy"
      ],
      "prev_evolution": [
          {
              "num": "147",
              "name": "Dratini"
          },
          {
              "num": "148",
              "name": "Dragonair"
          }
      ],
      "dexEntry": "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore."
  },
  {
      "id": 150,
      "num": "150",
      "name": "Mewtwo",
      "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
      "type": [
          "Psychic"
      ],
      "height": "2.01 m",
      "weight": "122.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
      ],
      "dexEntry": "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments."
  },
  {
      "id": 151,
      "num": "151",
      "name": "Mew",
      "img": "http://www.serebii.net/pokemongo/pokemon/151.png",
      "type": [
          "Psychic"
      ],
      "height": "0.41 m",
      "weight": "4.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
      ],
      "dexEntry": "Its DNA is said to contain the genetic codes of all Pokemon."
  }
]