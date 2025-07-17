import { useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams()
  const [commentsVisible, setCommentsVisible] = useState(false)

  // Film verileri - gerçek uygulamada API'den gelecek
  const movieData = {
    privateryan: {
      title: 'Saving Private Ryan',
      summary: 'Saving Private Ryan is a 1998 American war movie directed by Steven Spielberg and written by Robert Rodat. Set during the Invasion of Normandy in World War II, the movie is known for its graphic portrayal of war and for the intensity of its second scene of 24 minutes, a depiction of the Omaha Beach assault during the Normandy landings. The movie follows United States Army Rangers Captain John H. Miller (Tom Hanks) and his squad (Tom Sizemore, Edward Burns, Barry Pepper, Giovanni Ribisi, Vin Diesel, Adam Goldberg, and Jeremy Davies) as they search for a paratrooper, Private First Class James Francis Ryan (Matt Damon), the last surviving brother of a family of four, with his three other brothers having been killed in action.',
      videoUrl: 'https://www.youtube.com/embed/XkPA4XrWiy8',
      comments: [
        { user: 'Anonym User', text: 'Great movie!' },
        { user: 'Anonym User', text: 'I really enjoyed it.' },
        { user: 'Anonym User', text: 'Really liked the cinematics in the battle scenes!' },
        { user: 'Anonym User', text: 'Tom Hanks does his role very well.' }
      ]
    },
    thedarkknight: {
      title: 'The Dark Knight',
      summary: 'The Dark Knight is a 2008 superhero film directed by Christopher Nolan, from a screenplay co-written with his brother Jonathan. Based on the DC Comics superhero Batman, it is the sequel to Batman Begins (2005), and the second installment in The Dark Knight trilogy. The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos. The ensemble cast includes Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman.',
      videoUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
      comments: [
        { user: 'Anonym User', text: 'What a movie!' },
        { user: 'Anonym User', text: 'Best Joker of all time!' },
        { user: 'Anonym User', text: 'Rest in piece Heath Ledger' },
        { user: 'Anonym User', text: 'Transformation of Christian Bale is insane!' }
      ]
    },
    kuruotlarustune: {
      title: 'Kuru Otlar Üstüne',
      summary: 'About Dry Grasses (Turkish: Kuru Otlar Üstüne) is a 2023 Turkish-language drama film directed by Nuri Bilge Ceylan and co-written by Ceylan, Ebru Ceylan, and Akın Aksu. Starring Deniz Celiloğlu, Merve Dizdar and Musab Ekici, it follows a teacher working in rural eastern Anatolia with hopes of moving to Istanbul when he is accused of abusing a student. The film premiered in the main competition section of the 2023 Cannes Film Festival, where Dizdar won the Best Actress award. It was selected as the Turkish entry for the Best International Feature Film at the 96th Academy Awards, but was not nominated.',
      videoUrl: 'https://www.youtube.com/embed/Ywajc6S8YEg',
      comments: [
        { user: 'Anonym User', text: 'Nuri Bilge Ceylan is one of my fav directors.' },
        { user: 'Anonym User', text: 'Dramatic :/' },
        { user: 'Anonym User', text: "Couldn't handle my emotion at the end ;/" }
      ]
    },
    walle: {
      title: 'Wall-E',
      summary: 'WALL-E (stylized with an interpunct as WALL·E) is a 2008 American animated romantic science fiction film produced by Pixar Animation Studios for Walt Disney Pictures. The film was directed by Andrew Stanton, produced by Jim Morris, and written by Stanton and Jim Reardon. It stars the voices of Ben Burtt, Elissa Knight, Jeff Garlin, John Ratzenberger, Kathy Najimy, with Sigourney Weaver and Fred Willard. The film follows a solitary robot named WALL-E on a future, uninhabitable, deserted Earth in 2805, left to clean up garbage. He is visited by a robot called EVE sent from the starship Axiom, with whom he falls in love and pursues across the galaxy.',
      videoUrl: 'https://www.youtube.com/embed/CZ1CATNbXg0',
      comments: [
        { user: 'Anonym User', text: 'Cutest Robot Ever.' },
        { user: 'Anonym User', text: 'The love of artifical intelligences, so cute.' },
        { user: 'Anonym User', text: 'Is the future really going to look like this?' }
      ]
    },
    ineksaban: {
      title: 'İnek Şaban',
      summary: 'Manavda çıraklık yapmakta olan Şaban bir gün sevdiği kızın başlık parasını ödemek için Almanya\'ya gitmek üzere havalimanına gider. Ne var ki, Şaban\'ı kaleci Bülent sanan Kara Mithat\'ın adamları Şaban\'ı yaka paça Mithat\'a götürürler. Şaban, Bülent\'in yerine maçlara çıkar, maçlarda aklına manavda attığı karpuzlar gelir ve kalede adeta devleşir. Filmin sonlarına doğru Bülent geri döner ve gerçek anlaşılır.',
      videoUrl: 'https://www.youtube.com/embed/8SnV5nHd7j0',
      comments: [
        { user: 'Anonym User', text: 'Kemal Sunal rolünü çok iyi yapardı, mekanı cennet olsun.' },
        { user: 'Anonym User', text: 'Küçüklüğümüzün filmiydi, hey gidi günler.' },
        { user: 'Anonym User', text: 'Son kısımda Bülent gelmeseydi iyiydi.' }
      ]
    },
    godfather: {
      title: 'The Godfather',
      summary: 'The Godfather is a 1972 American epic gangster film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo\'s best-selling 1969 novel of the same title. The film stars an ensemble cast including Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton. It is the first installment in The Godfather trilogy, chronicling the Corleone family under patriarch Vito Corleone (Brando) from 1945 to 1955. It focuses on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.',
      videoUrl: 'https://www.youtube.com/embed/1x0GpEZnwa8',
      comments: [
        { user: 'Anonym User', text: 'One of the greatest movies ever!!' },
        { user: 'Anonym User', text: 'Marlon Brando was perfect in this role.' },
        { user: 'Anonym User', text: 'Classic mafia movie, must watch!' }
      ]
    },
    seven: {
      title: 'Se7en',
      summary: 'Seven (often stylized as Se7en) is a 1995 American crime thriller film directed by David Fincher and written by Andrew Kevin Walker. It stars Brad Pitt and Morgan Freeman, with Gwyneth Paltrow, and John C. McGinley in supporting roles. Set in an unnamed, crime-ridden city, Seven\'s narrative follows disenchanted, nearly retired detective William Somerset (Freeman) and his newly transferred partner David Mills (Pitt) as they try to stop a serial killer from committing a series of murders based on the seven deadly sins.',
      videoUrl: 'https://www.youtube.com/embed/hImAmM5-Fpg',
      comments: [
        { user: 'Anonym User', text: 'The end was mind blowing, I was shocked at the end of the movie.' },
        { user: 'Anonym User', text: 'David Fincher knows how to make thrillers.' },
        { user: 'Anonym User', text: 'Brad Pitt and Morgan Freeman great duo!' }
      ]
    },
    kader: {
      title: 'Kader',
      summary: 'Bekir (Ufuk Bayraktar) Uğur\'a (Vildan Atasever), Uğur Zagor\'a (Ozan Bilen), Zagor ise suç işlemeye aşıktır. Durum bu haldeyken Zagor hapisten çıkar. Boğucu ve sıcak bir yaz gecesi aksilikler birbirini takip edince Cevat (Engin Akyürek) ile Zagor karşı karşıya gelir. Zagor Cevat\'ı gözünü kırpmadan öldürüp kaçar. Aynı gece Uğur da kaybolur. Bu cinayet ve ardından Uğur\'un Zagor\'la birlikte kayboluşu; o güne kadar Cevat\'ın koruması altında yaşayan genç anne (Müge Ulusoy), felçli baba (Mustafa Uzunyılmaz) ve küçük erkek kardeş için zor, karanlık günlerin habercisi olsa da Uğur\'a delicesine âşık olan Bekir\'in kurtuluş umudu gibidir.',
      videoUrl: 'https://www.youtube.com/embed/mUDfr61XuHo',
      comments: [
        { user: 'Anonym User', text: 'Bekir\'in Uğur\'a olan aşkı onu öldürecek ama haberi yok.' },
        { user: 'Anonym User', text: 'Turkish cinema at its finest.' },
        { user: 'Anonym User', text: 'Deep and emotional story.' }
      ]
    }
  }

  const movie = movieData[id] || { title: 'Movie Title', summary: 'Movie summary...', videoUrl: '' }

  const toggleComments = () => {
    setCommentsVisible(!commentsVisible)
  }

  return (
    <div className="wrapper">
      <h1>{movie.title}</h1>
      <div className="movie-summary">
        <p>{movie.summary}</p>
      </div>
      <hr />
      {movie.videoUrl && (
        <div className="movie-video">
          <iframe
            width="800"
            height="450"
            src={movie.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <hr />
      <div className="spoiler-alert">Spoiler Alert</div>
      <button className="toggle-comments" onClick={toggleComments}>
        {commentsVisible ? 'Hide Comments' : 'Show Comments'}
      </button>
      <div 
        className="movie-comments" 
        style={{ 
          display: commentsVisible ? 'block' : 'none',
          height: commentsVisible ? 'auto' : '0px'
        }}
      >
        <h2>User Comments</h2>
        {movie.comments && movie.comments.map((comment, index) => (
          <div key={index} className="comment">
            <p><strong>{comment.user}:</strong> {comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetail 