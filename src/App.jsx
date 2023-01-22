import './App.scss';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About';
import Horror from './Components/Filter/Horror';
import Mystery from './Components/Filter/Mystery';
import Action from './Components/Filter/Action';
import Anime from './Components/Filter/Anime';
import Aos from 'aos';
import Romantic from './Components/Filter/Romantic';
import MoviePage from './Components/MoviePage';


function App() {
  Aos.init();
  // Initialize

  const horrorMovies = [{cat:"Horror",duration:"1hr 45min",description:"The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",name:"Alien",year:"1979",img:"https://i.pinimg.com/originals/03/5a/1e/035a1e61ba9e4b1fd767bf8066c6f45e.jpg"},
{cat:"Horror",name:"Psycho",duration:"2hr 50min",description:"A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",year:"2020",img:"https://upload.wikimedia.org/wikipedia/en/a/ac/Psycho_2020_poster.jpg"},
{cat:"Horror",name:"The shinning",duration:"3hr 20min",description:"A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future." ,year:"1980",img:"https://play-lh.googleusercontent.com/SXwpr8-M2iXvMT6hwkTK7knDF7x01Hy03e9tJEi1LA53n9cMYb0-OCtvBcpE_DuUAriVsgAu_lwEJXZGXrQl"},
{cat:"Horror",name:"Tumbbad",duration:"2hr 50min",year:"2018",description:"A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born.",img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00079092-wmcvrnxtgs-portrait.jpg"},
{cat:"Horror",name:"The Thing",duration:"3hr 10min",description:"A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",year:"1982",img:"https://upload.wikimedia.org/wikipedia/en/6/65/Thingprequelfairuse.jpg"},
]

const MysteryMovies = [{cat:"Mystery",name:"The Mirror Game",duration:"1hr 50min",description:"Ayna is an actor and the prison is his stage. He slips into the characters of the powerful convicted in exchange of money and take their place in prison. This strange profession is borne out of a society that doesn't give him a chance to follow his passion of acting, but forces him to act in the real life. Falling in love with the girl next door changes his life equation and he decides to end this career with one last performance.",year:"2016",img:"https://m.media-amazon.com/images/M/MV5BOTQzYjk2ZTYtM2FhNi00ODQ1LWI0YWYtZDVhMzRiN2ZlMzQ5XkEyXkFqcGdeQXVyMTE3MzIyMDM5._V1_QL75_UX190_CR0,8,190,281_.jpg"},
{cat:"Mystery",name:"Seven",duration:"2hr 20min",description:"Seven (stylized as Se7en) is a 1995 American crime thriller film directed by David Fincher and written by Andrew Kevin Walker. It stars Brad Pitt, Morgan Freeman, Gwyneth Paltrow, and John C. McGinley. Set in a crime-ridden, unnamed city, Seven's plot follows disenchanted,",year:"1995",img:"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
{cat:"Mystery",name:"The Silence of the Lambs",duration:"3hr 20min",description:"The Silence of the Lambs is a 1991 American psychological horror film directed by Jonathan Demme and written by Ted Tally, adapted from Thomas Harris's 1988 novel. It stars Jodie Foster as Clarice Starling, a young FBI trainee who is hunting a serial killer, Buffalo Bill (Ted Levine), who skins his female victims.",year:"1991",img:"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
{cat:"Mystery",name:"Rear Window",duration:"2hr 50min",description:"A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",year:"1954",img:"https://upload.wikimedia.org/wikipedia/commons/3/38/Rear_Window_film_poster.jpg"},
{cat:"Mystery",name:"The Lives of Others",duration:"2hr 20min",description:"In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",year:"2006",img:"https://m.media-amazon.com/images/I/81LoE+rY+sL.jpg"},
]

const RomanticMovies = [{cat:"Romantic",name:"Forest Gump",duration:"2hr 35min",description:"Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life.",year:"1994",img:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},
{cat:"Romantic",name:"Life is Beautiful",duration:"1hr 20min",description:"A gentle Jewish-Italian waiter, Guido Orefice (Roberto Benigni), meets Dora (Nicoletta Braschi), a pretty schoolteacher, and wins her over with his charm and humor. Eventually they marry and have a son, Giosue (Giorgio Cantarini).",year:"1997",img:"https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},
{cat:"Romantic",name:"Modern Times",duration:"3hr 50min",description:"This comedic masterpiece finds the iconic Little Tramp (Charlie Chaplin) employed at a state-of-the-art factory where the inescapable machinery completely overwhelms him, and where various mishaps keep getting him sent to prison.",year:"1936",img:"https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
{cat:"Romantic",name:"City Lights",duration:"2hr 20min",description:"This classic story of love, tragedy and hope centers around a homeless tramp whom meets and instantly falls in love with a beautiful, albeit blind, flower seller.",year:"2014",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HOVNsJqXpQxIQixZLYIzHVxFOPvAhkaJ0k3Y5XMu1Vx3bY9n"},
{cat:"Romantic",name:"Chhichhore",duration:"3hr 10min",description:"A tragic incident forces Anirudh, a middle-aged man, to take a trip down memory lane and reminisce his college days along with his friends, who were labelled as losers.",year:"2019",img:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Chhichhore_Poster.jpg/220px-Chhichhore_Poster.jpg"},
]
const AnimeMovies = [{cat:"Anime",name:"Spiritted Away",duration:"2hr 20min",description:"Spirited Away (Japanese: 千と千尋の神隠し, Hepburn: Sen to Chihiro no Kamikakushi, lit.'Sen and Chihiro's Spiriting Away') is a 2001 Japanese animated fantasy film written and directed by Hayao Miyazaki, animated by Studio Ghibli. Spirited Away tells the story of Chihiro Ogino (Hiiragi), a ten-year-old girl who, while moving to a new neighborhood, enters the world of Kami",year:"2001",img:"https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"},
{cat:"Anime",name:"The Lion King",duration:"1hr 50min",description:"The Lion King is a 1994 American animated musical drama film produced by Walt Disney Feature Animation and released by Walt Disney Pictures. It is inspired by William Shakespeare's Hamlet with elements from the Biblical stories of Joseph and Moses and Disney's 1942 film Bambi. Set in a kingdom of lions in Africa, The Lion King tells the story of Simba (Swahili for lion), a lion cub who is to succeed his father, Mufasa",year:"1994",img:"https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg"},
{cat:"Anime",name:"The Grave of the Fireflies",duration:"2hr 20min",description:"Grave of the Fireflies (Japanese: 火垂るの墓, Hepburn: Hotaru no Haka) is a 1988 Japanese animated war tragedy film based on a 1967 short story by Akiyuki Nosaka. It was written and directed by Isao Takahata, and animated by Studio Ghibli for Shinchosha Publishing. The film stars Tsutomu Tatsumi, Ayano Shiraishi, Yoshiko Shinohara and Akemi Yamaguchi.",year:"1988",img:"https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"},
{cat:"Anime",name:"Your Name",duration:"2hr 50min",description:"Your Name (Japanese: 君の名は。, Hepburn: Kimi no Na wa) is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films. It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies. The film was commissioned in 2014, written and directed by Makoto Shinkai.",year:"2016",img:"https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"},
{cat:"Anime",name:"Spider-Man Into the Spider Verse",duration:"2hr 20min",description:"It is the first animated film in the Spider-Man franchise. The film's story follows Miles Morales as he becomes the new Spider-Man and joins other Spider-People from various parallel universes to save his universe from Kingpin.",year:"2018",img:"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg"},
]

const ActionMovies = [{cat:"Action",name:"The Dark Knight",duration:"2hr 45min",description:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",year:"2008",img:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"},
{cat:"Action",name:"The Lord of the Rings - Return of the King",duration:"3hr 50min",description:"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",year:"2003",img:"https://images.moviesanywhere.com/45bc0ec075bfc0b4d8f184a7cc5bf993/876ed805-83b1-4387-b0d0-62d08c36536d.jpg"},
{cat:"Action",name:"Inception",duration:"1hr 50min",description:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster",year:"2020",img:"https://rukminim1.flixcart.com/image/416/416/l0r1j0w0/poster/j/o/u/large-inception-poster-print-poster-on-large-print-36x24-inches-original-imagcgwwykj65vuv.jpeg?q=70"},
{cat:"Action",name:"The Matrix",duration:"1hr 25min",description:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence",year:"2021",img:"https://rukminim1.flixcart.com/image/416/416/kmns7m80/poster/l/p/f/medium-the-matrix-an-american-maxi-origins-jumbo-medium-size-original-imagfgb6gx9yhwzs.jpeg?q=70"},
{cat:"Action",name:"The Star Wars - The Empire Strikes Back",duration:"2hr 20min",description:"After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",year:"1980",img:"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
]
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Horror' element = {<Horror/>}/>
            <Route path='/Romantic' element = {<Romantic/>}/>
            <Route path='/Mystery' element = {<Mystery/>}/>
            <Route path='/Action' element = {<Action/>}/>
            <Route path='/Anime' element = {<Anime/>}/>
            <Route path='/Horror/Alien' element={<MoviePage movie={horrorMovies[0]} recomend={horrorMovies}/>}/>
            <Route path='/Horror/Psycho' element={<MoviePage movie={horrorMovies[1]} recomend={horrorMovies}/>}/>
            <Route path='/Horror/The shinning' element={<MoviePage movie={horrorMovies[2]} recomend={horrorMovies}/>}/>
            <Route path='/Horror/Tumbbad' element={<MoviePage movie={horrorMovies[3]} recomend={horrorMovies}/>}/>
            <Route path='/Horror/The Thing' element={<MoviePage movie={horrorMovies[4]} recomend={horrorMovies}/>}/>
            <Route path='/Mystery/The Mirror game' element={<MoviePage movie={MysteryMovies[0]} recomend = {MysteryMovies}/>}/>
            <Route path='/Mystery/Seven' element={<MoviePage movie={MysteryMovies[1]} recomend = {MysteryMovies}/>}/>
            <Route path='/Mystery/The Silence of the Lambs' element={<MoviePage movie={MysteryMovies[2]} recomend = {MysteryMovies}/>}/>
            <Route path='/Mystery/Rear Window' element={<MoviePage movie={MysteryMovies[3]} recomend = {MysteryMovies}/>}/>
            <Route path='/Mystery/The Lives of Others' element={<MoviePage movie={MysteryMovies[4]} recomend = {MysteryMovies}/>}/>
            <Route path='/Romantic/Forest Gump' element={<MoviePage movie={RomanticMovies[0]} recomend = {RomanticMovies}/>}/>
            <Route path='/Romantic/Life is Beautiful' element={<MoviePage movie={RomanticMovies[1]} recomend = {RomanticMovies}/>}/>
            <Route path='/Romantic/Modern Times' element={<MoviePage movie={RomanticMovies[2]} recomend = {RomanticMovies}/>}/>
            <Route path='/Romantic/City Lights' element={<MoviePage movie={RomanticMovies[3]} recomend = {RomanticMovies}/>}/>
            <Route path='/Romantic/Chhichhore' element={<MoviePage movie={RomanticMovies[4]} recomend = {RomanticMovies}/>}/>
            <Route path='/Action/The Dark Knight' element={<MoviePage movie={ActionMovies[0]} recomend = {ActionMovies}/>}/>
            <Route path='/Action/The Lord of the Rings - Return of the King' element={<MoviePage movie={ActionMovies[1]} recomend = {ActionMovies}/>}/>
            <Route path='/Action/Inception' element={<MoviePage movie={ActionMovies[2]} recomend = {ActionMovies}/>}/>
            <Route path='/Action/The Matrix' element={<MoviePage movie={ActionMovies[3]} recomend = {ActionMovies}/>}/>
            <Route path='/Action/The Star Wars - The Empire Strikes Back' element={<MoviePage movie={ActionMovies[4]} recomend = {ActionMovies}/>}/>
            <Route path='/Anime/Spiritted Away' element={<MoviePage movie={AnimeMovies[0]} recomend = {AnimeMovies}/>}/>
            <Route path='/Anime/The Lion King' element={<MoviePage movie={AnimeMovies[1]} recomend = {AnimeMovies}/>}/>
            <Route path='/Anime/The Grave of the Fireflies' element={<MoviePage movie={AnimeMovies[2]} recomend = {AnimeMovies}/>}/>
            <Route path='/Anime/Your Name' element={<MoviePage movie={AnimeMovies[3]} recomend = {AnimeMovies}/>}/>
            <Route path='/Anime/Spider-Man Into the Spider Verse' element={<MoviePage movie={AnimeMovies[4]} recomend = {AnimeMovies}/>}/>

          </Routes>
      </div>
    </Router>
  );
}

export default App;
